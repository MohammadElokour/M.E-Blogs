const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const livereload = require('livereload');
const connectLivereload = require("connect-livereload");

const public = path.join(__dirname, '../public')

let app = new express();
let liveReloadServer = livereload.createServer();
liveReloadServer.watch(public);

app.use(connectLivereload())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(public))

app.get('/', (req,res) => {
  res.sendFile(public + '/app.html')
})

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});


app.listen(4000, () => {
  console.log('listening on port 4000!');
})

