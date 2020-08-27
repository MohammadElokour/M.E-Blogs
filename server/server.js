const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const livereload = require('livereload');
const connectLivereload = require("connect-livereload");

const public = path.join(__dirname, '../public')
let blogs = [
  {
    title: 'Nature',
    img: 'https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/images/image_licorice.jpg',
    author: "Mark James",
    body: 
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a magna massa. Vestibulum eu sapien convallis, 
    varius velit eget, suscipit turpis. Morbi ut ex metus. Ut congue felis vel lectus tempus ornare. Etiam pulvinar mi velit, 
    ut vestibulum massa placerat vitae. Etiam vulputate mi lacus, quis vestibulum libero luctus sed. Morbi ut quam nibh. 
    Sed molestie efficitur pharetra. Donec et quam et dolor malesuada pulvinar. Curabitur tincidunt augue et tortor bibendum, 
    nec bibendum turpis feugiat. Nullam dictum cursus sem a gravida. Mauris tempor fermentum nunc, ut ullamcorper metus luctus sit amet. 
    Sed ut lacinia odio. Aliquam erat volutpat.`
  }, 
  {
    title: 'Coding',
    img: 'https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/images/image_licorice.jpg',
    author: "Mark James",
    body: 
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a magna massa. Vestibulum eu sapien convallis, 
    varius velit eget, suscipit turpis. Morbi ut ex metus. Ut congue felis vel lectus tempus ornare. Etiam pulvinar mi velit, 
    ut vestibulum massa placerat vitae. Etiam vulputate mi lacus, quis vestibulum libero luctus sed. Morbi ut quam nibh. 
    Sed molestie efficitur pharetra. Donec et quam et dolor malesuada pulvinar. Curabitur tincidunt augue et tortor bibendum, 
    nec bibendum turpis feugiat. Nullam dictum cursus sem a gravida. Mauris tempor fermentum nunc, ut ullamcorper metus luctus sit amet. 
    Sed ut lacinia odio. Aliquam erat volutpat.`

  },
  {
    title: 'Biography',
    img: 'https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/images/image_licorice.jpg',
    author: "Mark James",
    body: 
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a magna massa. Vestibulum eu sapien convallis, 
    varius velit eget, suscipit turpis. Morbi ut ex metus. Ut congue felis vel lectus tempus ornare. Etiam pulvinar mi velit, 
    ut vestibulum massa placerat vitae. Etiam vulputate mi lacus, quis vestibulum libero luctus sed. Morbi ut quam nibh. 
    Sed molestie efficitur pharetra. Donec et quam et dolor malesuada pulvinar. Curabitur tincidunt augue et tortor bibendum, 
    nec bibendum turpis feugiat. Nullam dictum cursus sem a gravida. Mauris tempor fermentum nunc, ut ullamcorper metus luctus sit amet. 
    Sed ut lacinia odio. Aliquam erat volutpat.`

  },
  {
    title: 'Sports',
    img: 'https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/images/image_licorice.jpg',
    author: "Mark James",
    body: 
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a magna massa. Vestibulum eu sapien convallis, 
    varius velit eget, suscipit turpis. Morbi ut ex metus. Ut congue felis vel lectus tempus ornare. Etiam pulvinar mi velit, 
    ut vestibulum massa placerat vitae. Etiam vulputate mi lacus, quis vestibulum libero luctus sed. Morbi ut quam nibh. 
    Sed molestie efficitur pharetra. Donec et quam et dolor malesuada pulvinar. Curabitur tincidunt augue et tortor bibendum, 
    nec bibendum turpis feugiat. Nullam dictum cursus sem a gravida. Mauris tempor fermentum nunc, ut ullamcorper metus luctus sit amet. 
    Sed ut lacinia odio. Aliquam erat volutpat.`

  },
  {
    title: 'Health',
    img: 'https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/images/image_licorice.jpg',
    author: "Mark James",
    body: 
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a magna massa. Vestibulum eu sapien convallis, 
    varius velit eget, suscipit turpis. Morbi ut ex metus. Ut congue felis vel lectus tempus ornare. Etiam pulvinar mi velit, 
    ut vestibulum massa placerat vitae. Etiam vulputate mi lacus, quis vestibulum libero luctus sed. Morbi ut quam nibh. 
    Sed molestie efficitur pharetra. Donec et quam et dolor malesuada pulvinar. Curabitur tincidunt augue et tortor bibendum, 
    nec bibendum turpis feugiat. Nullam dictum cursus sem a gravida. Mauris tempor fermentum nunc, ut ullamcorper metus luctus sit amet. 
    Sed ut lacinia odio. Aliquam erat volutpat.`

  },
  {
    title: 'Food',
    img: 'https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/images/image_licorice.jpg',
    author: "Mark James",
    body: 
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a magna massa. Vestibulum eu sapien convallis, 
    varius velit eget, suscipit turpis. Morbi ut ex metus. Ut congue felis vel lectus tempus ornare. Etiam pulvinar mi velit, 
    ut vestibulum massa placerat vitae. Etiam vulputate mi lacus, quis vestibulum libero luctus sed. Morbi ut quam nibh. 
    Sed molestie efficitur pharetra. Donec et quam et dolor malesuada pulvinar. Curabitur tincidunt augue et tortor bibendum, 
    nec bibendum turpis feugiat. Nullam dictum cursus sem a gravida. Mauris tempor fermentum nunc, ut ullamcorper metus luctus sit amet. 
    Sed ut lacinia odio. Aliquam erat volutpat.`
  }
]

let app = new express();
let liveReloadServer = livereload.createServer();
liveReloadServer.watch(public);

app.use(connectLivereload())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(public))

app.get('/', (req,res) => {
  res.sendFile(public + '/app.html')
})

app.get('/getBlogs', (req,res) => {
  
  return res.send(blogs)
})

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});


app.listen(4000, () => {
  console.log('listening on port 4000!');
})

