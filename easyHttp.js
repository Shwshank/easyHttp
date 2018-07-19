function easyHttp() {
  this.http = new XMLHttpRequest();
}

// Get Request
easyHttp.prototype.get = function(url, callback) {

  this.http.open('GET', url, true);

  let self = this;                                //lexical fix
  this.http.onload = function() {

      if(self.http.status === 200) {
        // console.log(self.http.responseText);
        callback(null, self.http.responseText);
      } else {
        callback('Error : '+self.http.status);
      }
  }

  this.http.send();
}
