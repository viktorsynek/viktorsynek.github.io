let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('#dark-mode-toggle');

let darkBtn = document.querySelector('.dark');
let lightBtn = document.querySelector('.light');

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.target');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
    lightBtn.classList.remove('hidden');
    darkBtn.classList.add('hidden');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
    lightBtn.classList.add('hidden');
    darkBtn.classList.remove('hidden');
}
 
if (darkMode === 'enabled') {
    enableDarkMode();
    lightBtn.classList.remove('hidden');
    darkBtn.classList.add('hidden');
}
else {
    lightBtn.classList.add('hidden');
    darkBtn.classList.remove('hidden');
}


darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode'); 
    
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {  
        disableDarkMode(); 
    }
});

let open = false;

menuBtn.addEventListener('click', () => {
    if(!open){
        nav.classList.add('menu-open');
        nav.classList.remove("fade-out");
        nav.classList.add("fade-in");
        open = true;
    }
    else {
        nav.classList.remove("fade-in");
        nav.classList.add("fade-out");
        setTimeout(() => {
            nav.classList.remove('menu-open');
            open = false;
        }, 1000);
    }
});