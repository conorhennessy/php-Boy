
import os

os.system("wget -O collectionpage.html https://www.colchester.gov.uk/check-my-collection-day/?query=aae96a3d-6027-e711-80fa-5065f38b56d1&name=18%20Chaney%20Road.html")

with open('collectionpage.html', 'r') as myfile:
    pagetext=myfile.read()
    pagetext.replace("\n","")
    startint = pagetext.find("This Weeks Collection is")
    if(pagetext[startint:startint+110].replace(" ","").find("cardblueweek")!=-1):
        print("its blue week")
    else:
        print("its green week")



