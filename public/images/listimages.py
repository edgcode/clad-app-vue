import os
import json

files = os.listdir()

print (files)

json_dict = [
    { 
        "url" : "/images/{0}".format(file),
        "filename" : file
        
    }
    for file in files
    if ".jpg" in file

]

json_string = json.dumps(json_dict, indent=4)

with open("filelist.json", "w") as f:
    f.write(json_string)