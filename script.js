const startBtn = document.getElementById('start-button').addEventListener('click', startBtnFunc);
const aboutBtn = document.getElementById('about-app').addEventListener('click', aboutBtnFunc);
const skillsBtn = document.getElementById('skills-app').addEventListener('click', skillsBtnFunc);
const portfolioBtn = document.getElementById('portfolio-app').addEventListener('click', portfolioBtnFunc);
const contactBtn = document.getElementById('contact-app').addEventListener('click', contactBtnFunc);
const contentText = document.getElementById('content-text');


function startBtnFunc(e) {
    contentText.innerHTML = 'I am a supporter of free and open source software. If you are not sure what that means and want to know more, here is a handy video: <br><br> <div class="dtVideo"><iframe width="560" height="315" src="https://www.youtube.com/embed/cU6H2m9XuQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
}

function aboutBtnFunc(e) {
    contentText.innerHTML = "Hi, I'm Dennis!<br><br> I am a self taught web developer. This is just a fun little site I made to resemble Windows 95, the first operating system I've ever used. Click the buttons below to find out more about me.";
}

function skillsBtnFunc(e) {
    contentText.innerHTML = "<h3>My Skills</h3><ul><li>HTML</li><li>CSS</li><li>Javascript</li><li>Python</li><li>Git</li><li>Bootstrap</li><li>SASS</li><li>React</li><li>Linux</li></ul>";
}

function portfolioBtnFunc(e) {
    contentText.innerHTML = '<h3>My Projects</h3><a href="https://github.com/Sa1z?tab=repositories" target="blank">My Github repositories</a><ul><li><a href="https://sa1z.github.io/startpage/" target="blank">Startpage</a></li><li><a href="https://sa1z.github.io/Blurry-Loading-Page/" target="blank">Blurry Loading Page</a></li><li><a href="https://sa1z.github.io/content-placeholder/" target="blank">Placeholder Card</a></li><li><a href="https://sa1z.github.io/live-user-filter/" target="blank">Live User Filter</a></li><li><a href="https://sa1z.github.io/random-choice-picker/" target="blank">Random Choice Picker</a></li><li><a href="https://sa1z.github.io/vertical-slider/" target="blank">Vertical Slider</a></li><li><a href="https://github.com/Sa1z/react-task-tracker" target="blank">React Task Tracker</a></li></ul></a>';
}

function contactBtnFunc(e) {
    contentText.innerHTML = '<ul style="list-style: none;"><li><a href="https://twitter.com/OpenSalz" target="blank">Twitter</a></ul>';
}


// This code was written by Aaron Farrar (@afarrar) on codepen.io.
function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    let time = h + ":" + m + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();