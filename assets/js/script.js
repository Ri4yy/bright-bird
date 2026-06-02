document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.menu'),
    btnMenu = document.querySelector('.btn-menu');

    btnMenu.addEventListener('click', (e) => {
        menu.classList.toggle('menu--open')

        btnMenu.classList.toggle('btn-menu--open')
    })

    function resize() {
        let width = window.innerWidth;

        if (width > 768) {
            menu.classList.remove('menu--open')
            btnMenu.classList.remove('btn-menu--open')
        } else {
            return
        }
    }

    window.addEventListener('resize', () => {
        resize()
    })
    resize()

    // modals / overlay
    const overlay = document.querySelector('.overlay');

    const panels = {
        menu: document.querySelector('.catalog-menu'),
        search: document.querySelector('.search-modal'),
        login: document.querySelector('.auth-modal'),
        cart: document.querySelector('.basket'),
    };

    const panelContentSelectors = {
        menu: '.catalog-menu__wrapper-main',
        search: '.search-modal__wrapper-main',
        login: '.auth-modal__wrapper-main',
        cart: '.basket__wrapper-main',
    };

    const openAttrToPanelKey = {
        'data-menu-open': 'menu',
        'data-search-open': 'search',
        'data-login-open': 'login',
        'data-cart-open': 'cart',
    };

    function setOverlayActive(isActive) {
        if (!overlay) return;
        overlay.classList.toggle('active', isActive);
    }

    function closeAllPanels() {
        Object.values(panels).forEach((el) => {
            if (!el) return;
            el.classList.remove('active');
        });
        setOverlayActive(false);
    }

    function openPanel(key) {
        const el = panels[key];
        if (!el) return;

        Object.entries(panels).forEach(([k, node]) => {
            if (!node) return;
            if (k === key) return;
            node.classList.remove('active');
        });

        el.classList.add('active');
        setOverlayActive(true);
    }

    function getActivePanelKey() {
        return Object.keys(panels).find((key) => panels[key]?.classList.contains('active'));
    }

    // open by data-*-open
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-menu-open], [data-search-open], [data-login-open], [data-cart-open]');
        if (!trigger) return;

        e.preventDefault();

        const attrName = Object.keys(openAttrToPanelKey).find((name) => trigger.hasAttribute(name));
        if (!attrName) return;

        const key = openAttrToPanelKey[attrName];
        openPanel(key);
    });

    // close by overlay click
    if (overlay) {
        overlay.addEventListener('click', () => {
            closeAllPanels();
        });
    }

    // close by close buttons (крестик)
    document.addEventListener('click', (e) => {
        const btn = e.target.closest(
            '.catalog-menu__wrapper-close, .basket__wrapper-close, .auth-modal__wrapper-close, .search-modal__wrapper-close, [data-modal-close]'
        );
        if (!btn) return;

        e.preventDefault();
        closeAllPanels();
    });

    // close by click outside content (по фону самого окна)
    document.addEventListener('mousedown', (e) => {
        const activeKey = getActivePanelKey();
        if (!activeKey) return;

        const panelEl = panels[activeKey];
        if (!panelEl) return;

        const contentEl = panelEl.querySelector(panelContentSelectors[activeKey]);
        if (!contentEl) return;

        const clickedInsideContent = contentEl.contains(e.target);
        const clickedInsidePanel = panelEl.contains(e.target);

        if (clickedInsidePanel && !clickedInsideContent) {
            closeAllPanels();
        }
    });

    // close by Esc
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (!getActivePanelKey()) return;
        closeAllPanels();
    });

    // hero contacts раскрытие
    const heroContacts = document.querySelector('.hero__contacts');
    const contactsMain = document.querySelector('.contacts-block__main');
    // Появление нужно снизу-вверх: сначала тот, что ближе к contacts-block__main
    const contactsSocial = Array.from(document.querySelectorAll('.contacts-block__social')).reverse();

    let contactsAnimating = false;
    let contactsOpened = false;
    const CONTACT_STEP_DELAY_MS = 220;

    function closeContacts() {
        contactsOpened = false;
        heroContacts?.classList.remove('is-open');
        contactsSocial.forEach((el) => el.classList.remove('is-visible'));
    }

    function openContacts() {
        if (contactsAnimating) return;
        contactsAnimating = true;
        contactsOpened = true;

        heroContacts?.classList.add('is-open');

        contactsSocial.forEach((el) => el.classList.remove('is-visible'));

        // показываем по одному: сначала первый, потом второй
        contactsSocial.forEach((el, idx) => {
            window.setTimeout(() => {
                if (!contactsOpened) return;
                el.classList.add('is-visible');
            }, idx * CONTACT_STEP_DELAY_MS);
        });

        // снимаем блокировку после анимации
        window.setTimeout(() => {
            contactsAnimating = false;
        }, (contactsSocial.length - 1) * CONTACT_STEP_DELAY_MS + 350);
    }

    if (contactsMain) {
        contactsMain.addEventListener('click', (e) => {
            e.preventDefault();
            if (contactsOpened) {
                closeContacts();
                return;
            }
            openContacts();
        });
    }
})

// scrollbar
let basketList = document.querySelector('.basket__wrapper-content-list'),
    orderDetailsStatus = document.querySelector('.order-details__status-wrapper');

if (basketList) {
    new SimpleBar(basketList, {
        scrollbarMaxSize: 40,
        autoHide: false,
        classNames: {
            track: 'simplebar-track simplebar-track__content'
        }
    });
}
// if (orderDetailsStatus) {
//     new SimpleBar(orderDetailsStatus, {
//         scrollbarMaxSize: 140,
//         autoHide: false,
//         classNames: {
//             track: 'simplebar-track simplebar-track__content'
//         }
//     });
// }