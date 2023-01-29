const showImage = document.getElementById('show_image');
const image = document.getElementById('my_img');

showImage.addEventListener('change', function(e){
    if (this.checked) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
})