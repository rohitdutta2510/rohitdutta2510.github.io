(function () {
    const heading = document.getElementById('typewriter-heading');

    if (heading) {
        const prefix = "Hi, I'm ";
        const name = 'Rohit Dutta';
        const cursor = '<span class="type-cursor" aria-hidden="true">|</span>';

        let i = 0;
        let j = 0;

        const type = function () {
            if (i < prefix.length) {
                heading.innerHTML = prefix.slice(0, i + 1) + cursor;
                i += 1;
                setTimeout(type, 70);
                return;
            }

            if (j < name.length) {
                heading.innerHTML = prefix + '<span class="highlight">' + name.slice(0, j + 1) + '</span>' + cursor;
                j += 1;
                setTimeout(type, 90);
                return;
            }

            heading.innerHTML = prefix + '<span class="highlight">' + name + '</span>';
        };

        type();
    }

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');

    if (!navToggle || !navMenu || !navOverlay) {
        return;
    }

    const closeMenu = function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navOverlay.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    };

    const openMenu = function () {
        navMenu.classList.add('open');
        navToggle.classList.add('open');
        navOverlay.classList.add('open');
        navToggle.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
    };

    navToggle.addEventListener('click', function () {
        if (navMenu.classList.contains('open')) {
            closeMenu();
            return;
        }

        openMenu();
    });

    navOverlay.addEventListener('click', closeMenu);

    navMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
})();
