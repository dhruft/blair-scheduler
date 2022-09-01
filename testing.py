import base64
from urllib.request import DataHandler
from studentvue import StudentVue

username = '13088787806'
password = base64.b64decode('Z2FtMW5nWEQ='.encode('ascii')).decode('ascii')

sv = StudentVue(username, password, 'md-mcps-psv.edupoint.com')
data = {"sch": {}, "titles":{}, "periods":[]}

sch = sv.get_schedule()

if (bool(sch.get('RT_ERROR'))):
            print(500)
if (not bool(sch["StudentClassSchedule"]["ClassLists"].get('ClassListing'))):
            print(501)
            
            
classes = sch["StudentClassSchedule"]["ClassLists"]["ClassListing"]

for pd in range(len(classes)):
    if classes[pd]["@CourseTitle"] not in ["Lunch", "Counselor", "Advisory"]:
        data["periods"].append(str(pd))
        data["titles"][str(pd)] = classes[pd]["@CourseTitle"]
        data["sch"][str(pd)] = classes[pd]["@SectionGU"]
        
print(data)