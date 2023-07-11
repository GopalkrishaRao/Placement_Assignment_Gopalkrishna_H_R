let box = document.getElementsByClassName('box')[0];
box.addEventListener('click', changeProperty);

function changeProperty(){
    if (box.style.backgroundColor === 'rgb(255, 255, 0)') {
        box.style.backgroundColor = '#ff0000';
        box.style.height = '300px';
        box.style.width = '300px';
      } else {
        box.style.backgroundColor = '#ffff00';
        box.style.height = '600px';
        box.style.width = '600px';
      }
}