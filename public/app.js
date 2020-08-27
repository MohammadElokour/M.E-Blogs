function getBlogs() {
  $.ajax({
    type: "GET",
    url: window.location + 'getBlogs',
    success: (res, status)=> {
      console.log("Status: ", status);
      //console.log("data: ", res);
      makeCards(res);
    },
    error: (error)=> {
      console.log(error);
    }
  }) 
}
getBlogs();

function makeCards(blogs)  {
  blogs.forEach(element => {
    console.log(element);
  });  
}


