const searchBtn = document.getElementById('search-btn')
const search = document.getElementById('search')
const tip = document.getElementById('tip')

searchBtn.addEventListener('click', () => {
    search.style.width = '80%';
    search.style.paddingLeft = '60px';
    search.style.cursor = 'text';
    search.focus();

    //search.setAttribute('placeholder', 'Men who love weirdos');
    var i = 0;
    var message = 'Lets have a look into your future';
    var speed = 100;

    function typeWriter() {
        if (i < message.length) {
            msg = search.getAttribute('placeholder') + message.charAt(i);
            search.setAttribute('placeholder', msg)
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
})

search.addEventListener('keydown', () => {
    tip.style.visibility = 'visible';
    tip.style.opacity = '1';
})