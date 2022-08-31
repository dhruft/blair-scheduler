from audioop import cross
from flask import request, Flask, abort
from studentvue import StudentVue

from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory

from base64 import b64decode
from nacl.secret import SecretBox

from dotenv import load_dotenv
from pathlib import Path
import os

app = Flask(__name__, static_folder='client/build', static_url_path='')
CORS(app)

@app.route('/api', methods=['GET'])
@cross_origin()
def index():
    return {
        "tutorial": "Flask React Heroku"
    }

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

#getData API Route
@app.route("/getData")
@cross_origin()
def getData():
    try:
        encrypted_username = request.args.get('username').replace(" ", "+")
        encrypted_password = request.args.get('password').replace(" ", "+")
        
        username = decrypt(encrypted_username)
        password = decrypt(encrypted_password)
        
        sv = StudentVue(username, password, 'md-mcps-psv.edupoint.com')
        
        data = {"sch": {}, "titles":{}, "periods":[]}

        sch = sv.get_schedule(term_index=1)
        classes = sch["StudentClassSchedule"]["ClassLists"]["ClassListing"]

        for pd in range(len(classes)):
            if classes[pd]["@CourseTitle"] not in ["Lunch", "Counselor", "Advisory"]:
                data["periods"].append(str(pd))
                data["titles"][str(pd)] = classes[pd]["@CourseTitle"]
                data["sch"][str(pd)] = classes[pd]["@SectionGU"]

        info = sv.get_student_info()
        data["name"] = info["StudentInfo"]["FormattedName"]['$']
        data["school"] = info["StudentInfo"]["CurrentSchool"]['$']
        
        return(data)
    except:
        abort(500)
        return '500'
    
def decrypt(enc):
    load_dotenv()
    env_path = Path('.')/'.env'
    load_dotenv(dotenv_path=env_path)
    
    secret_key = str(os.getenv("PRIVATE_KEY"))
    
    encrypted = enc
    encrypted = encrypted.split(':')
    # We decode the two bits independently
    nonce = b64decode(encrypted[0])
    encrypted = b64decode(encrypted[1])
    # We create a SecretBox, making sure that out secret_key is in bytes
    box = SecretBox(bytes(secret_key, encoding='utf8'))
    decrypted = box.decrypt(encrypted, nonce).decode('utf-8')

    return decrypted

if __name__ == "__main__":
    app.run()