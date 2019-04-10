document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('#main');
    const navTop = nav.offsetTop;

    function fixNav(e) {
        if(window.scrollY >= navTop) {
            document.body.style.paddingTop = `${nav.offsetHeight}px`;
            document.body.classList.add('fixed-nav');
        } else {
            document.body.classList.remove('fixed-nav');
            document.body.style.paddingTop = 0;
        }
    }
    // Event Listeners
    window.addEventListener('scroll', fixNav);
});