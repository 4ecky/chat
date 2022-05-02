let parent = document.querySelector('.chat__window');
let photo = document.querySelectorAll('.chat__photo');
let popUp = document.querySelector('.pop-up');
let closePhoto = document.querySelector('.pop-up__close');

function showPhoto() {
  popUp.classList.add('_active');
}

parent.addEventListener('click', function(event){
  if(event.target.closest('.chat__photo')) {
    showPhoto();
  }
});

closePhoto.addEventListener('click', function(){
  popUp.classList.remove('_active');
});