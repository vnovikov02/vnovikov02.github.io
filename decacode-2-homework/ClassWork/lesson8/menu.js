(() => {

    const $button = document.querySelector('button');
    const $darklayer = document.querySelector('.darklayer');
    const $menu = document.querySelector('aside');

    $button.addEventListener('click', () => {
        $darklayer.style.display = 'block';
        $menu.style.display = 'block';
    })

    $darklayer.addEventListener('click', () => {
        $darklayer.style.display = 'none';
        $menu.style.display = 'none';
    })

})();