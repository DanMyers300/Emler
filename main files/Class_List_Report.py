import selenium
from selenium import webdriver
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
import pyautogui

driver = webdriver.Chrome()

#Load ICP
driver.get('https://app.iclasspro.com/a/emlerdallas')
id_box = driver.find_element('id', 'uname')
id_box.send_keys('dmyerspf')
pass_box = driver.find_element('id', 'passwd')
pass_box.send_keys('Emler123')
login_button = driver.find_element('id', 'loginbutton')
login_button.click()

#Open up the report and run it
driver.get('https://app.iclasspro.com/a/emlerdallas#!/report/classes/4')
time.sleep(2)
filter_list = driver.find_element('id', 'filter-preset-list')
filter_list.click()
filter_list.send_keys(Keys.ARROW_DOWN * 2)
filter_list.send_keys(Keys.ENTER)
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
time.sleep(2)
html_button = driver.find_element(By.XPATH, "//*[@id='appdata-container']/icp-single-page-report-filters/div/div[2]/div/div[2]/div/div[3]/div[1]/button")
html_button.click()
time.sleep(20)
pyautogui.click(730,420)
time.sleep(5)
pyautogui.keyDown('ctrl')
pyautogui.press('s')
pyautogui.keyUp('ctrl')
time.sleep(2)
pyautogui.press('enter', presses=2)
'''
To-Do:

        1) Remove time.sleep(s) as it is bad practice
        2) Currently just saves the file, write script to print it using defualt printer
        3) Remove pyautogui as it is bad practice

'''
