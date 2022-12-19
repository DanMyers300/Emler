import pygsheets

# Authorize pygsheets using the JSON file
gc = pygsheets.authorize(service_file='python-368100-5f317bcc7d43.json')

# Open the source sheet
source_sheet = gc.open("Total Enrollment List - Spring 2022")

# Select the worksheet with the title "Sheet1" in the source sheet
source_worksheet = source_sheet.worksheet_by_title("PF")

# Select all values from the source worksheet
source_values = source_worksheet.get_all_values()

# Open the destination sheet
destination_sheet = gc.open("PF Office Hub - Fall 2022")

# Select the worksheet with the title "Sheet1" in the destination sheet
destination_worksheet = destination_sheet.worksheet_by_title("Enrollment List")

# Create a list of dictionaries with the cell coordinates and values
data = []
for row in range(len(source_values)):
    for col in range(len(source_values[row])):
        data.append({"cell": f"{chr(ord('A') + col)}{row+1}", "value": source_values[row][col]})

# Update the values in the destination worksheet
destination_worksheet.update_values(data)
