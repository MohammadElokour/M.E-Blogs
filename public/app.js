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
  blogs.forEach(blog => {
    $('#blog-cards').append(`
      <div class="cards">
        <img src=${blog.img}/>
        <h2>${blog.title}</h2>
        <div class="author">
          <p>${blog.author}</p>
        </div>
      </div>`
    )
  });  
}


