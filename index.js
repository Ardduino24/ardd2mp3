const fs = require('fs');
const ytdl = require('ytdl-core');
const Express = require("express")
const app = Express()
const ytdlp = require('ytdlp-nodejs')
const {createWriteStream} = require('fs')
const url = "https://www.youtube.com/watch?v=Qzc_aX8c8g4";

const file = createWriteStream("test.mp4");
// get stream
const stream = ytdlp
    .stream(url, {
        filter: "videoonly",
        quality: "2160p",
    })
    .on("error", (err) => {
        console.log(err);
    })
    .pipe(file);

// download video

app.get("/FetchVideo", (req, res) => {
 console.log("Fetching Video") 
  console.log(req.query.lol)

    ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    .pipe(fs.createWriteStream('video.mp4'));
  res.sendFile("video.mp4", {root: __dirname})
})

// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

// https://www.youtube.com/watch?v=dQw4w9WgXcQ



app.listen(8080)
