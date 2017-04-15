var MainView = function(mainElement){
  this.mainElement = mainElement;


};

MainView.prototype = {
  render: function(gif){
    div = document.createElement('div');
    div.className = "gifDiv"
    img = document.createElement('img');
    img.src = gif.data.image_original_url;
    this.mainElement.appendChild(div);
    div.appendChild(img)
  },
  clear: function(){
    this.mainElement.innerHTML = '';
  }

}