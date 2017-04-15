var app = function(){
    //get some data form api (list of gif objects)
    var gifList = new GifList("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho");
    //display it on page
    var mainView =  new MainView(document.querySelector("#main"))

    gifList.getData(function(gifs){
      mainView.render(gifs)
    })



    //make gifs searchable


    //make layout modable





};
window.onload = app;