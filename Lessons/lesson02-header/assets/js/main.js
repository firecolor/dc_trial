window.addEventListener('load', () => {

    const menuButtons = document.querySelectorAll('[aria-controls="js-globalNavi"]'),
        menu = document.getElementById('js-globalNavi');

    menuButtons.forEach(function (button) {

        button.addEventListener('click', (event) => {
            const expanded = button.getAttribute('aria-expanded');

            if (expanded == 'false') {
                menu.setAttribute('aria-hidden', 'false');
                for (i = 0; i < menuButtons.length; i++) {
                    menuButtons[i].setAttribute('aria-expanded', 'true');
                }
            } else {
                menu.setAttribute('aria-hidden', 'true');
                for (i = 0; i < menuButtons.length; i++) {
                    menuButtons[i].setAttribute('aria-expanded', 'false');
                }
            }

        });
    });

})

