# Evaluate a news article with Natural Language Processing

## Description

The goal of this project was to develop a web app that lets a user run Natural Language Processing on articles on other websites.  In order to do this, we use the Aylien NPL API.  I built a simple interface to make calls to the api, and it returns information about the article regarding the content's polarity (positive, neutral, negative), its subjectivity (fact or opinion), and how confident it is about those judgments.  

## Requirements
this project require Node Package Manager.

## Installation

Clone this repo with
```
 git clone git@github.com:ryanxgraham/evaluate-news-nlp.git
```
Navigate to the root folder:
```
cd evaluate-news-nlp
```
Run the following:
```
npm install
```
You will need to create an account at
```
https://developer.aylien.com/signup
```
and get an appid, and API key, then create a ```.env``` file in the root directory of the repo.
add the following lines to the ```.env``` file:
```
API_ID=YOURAPPID
API_KEY=YOURAPIKEY
```
## Running the app

### In Dev Mode

To run the dev server:
```
npm run build-dev
```
To run tests:
```
npm run test
```

### In Production Mode
```
npm run build-prod
```
```
npm run start
```
## Contributions

Starter code provided by Udacity, Functionality implemented by
* Ryan Graham - [Github](https://github.com/ryanxgraham)
