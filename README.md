# Quick News API
### [View The Deployed Database Here](https://quick-news-api.herokuapp.com/saved-news)
### [View The Front-End Repo](https://github.com/Andrey-1992/quick-news-ui)

## Overview
The goal of this [project](https://quick-news-ui.herokuapp.com/) is to generate an application where the users can have a quick access to the Top News from the New New York Times API, providing a Database and API with it which gives the opportunity to save the most relevant News for futures queries. Quick News API was an opportunity to learn how to create a database and build the API built with TypeScript. The API have been deployed in Heroku and is constructed using TypeScript for programing language, Express to set up the server and PostgreSQL / SQL to create relational databases.

## Set Up
```szh 
git clone git@github.com:Andrey-1992/quick-news-api.git
cd quick-news-api
npm install 
```
you'll need to have postgresql installed for the next part.
[Install Instructions](https://www.postgresql.org/download/macosx/)
```zsh
run psql postgres 
``` 
Create a new user and password and give them create database access:
```
CREATE ROLE api_user WITH LOGIN PASSWORD 'password';
ALTER ROLE api_user CREATEDB;
```
Log out of the root user and log in to the newly created user:
```
\q
psql -d postgres -U <api_user>
```
Create a local database and log into it:
```
CREATE DATABASE quicknew;
\c quick-news
```
Create a new table for saved news.
```
CREATE TABLE savednews(
  id SERIAL PRIMARY KEY,
  abstract VARCHAR(250),
  byline VARCHAR(250),
  title VARCHAR(250),
  multimediaurl VARCHAR(250),
  multimediacaption VARCHAR(250),
  urlink VARCHAR(250),
  section VARCHAR(250)
);
```
Open a new new terminal window and create a new file in this directory with ```touch .env``` and fill it out like so:
```
DB_USER='postgres'
DB_PASSWORD='password'
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=savednews
```
Run ```npm i cors dotenv express pg``` Go to ```config.js``` and comment lines 10-13. Make sure that the value of the key ```database``` in ```const config``` matches the database name that you gave the database you created earlier. ```Run npm start```

## Endpoints
  |             Endpoint              |              Use             |   Method   |  Required Properties for Request |
  |-----------------------------------|:----------------------------:|:----------:|:--------------------------------:|
  |       `/saved-news`           |      get all saved News         |    GET     |               none               |
  |       `/saved-news`         | post a new article |    POST    | `{
        abstract,
        byline,
        title,
        multimediaurl,
        multimediacaption,
        urlink,
        section 
      }` |
  |       `/saved-news/:id`                         | delete a selected News from Database |    DELETE  | `{"id": interger}`               |


## Tools & Technologies
<p text-align="center"> 
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat-square" alt="Express Badge">
    <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=fff&style=flat-square" />
    <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=fff&style=flat-square" />
</p>

## Author
- [Andrey Bermudez](https://github.com/Andrey-1992)

**************************************************************************

**[Back to top](#overview)**
