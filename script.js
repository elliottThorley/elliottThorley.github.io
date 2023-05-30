// Function to handle element visibility changes
function handleVisibility(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }
  
  // Create a new Intersection Observer
  const observer = new IntersectionObserver(handleVisibility, {
    threshold: 0.1 // Adjust the threshold as per your requirement
  });
  
  // Observe the fade-in elements
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((element) => {
    observer.observe(element);
    element.classList.add('hidden'); // Add the "hidden" class initially
  });

// Function to generate a random value within a specified range
function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to set random positions and sizes for circles
function setRandomPositionsAndSizes(numCircles, circleClass, sizeMin, sizeMax, scrollSpeed) {
  // Get the circle container element
  const circleContainer = document.querySelector('.circleContainer');

  // Loop to create and position the desired number of circles
  for (let i = 0; i < numCircles; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.classList.add(circleClass);

    const containerWidth = circleContainer.clientWidth;
    const containerHeight = circleContainer.clientHeight;

    const posX = getRandomValue(0, containerWidth);
    const posY = getRandomValue(0, 8000);
    const size = getRandomValue(sizeMin, sizeMax);

    // Apply inline styles
    circle.style.left = `${posX}px`;
    circle.style.top = `${posY}px`;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    // Append the circle to the container
    circleContainer.appendChild(circle);
  }
}

// Set initial positions and sizes for circles
setRandomPositionsAndSizes(15, 'bigcircle', 75, 100, 0.1);
setRandomPositionsAndSizes(40, 'midcircle', 35, 55, 0.4);
setRandomPositionsAndSizes(70, 'smallcircle', 5, 20, 0.8);

// Add scroll event listener for parallax effect
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const circles = document.querySelectorAll('.circle');

  circles.forEach((circle) => {
    const circleTop = circle.offsetTop;
    const circleClass = circle.classList[1];
    let scrollSpeed = 0;

    if (circleClass === 'bigcircle') {
      scrollSpeed = 0.1;
    } else if (circleClass === 'midcircle') {
      scrollSpeed = 0.4;
    } else if (circleClass === 'smallcircle') {
      scrollSpeed = 0.8;
    }

    const translateY = (scrollPosition - circleTop) * scrollSpeed;
    circle.style.transform = `translateY(${translateY}px)`;
  });
});

//run once
const scrollPosition = window.scrollY;
const circles = document.querySelectorAll('.circle');

circles.forEach((circle) => {
  const circleTop = circle.offsetTop;
  const circleClass = circle.classList[1];
  let scrollSpeed = 0;

  if (circleClass === 'bigcircle') {
    scrollSpeed = 0.1;
  } else if (circleClass === 'midcircle') {
    scrollSpeed = 0.4;
  } else if (circleClass === 'smallcircle') {
    scrollSpeed = 0.8;
  }

  const translateY = (scrollPosition - circleTop) * scrollSpeed;
  circle.style.transform = `translateY(${translateY}px)`;
});