require("dotenv").config();

var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");



//This is where the Spotify keys will be stored
var spotify = new Spotify(keys.spotify);

//First input command 
var input = process.argv[2];
//Second imput command
var term = process.argv[3];

//This is a search function for the do-what-it-says command 
function search() {
    if (input === "concert-this") {
        if (!term) {
            term = "Adam Levine";
        }
        //Query URL for the Bands In Town API
        var queryURL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
        axios.get(queryURL).then(
            function (response) {
                //display venue, location, and time
                console.log("Venue: " + response.data[0].venue.name);
                console.log("Location: " + response.data[0].venue.location);
                console.log("Time: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    };
    
    //if the command is spotify-this-song
    if (input === "spotify-this-song") {
        //if the second input is empty, search for The Sign
        if (!term) {
            term = "The Sign";
        }
        //use the node-spotify-api to search the spotify api for information on the song
        spotify.search({ type: 'track', query: term }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            //display the artist, song name, link, and album
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song: " + data.tracks.items[0].name);
            console.log("Link: " + data.tracks.items[0].external_urls.spotify);
            console.log("Album: " + data.tracks.items[0].album.name);
        });
    };
    
    //if the command is movie-this
    if (input === "movie-this") {
        if (!term) {
            term = "Mr. Nobody";
        }
        var queryURL = "http://omdbapi.com/?apikey=trilogy&t=" + term;
        axios.get(queryURL).then(
            function (response) {
                console.log("Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors)
                console.log("IMDB Rating: " + response.data.Ratings[0].Value);
                console.log("Country: " + response.data.Country);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);

            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    console.log(error.response.data);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    };
}

//Do-what-it-says command
if (input === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        var arr = data.trim().split(",");
        //Change the random.txt
        input = arr[0];
        term = arr[1];
        search();
    });
} else {
    //Else function
    search();
}