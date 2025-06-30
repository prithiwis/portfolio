document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    if (menu.style.display=='none') {
        menu.style.display = 'block'; 
    }
    else {
        menu.style.display = 'none';
    }
});

// for changing the text
const arr=['Frontend Developer', 'Web Developer', 'Software Engineer', 'Tech Enthusiast'];
let i=0;
const textElement = document.getElementById('changing-text');
setInterval(() => {
    textElement.textContent= arr[i];
    i++;
    if(i==arr.length) {
        i=0;
    }
}, 2000); // Change text every 2 seconds
    
// for my-projects section
