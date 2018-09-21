
import os

os.system("wget --output-document=collectionpage.html https://www.colchester.gov.uk/check-my-collection-day/?query=aae96a3d-6027-e711-80fa-5065f38b56d1&name=18%20Chaney%20Road.html")

with open('collectionpage.html', 'r') as myfile:
    pagetext=myfile.read()
    pagetext.replace("\n","")
    startint = pagetext.find("This Weeks Collection is")
    f = open("collectionweek.json","w+")
    if(pagetext[startint:startint+110].replace(" ","").find("cardblueweek")!=-1):
        print("its blue week")
        f.write("blue")
    if(pagetext[startint:startint+110].replace(" ","").find("cardgreenweek")!=-1):
        print("its green week")
        f.write("green")



