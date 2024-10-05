// Elements
const slider = document.getElementById('slider');
const imageTrack = document.getElementById('image-track');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

// Settings
let autoScrollSpeed = 2; // Auto scroll speed (higher means faster)
let scrollPosition = 0;
let isScrolling = true; // Initially set to auto-scroll

// Function to auto-scroll images
function autoScroll() {
  if (isScrolling) {
    scrollPosition -= autoScrollSpeed;
    if (Math.abs(scrollPosition) >= imageTrack.scrollWidth) {
      scrollPosition = 0; // Reset position if reached the end
    }
    imageTrack.style.transform = `translateX(${scrollPosition}px)`;
  }
  requestAnimationFrame(autoScroll);
}

// Manually move images left
leftBtn.addEventListener('click', () => {
  isScrolling = false; // Stop auto-scroll
  scrollPosition += 300; // Move left by 300px (width of one image)
  if (scrollPosition > 0) {
    scrollPosition = -(imageTrack.scrollWidth - slider.offsetWidth); // Wrap around
  }
  imageTrack.style.transform = `translateX(${scrollPosition}px)`;
});

// Manually move images right
rightBtn.addEventListener('click', () => {
  isScrolling = false; // Stop auto-scroll
  scrollPosition -= 300; // Move right by 300px (width of one image)
  if (Math.abs(scrollPosition) >= imageTrack.scrollWidth) {
    scrollPosition = 0; // Reset if reached end
  }
  imageTrack.style.transform = `translateX(${scrollPosition}px)`;
});

// Auto scroll the images
autoScroll();



// Function to toggle the visibility of answers
function toggleAnswer(index) {
  // Get all the answer divs for both cards
  const answers = document.querySelectorAll('.faq-answer');
  const arrows = document.querySelectorAll('.arrow-btn');

  // Loop through all answers and hide them except the one clicked
  answers.forEach((answer, idx) => {
    if (idx === index) {
      if (answer.style.display === 'block') {
        answer.style.display = 'none'; // Hide the answer if it's visible
        arrows[idx].innerHTML = '&#9660;'; // Arrow down when answer is hidden
      } else {
        answer.style.display = 'block'; // Show the answer
        arrows[idx].innerHTML = '&#9650;'; // Arrow up when answer is shown
      }
    } else {
      answer.style.display = 'none'; // Hide other answers
      arrows[idx].innerHTML = '&#9660;'; // Reset all other arrows to down
    }
  });
}
