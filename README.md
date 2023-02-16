****
# Foodie App

  
GitHub Repo named after your Capstone App's title.

List of Data Needs in README.md.

Tables, Fields, and Relationships listed in README.md.

Copy of ER diagrams saved in Repo.

Steps to create DB on GCP Instance, How to connect to it with Workbench, and how to seed it with data written in README.md.

Files with SQL commands to initialize the data.


****
# Instructions
Decide what the focus of your final project will be. Write it down.

**I want my app to be for the undecisive & forgetful person who is going out for a meal. Whether they are on the search for a restaurant or are sitting inside one, they can pull the app up and see the items they have chosen to save from previous visits. This way, they know what to order or avoid for their next meal.**

Create a name for this app/project.

Create new repo titled the name of your app with a README.md file.

In the README.md, list out the data you think you'll need for this app.

Categorize the data into tables.

Define relationships between those tables.

Using any digital tool you like, construct an ER diagram that communicates those tables, their relationships and their fields/properties.

Save a copy of this ER Diagram in the repo.

Review the steps to create a DB, connect to it, seed it with data and write them down in the README.md.

**Create A DataBase on GCP**
1. Click the "SQL" option under the "STORAGE" header  
2. Click "CREATE INSTANCE" on GCP
3. Select "MySQL"
4. Fill out as follows
    Instance ID: FoodAPI
    Root password: password of my choice
    Leave other defaults alone
5. Click "Create" and wait a couple mins while it sets up. A green checkmark means it's done.
6. Click on the "Instance ID".
7. Click on "Databases".
9. Create a database and name it(typically admin).

**Connect using MySQL Workbench to Database on GCP**
1. Open up MySQL Workbench
2. Click the plus sign near the text that reads "MySQL Connections"
3. Fill out as follows
    Connection Name: Instance ID
    Hostname: IP address of the database in GCP
    Password: Click "store in keychain" and use password from before
    Default Schema: Name of database from earlier
4. Click "Test Connection" and make sure its successful.
5. Click "OK" to save connection. Double click connection to open & connect to database.

Write the SQL Commands that would create the tables in files named after the data like: userSeedData.sql, carSeedData.sql, productSeedData.sql, etc...

Store those files in the repo

Upload the repo's link to the Checkpoint-2 Assignment