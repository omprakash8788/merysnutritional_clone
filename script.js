function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

  let backgroundcolor=document.getElementById("myDropdown")
//   backgroundcolor.style.backgroundColor="black";
  backgroundcolor.style.width="30%";
  backgroundcolor.style.marginTop="37px"


  let input=document.getElementById('input')
  input.style.width="130%";
  input.style.height="50%";



// Photo slide function 
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
    updateSlider();
}

setInterval(nextSlide, 4000); // Auto slide every 3 seconds


// Photo slide function  end here





    













