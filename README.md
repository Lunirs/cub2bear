# Cub2Bear

## Description

Babies outgrow their clothing very fast. You can prepare and buy clothing for the baby. But they'll just outgrow it in a matter of a few weeks ~ a month. So what do you do with your old baby clothing? "Shove it in the attic" is probably the most popular answer we have heard. 

That's why we are introducing Cub2Bear! 

Cub2Bear is an ecommerce platform where users can sell their old baby clothing and even purchase ones for their baby's current size!

Currently, we do not have an active way to upload images on the site. We also do not have a working payment method. However, future developments will allow us to have a working checkout section.

### Deployed Application Link
Please check out the link to see our webpage!
https://cub2bear.herokuapp.com


## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Credits](#credits)

## Installation

There are no prior installations to use the deployed link. 
Just follow the link above and browse away!

However, if you are curious on how the website works in the code wise, we incorporated several npm packages.

After you clone down the repository, please run the following code block
```
npm i
```
By doing so, you will be installing the following npm packages.

1. bcrypt
2. express
3. express-handlebars
4. express-sessions
5. connect-session-sequelize
6. sequelize
7. mysql2
8. handlebars
9. dotenv
10. helmet

In order to fully get this working on your local machine, please create a .env file and fill out the file with your user and password for your machine.
```
DB_USER="input your user here"
DB_PW="input your password here"
DB_NAME='ecommerce_db'
```
You would have to create the db by running the schema.sql file in mysql through:

```
source schema.sql
```

Then run your seeds through the script:

```
npm run seed
```

With this you are ready to run this application.

## Usage

- When the user opens the application, the user will be able to see a full list of products with options to sort by category.

- For users to access their profile and cart, they would first have to sign up for our application!

- User can click on the login button to log in.

- After logging in, the user can navigate to their profile and cart through the nav bar menu.

- In the profile page, the user can post, edit, or delete product they would like to sell. Posted product will be shown on the front page of the application as well.

- In the cart page, user can manage amount of products or delete the product that user dosn't want to purchase.

## Application Screenshot
(attach a screenshot of few pages of the application after works done)

## Credits
Created by Shay Bendeck, Taeyong Lee, Akemah Tasha, Daniel Hong