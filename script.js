// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
let allAnimatedSvgs = document.querySelectorAll('.animated-svg');
let allPhoneAnimatedSvgs = document.querySelectorAll('.phone-animated-svg');
const svgConfig = [
  // childhood population
  {
    start: 15,
    end: 40
  },
  // reace
  {
    start: 41,
    end: 50
  },
  // early childhood
  {
    start: 51,
    end: 65
  },
  // Access & Support Programs 
  {
    start: 65,
    end: 86
  }
]

allAnimatedSvgs.forEach((svg, i) => {

  // duplicate the path inside svg and add class line-running
  let path = svg.querySelector('path');
  path.setAttribute('pathLength', '1');
  path.classList.add('base-line');
  const pathValue = path.getAttribute('d');
  let pathDuplicate = path.cloneNode(true);
  pathDuplicate.classList.add('line-running');
  // add css style to pathDuplicate
  pathDuplicate.setAttribute('style', `animation-range-start: ${svgConfig[i].start}%; animation-range-end: ${svgConfig[i].end}%;`);
  // add a circle element
  const svgNS = "http://www.w3.org/2000/svg";
  const circle = document.createElementNS(svgNS, 'circle');
  circle.classList.add('line-circle');
  circle.setAttribute('cx', '176.22');
  circle.setAttribute('cy', '80');
  circle.setAttribute('r', '8');
  circle.setAttribute('style', `offset-path: path('${pathValue}'); animation-range-start: ${svgConfig[i].start}%; animation-range-end: ${svgConfig[i].end}%;`);
  // circle.setAttribute('offset-path', pathValue);


  svg.appendChild(pathDuplicate);
  svg.appendChild(circle);



});

const phoneSvgConfig = [
  // childhood population
  {
    start: 15,
    end: 30
  },
  // reace
  {
    start: 31,
    end: 40
  },
  // early childhood
  {
    start: 41,
    end: 56
  },
  // Access & Support Programs 
  {
    start: 57,
    end: 77
  }
]
allPhoneAnimatedSvgs.forEach((svg, i) => {

  // duplicate the path inside svg and add class line-running
  let path = svg.querySelector('path');
  path.setAttribute('pathLength', '1');
  path.classList.add('base-line');
  const pathValue = path.getAttribute('d');
  let pathDuplicate = path.cloneNode(true);
  pathDuplicate.classList.add('line-running');
  // add css style to pathDuplicate
  pathDuplicate.setAttribute('style', `animation-range-start: ${phoneSvgConfig[i].start}%; animation-range-end: ${phoneSvgConfig[i].end}%;`);
  // add a circle element
  const svgNS = "http://www.w3.org/2000/svg";
  const circle = document.createElementNS(svgNS, 'circle');
  circle.classList.add('line-circle');
  circle.setAttribute('cx', '176.22');
  circle.setAttribute('cy', '80');
  circle.setAttribute('r', '20');
  circle.setAttribute('style', `offset-path: path('${pathValue}'); animation-range-start: ${phoneSvgConfig[i].start}%; animation-range-end: ${phoneSvgConfig[i].end}%;`);
  // circle.setAttribute('offset-path', pathValue);


  svg.appendChild(pathDuplicate);
  svg.appendChild(circle);



});
