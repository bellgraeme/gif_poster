var GifList = function(url){
  this.url = url;
  this.gifs = [];
};

GifList.prototype = {
  getData: function(callback){
    var request = new XMLHttpRequest();
    request.open ("GET", this.url); //setup
    request.onload = function(){
      if(request.status === 200){
        var jsonString =  request.responseText;
        this.gifs = JSON.parse(jsonString); //array of chracter objects
        callback(this.gifs);
      }
    }.bind(this);
    request.send(); // doing the request
  }
}