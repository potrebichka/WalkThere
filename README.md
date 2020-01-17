# _Walk There_

#### _Version 01/16/2019_

#### By _**Nina Potrebich, Sharon Lee, Adilet Momunaliev, Will Quanstrom**_

## Description

_A full stack location based mobile first website that allows users to search attractions within walking distance of their location._

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* NodeJS
* Go to https://opencagedata.com/api and get your own API key(API_KEY).
* Go to https://developers.google.com/maps/documentation/javascript/get-api-key and get your own API key(API_KEY_MAP)
* Go to https://www.yelp.com/developers/documentation/v3/authentication and get your own API key(API_KEY_YELP)

### Installing

Create a `.env` file in the root of your project and insert your key/value pairs in the following format of `KEY=VALUE`:

```sh
API_KEY=YOUR_KEY( There are three APIs one for google maps, for Yelp API, and for opencagedata.)
```
After cloning the project:
1. npm install
2. Do next steps:
* Open => "node_module" folder in your project
* Drop down list and open => "yelpfusion" folder
* Open "lib" folder
* Open file "index.js"
* Modify each original url 'https://api.yelp.com/v3/events/featured' with new one 'https://cors-anywhere.herokuapp.com/api.yelp.com/v3/events/featured'

3. Your project is ready to go:
```
npm run build
```

|Specifications | ex.INPUT  | ex. OUTPUT  |
|---|---|---|
| User can input location and app will search based on that location    | "Ballard"  |  Map will center and search from Ballard, Wa |
| If user leaves search field empty, app will search current location   | " "  | Map will center around current coordinates  |
| User can input type of attraction they are search for                 |  "Beer" | App will search for beer bars located within 1000 meters  |
| Once user submits, google map will appear in UI  | " " / "Thai food"  | Map will appear with results for thai food within a 1000 meter radius of current location |
| Map will dispaly markers for up to 10 search results   | "thai food"  | The locations of 10 thai restuarants will be marked on the google map   |
| Once submitted, app will display a list of up to 10 matching results that drop down with additional info  | "Ballard" / "Thai"  | UI will display names of up to 10 thai restuarants that, when clicked, drop down to display address, phone, and picture  |
| User can choose to create and account and authenticate when using app  | LOGIN - email: xxxx@gmail.com -- password: password1 | User will create reusable account  |
| User can add places to their accounts history for later reference  | User clicks on 'add place' which corresponds with search result they want to add  | Place is added in database corresponding to user  |
| User can access history to see their previously added places | User adds 'Koh Thai' to their places | At another date, after user authenticates, they can access "My Places" and find 'Koh Thai'|


## Technologies Used

_HTML, CSS, jQuery, Bootstrap, JavaScript, NodeJS, Firebase_

### License

*_Copyright (c) 2019 **Nina Potrebich, Sharon Lee, Adilet Momunaliev, Will Quanstrom**_*