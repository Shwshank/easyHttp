const http = new easyHttp;

// Get data-toggle

const getData = http.get('https://jsonplaceholder.typicode.com/posts',
function(err, res){
  if(err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

// console.log(getData);
