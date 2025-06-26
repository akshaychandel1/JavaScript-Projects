const images = [
  "https://picsum.photos/id/237/400/250",
  "https://picsum.photos/id/1015/400/250",
  "https://picsum.photos/id/1025/400/250",
  "https://picsum.photos/id/1062/400/250"
];

const slider = document.getElementById('slider')
const Previous = document.getElementById('prevBtn')
const Next = document.getElementById('nextBtn')

let currentIndex = 0;

slider.src = images[currentIndex];

function displayImage() {
    slider.src = images[currentIndex];
    
}
Next.addEventListener('click',()=>{
currentIndex++;
if (currentIndex >= images.length) {
    currentIndex = 0;
}
displayImage()
})

Previous.addEventListener('click',()=>{
    currentIndex--;
    if (currentIndex <= images.length) {
        currentIndex = images.length-1
    }
    displayImage()
})