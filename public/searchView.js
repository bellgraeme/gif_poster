var SearchView = function(searchElement, searchButton){
    this.tag = "";
    this.searchElement = searchElement;
    this.searchButton = searchButton;
    this.searchButton.addEventListener('click', this.refresh.bind(this));
    
    
  }



  SearchView.prototype = {
      refresh: function(){
        var input = document.querySelector('#search') ;
        this.tag = input.value;
        localStorage.setItem('search', input.value);
       window.location.reload();
      },


  }

//   var input = document.querySelector("input");
//   input.onkeyup = handleKeyPress;

//   var handleKeyPress = function(){
//     var pTag = document.querySelector('#text-result');
//     pTag.innerText = this.value;
//   }
// }