# Liri Bot
---
- ***For:*** University of Utah Coding Bootcamp
- ***Developer:*** Justin Lambeth
- ***Deployment Date*** 5/3/2020
- ***APIs*** OMDB, Spotify, Bandsintown
- ***Built With*** Node.js, Javascript
- ***Demo***

## Description
---
LIRI bot is a command line program that takes user commands and queries from the command line and returns data from API's. The following commands have been hard coded into the program to give the user the capability to look up songs, concerts and movie information:

Commands | Function
---------|---------
concert-this | uses the **bandsintown** API to take a band name from the user and returns that bands next concert
spotify-this | uses the **spotify** API to take a song name from the user and returns the artist, song name, spotify-link and album 
movie-this | uses the **OMDB** API to take a movie name and returns the name, cast, release year, IMDB and Rotten Tomatoes rating, country of origin, language and plot 
do-this | uses the built in **readFile()** method to access data from a prepopulated .txt file and return its information as a command/search query.

***Before you get started, make sure you have these node packages installed:***
1. **Dotenv:** Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

     *Command Line: 'npm install dotenv'*


2.) **Request:** - Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

     *Command Line: 'npm install request'*

3.) ***Moment:*** - A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates. 

    *Command Line: 'npm install moment'*

4.) ***Fs:*** - A built in node package 

    *(npm i request)*


## Functionality
--- 
1.) spotify-this

   *<command, song name>*

    Function takes the userInput (command) and the userQuery(song), and returns the artist, full track name, a preview link and the album.

2.) concert-this: 

    *<command, artist name>*

    Function takes the userInput (command) and the userQuery(artist), and returns the next concert time and date for that artist, as well as location and city.


3.) movie-this
  *<command, movie name>*

    This function takes the userInput (command) and the userQuery(song), then returns the title, cast, release date, ratings, country of origin, original language and synopsis.


4.) do-this

      *<command>*

    Function that will randomly select one of the functions and produce a search.


### Notes
---
I was unable to get the Spotfy API to work properly before delpoying the program. I will need to discuss the changes to be made with my instructor or a TA. 
Error I was receiving: 
Error: Could not initialize Spotify client. You must supply an object containing your Spotify client "id" and "secret".
    at new Spotify (C:\Users\Justin\Desktop\LIRI Bot\node_modules\node-spotify-api\src\index.js:8:13)
    at Object.<anonymous> (C:\Users\Justin\Desktop\LIRI Bot\LIRI.js:12:15)
  
 In future versions I will resolve this issue and deploy the fully working product along with img's showing the program running properly.
