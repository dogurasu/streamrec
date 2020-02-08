import requests
import json
import urllib.request
from bs4 import BeautifulSoup
import selenium
from selenium import webdriver

# open FF and navigate to Twitch tags page
browser = selenium.webdriver.Firefox()
browser.get('https://www.twitch.tv/directory/all/tags')
browser.implicitly_wait(5)

# format string
num = 1
# structure of tagJSONObj:
#       tJSONObj = {
#           "TagName 1",
#           "TagName 2",
#           "TagName 3",
#           "TagName 4",
#           .
#           .
#           .
#           "TagName 643"
#       }
tagJSONObj = {}

# scrape all tags
try:
    for i in range(1000):
        tagName = f"/html/body/div[1]/div/div[1]/div/main/div/div/div[3]/div/div/div[2]/div[2]/table/tbody/tr[{num}]/td[1]/div/div[2]/a/p"
        tagDescript = f"/html/body/div[1]/div/div[1]/div/main/div/div/div[3]/div/div/div[2]/div[2]/table/tbody/tr[{num}]/td[2]/div/p"
        tagJSONObj[browser.find_element_by_xpath(tagName).text] = browser.find_element_by_xpath(tagDescript).text
        num += 1
except selenium.common.exceptions.NoSuchElementException: #NoSuchElementException
    print("End of elements. Exiting program...")
        
# write JSON to file
with open('tags.json', 'w', encoding="utf-8") as tagFile:
    json.dump(tagJSONObj, tagFile, ensure_ascii=False, indent=4)

# close browser
browser.quit()
