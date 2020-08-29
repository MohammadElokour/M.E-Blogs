"use strict";

function getBlogs() {
  $.ajax({
    type: "GET",
    url: window.location + 'getBlogs',
    success: function success(res, status) {
      console.log("Status: ", status); //console.log("data: ", res);

      makeCards(res);
    },
    error: function error(_error) {
      console.log(_error);
    }
  });
}

getBlogs();

function makeCards(blogs) {
  blogs.forEach(function (blog) {
    $('#blog-cards').append("\n      <div class=\"cards\">\n        <img src=".concat(blog.img, "/>\n        <h2>").concat(blog.title, "</h2>\n        <div class=\"author\">\n          <p>").concat(blog.author, "</p>\n        </div>\n      </div>"));
  });
}