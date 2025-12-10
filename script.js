// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});


// Mobile Nav Menu
 const mobileMenu = document.getElementById("mobileMenu");
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");

  openMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
  });


// Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   // console.log(e);
// });
let allAnimatedSvgs = document.querySelectorAll('.animated-svg');
let allPhoneAnimatedSvgs = document.querySelectorAll('.phone-animated-svg');
// const svgConfig = [
//   // childhood population
//   {
//     start: 15,
//     end: 40
//   },
//   // reace
//   {
//     start: 41,
//     end: 50
//   },
//   // early childhood
//   {
//     start: 51,
//     end: 65
//   },
//   // Access & Support Programs 
//   {
//     start: 65,
//     end: 86
//   }
// ]
let svgConfig = [
  // childhood population
  {
    start: 15,
    end: 32
  },
  // reace
  {
    start: 32,
    end: 45
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

// based on window screen size change svgConfig
if (window.innerWidth > 1540) {
  svgConfig = [
  // childhood population
  {
    start: 15,
    end: 32
  },
  // reace
  {
    start: 32,
    end: 45
  },
  // early childhood
  {
    start: 51,
    end: 64
  },
  // Access & Support Programs 
  {
    start: 65,
    end: 83
  }
]
}
if (window.innerWidth < 1540) {
  svgConfig = [
    // childhood population
    {
      start: 15,
      end: 30
    },
    // reace
    {
      start: 35,
      end: 43
    },
    // early childhood
    {
      start: 44,
      end: 57
    },
    // Access & Support Programs 
    {
      start: 60,
      end: 78
    }
  ]
}

if (window.innerWidth < 1024) {
  svgConfig = [
    // childhood population
    {
      start: 15,
      end: 32
    },
    // reace
    {
      start: 32,
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
}

if (window.innerWidth < 780) {
  svgConfig = [
    // childhood population
    {
      start: 18,
      end: 35
    },
    // reace
    {
      start: 37,
      end: 46
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
}
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
    start: 10,
    end: 24
  },
  // reace
  {
    start: 26,
    end: 37
  },
  // early childhood
  {
    start: 38,
    end: 50
  },
  // Access & Support Programs 
  {
    start: 52,
    end: 72
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
  circle.setAttribute('r', '5');
  circle.setAttribute('style', `offset-path: path('${pathValue}'); animation-range-start: ${phoneSvgConfig[i].start}%; animation-range-end: ${phoneSvgConfig[i].end}%;`);
  // circle.setAttribute('offset-path', pathValue);


  svg.appendChild(pathDuplicate);
  svg.appendChild(circle);



});
