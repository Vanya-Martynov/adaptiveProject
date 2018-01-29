(function Name() {
  
        document.getElementById("want").addEventListener('click', function(event){
        document.querySelector('#modal.modal').classList.add("show");
        document.querySelector('#modal.modal').classList.remove("modal");
        document.getElementById("modal").addEventListener('click', function(event){
        document.querySelector('#modal.show').classList.add("modal");
        document.querySelector('#modal.modal').classList.remove("show");
      });
        
      });
        
}());