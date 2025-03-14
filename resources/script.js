function detailHTML5(event) {
    event.target.style.color = 'white';
    event.target.innerHTML = '<h6>Full Stack Course</h6>';
}

function detailCSS(event) {
    event.target.style.color = 'white';
    event.target.innerHTML = '<h6>Full Stack Course</h6>';
}

function detailPython3(event) {
    event.target.style.color = 'white';
    event.target.innerHTML = '<h6>CoderPad Certified</h6>';
}

function clearText(event) {
    event.target.style.color = 'black';
    event.target.innerHTML = '';
}

const HTML5_xp = document.getElementById('HTML5-xp');
HTML5_xp.onmouseenter = detailHTML5;
HTML5_xp.onmouseleave = clearText;

const CSS_xp = document.getElementById('CSS-xp');
CSS_xp.onmouseenter = detailCSS;
CSS_xp.onmouseleave = clearText;

const Python3_xp = document.getElementById('PYTHON-xp');
Python3_xp.onmouseenter = detailPython3;
Python3_xp.onmouseleave = clearText;