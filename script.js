const startBtn = document.getElementById('start-button').addEventListener('click', startBtnFunc);
const aboutBtn = document.getElementById('about-app').addEventListener('click', aboutBtnFunc);
const skillsBtn = document.getElementById('skills-app').addEventListener('click', skillsBtnFunc);
const portfolioBtn = document.getElementById('portfolio-app').addEventListener('click', portfolioBtnFunc);
const contactBtn = document.getElementById('contact-app').addEventListener('click', contactBtnFunc);
const contentText = document.getElementById('content-text');


function startBtnFunc(e) {
    contentText.innerHTML = 'I am a supporter of free and open source software. If you are not sure what that means and want to know more, here is a handy video:  <iframe class="dtVideo" width="560" height="315" src="https://www.youtube.com/embed/cU6H2m9XuQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function aboutBtnFunc(e) {
    contentText.innerHTML = "Hi, I'm Dennis! And I am a self taught web developer.";
}

function skillsBtnFunc(e) {
    contentText.innerHTML = "<ul><li>HTML</li><li>CSS</li><li>Javascript</li><li>Python</li><li>Git</li><li>Currently learning React.</li></ul>";
}

function portfolioBtnFunc(e) {
    contentText.innerHTML = '<a href="https://github.com/Sa1z?tab=repositories" target="blank">My Github repositories</a>';
}

function contactBtnFunc(e) {
    contentText.innerHTML = "Contact";
}