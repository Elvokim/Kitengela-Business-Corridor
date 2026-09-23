/* =========================================================
   WEBINERDS
   Main JavaScript
   Version: 2.0

   Goals:
   - Fast
   - Lightweight
   - Accessible
   - Responsive
   - Subtle animation
   - No external JS libraries
   ========================================================= */

'use strict';


/* =========================================================
   01. GLOBAL HELPERS
   ========================================================= */

const $ = (selector, parent = document) => {
    return parent.querySelector(selector);
};


const $$ = (selector, parent = document) => {
    return [...parent.querySelectorAll(selector)];
};


const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
).matches;


const isTouchDevice =
    window.matchMedia('(pointer: coarse)').matches;


/* =========================================================
   02. DOM READY
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    initMobileNavigation();

    initScrollReveal();

    initScrollProgress();

    initSmoothAnchors();

    initProjectFilters();

    initProcessTabs();

    initServiceInteraction();

    initHeroParallax();

    initDesignBoardTilt();

    initMagneticButtons();

    initHeaderScrollState();

    initLazyImages();

    initImageFallbacks();

    initExternalLinks();

    initHostingCards();

    initDesignCards();

    initApplicationCards();

    initSecurityCards();

    initProcessStages();

    initWebsiteTypeCards();

    initWorkPage();

    initSiteChrome();

});


/* =========================================================
   03. MOBILE NAVIGATION
   ========================================================= */

function initMobileNavigation() {

    const toggle = $('.menu-toggle');
    const nav = $('.nav-links');

    if (!toggle || !nav) {
        return;
    }


    function closeMenu() {

        nav.classList.remove('open');

        document.body.classList.remove('menu-open');

        toggle.setAttribute('aria-expanded', 'false');

    }


    function openMenu() {

        nav.classList.add('open');

        document.body.classList.add('menu-open');

        toggle.setAttribute('aria-expanded', 'true');

    }


    toggle.setAttribute('aria-expanded', 'false');


    toggle.addEventListener('click', () => {

        const isOpen = nav.classList.contains('open');

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    });


    $$('.nav-links a').forEach(link => {

        link.addEventListener('click', closeMenu);

    });


    document.addEventListener('keydown', event => {

        if (event.key === 'Escape') {
            closeMenu();
        }

    });


    document.addEventListener('click', event => {

        if (
            !nav.contains(event.target) &&
            !toggle.contains(event.target)
        ) {
            closeMenu();
        }

    });


    window.addEventListener('resize', () => {

        if (window.innerWidth > 760) {
            closeMenu();
        }

    }, { passive: true });

}


/* =========================================================
   04. SCROLL REVEAL
   ========================================================= */

function initScrollReveal() {

    const elements = $$('.reveal');

    if (!elements.length) {
        return;
    }


    /*
     * Reduced motion:
     * show everything immediately.
     */

    if (prefersReducedMotion) {

        elements.forEach(element => {
            element.classList.add('visible');
        });

        return;
    }


    /*
     * IntersectionObserver is much more efficient
     * than listening to scroll continuously.
     */

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add('visible');

                observer.unobserve(entry.target);

            });

        },
        {
            root: null,
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        }
    );


    elements.forEach(element => {
        observer.observe(element);
    });

}


/* =========================================================
   05. SCROLL PROGRESS
   ========================================================= */

function initScrollProgress() {

    const progress = $('.home-progress span');

    if (!progress) {
        return;
    }


    let ticking = false;


    function updateProgress() {

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        if (documentHeight <= 0) {
            progress.style.width = '0%';
            return;
        }


        const currentScroll = window.scrollY;

        const percentage =
            Math.min(
                100,
                Math.max(
                    0,
                    (currentScroll / documentHeight) * 100
                )
            );


        progress.style.width = `${percentage}%`;

    }


    function requestUpdate() {

        if (ticking) {
            return;
        }

        ticking = true;

        requestAnimationFrame(() => {

            updateProgress();

            ticking = false;

        });

    }


    window.addEventListener(
        'scroll',
        requestUpdate,
        { passive: true }
    );


    window.addEventListener(
        'resize',
        requestUpdate,
        { passive: true }
    );


    updateProgress();

}


/* =========================================================
   06. SMOOTH INTERNAL ANCHORS
   ========================================================= */

function initSmoothAnchors() {

    const links = $$('a[href^="#"]');

    if (!links.length) {
        return;
    }


    links.forEach(link => {

        link.addEventListener('click', event => {

            const href = link.getAttribute('href');

            if (!href || href === '#') {
                return;
            }


            const target = $(href);

            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: prefersReducedMotion
                    ? 'auto'
                    : 'smooth',
                block: 'start'
            });


            /*
             * Update URL without causing another jump.
             */

            if (history.replaceState) {

                history.replaceState(
                    null,
                    '',
                    href
                );

            }

        });

    });

}


/* =========================================================
   07. PROJECT FILTERS
   ========================================================= */

function initProjectFilters() {

    const buttons = $$('.work-filter-btn');
    const projects = $$('.project-card');

    if (!buttons.length || !projects.length) {
        return;
    }


    buttons.forEach(button => {

        button.addEventListener('click', () => {

            const filter =
                button.dataset.filter || 'all';


            /*
             * Update active button.
             */

            buttons.forEach(item => {

                item.classList.toggle(
                    'active',
                    item === button
                );

            });


            /*
             * Filter projects.
             */

            projects.forEach(project => {

                const category =
                    project.dataset.category || '';


                const shouldShow =
                    filter === 'all' ||
                    category === filter;


                if (shouldShow) {

                    project.hidden = false;

                    requestAnimationFrame(() => {

                        project.style.opacity = '1';
                        project.style.transform = '';

                    });

                } else {

                    project.style.opacity = '0';
                    project.style.transform = 'translateY(10px)';

                    setTimeout(() => {

                        project.hidden = true;

                    }, prefersReducedMotion ? 0 : 220);

                }

            });

        });

    });

}


/* =========================================================
   08. INTERACTIVE PROCESS
   ========================================================= */

function initProcessTabs() {

    const steps = $$('.process-step');
    const detail = $('.process-detail');

    if (!steps.length || !detail) {
        return;
    }


    const processData = {

        1: {
            number: '01',
            title: 'Discover',
            text: 'Understand the business, audience, goals and requirements before deciding what to build.'
        },

        2: {
            number: '02',
            title: 'Plan',
            text: 'Define the structure, content, technology and user experience before development begins.'
        },

        3: {
            number: '03',
            title: 'Design',
            text: 'Create the visual direction and interface with hierarchy, usability and the brand in mind.'
        },

        4: {
            number: '04',
            title: 'Build',
            text: 'Develop, integrate and test the product across the devices people use.'
        },

        5: {
            number: '05',
            title: 'Launch',
            text: 'Deploy the finished product and make sure the handover, setup and final checks are clear.'
        },

        6: {
            number: '06',
            title: 'Improve',
            text: 'Continue refining the product when the business and its users need something different.'
        }

    };


    const numberElement =
        $('.process-detail-number', detail);

    const titleElement =
        $('h3', detail);

    const textElement =
        $('p', detail);

    const eyebrowElement =
        $('.eyebrow', detail);


    function activateStep(step) {

        const data =
            processData[step];

        if (!data) {
            return;
        }


        steps.forEach(item => {

            item.classList.toggle(
                'active',
                item.dataset.step === String(step)
            );

        });


        /*
         * Small transition between content states.
         */

        if (!prefersReducedMotion) {

            detail.animate(
                [
                    {
                        opacity: 0.45,
                        transform: 'translateY(8px)'
                    },
                    {
                        opacity: 1,
                        transform: 'translateY(0)'
                    }
                ],
                {
                    duration: 260,
                    easing: 'cubic-bezier(.2,.7,.2,1)'
                }
            );

        }


        numberElement.textContent = data.number;

        titleElement.textContent = data.title;

        textElement.textContent = data.text;

        eyebrowElement.textContent =
            `Step ${data.number}`;

    }


    steps.forEach(step => {

        step.addEventListener('click', () => {

            activateStep(step.dataset.step);

        });

    });

}


/* =========================================================
   09. SERVICE INTERACTION
   ========================================================= */

function initServiceInteraction() {

    const serviceRows =
        $$('.service-row');

    const panel =
        $('.service-detail-panel');

    if (!serviceRows.length || !panel) {
        return;
    }


    /*
     * The CSS already provides the featured service
     * interaction. This JS improves keyboard/touch
     * behaviour without adding unnecessary animation.
     */

    const featured =
        $('.service-row-featured');


    if (!featured) {
        return;
    }


    featured.addEventListener('click', event => {

        /*
         * On desktop the service remains a normal link.
         *
         * We don't prevent navigation because users
         * should still be able to open the service page.
         */

    });


    /*
     * Touch devices:
     * briefly reveal the service panel when tapped.
     */

    if (isTouchDevice) {

        featured.addEventListener('touchstart', () => {

            panel.classList.add('touch-active');

        }, { passive: true });


        featured.addEventListener('touchend', () => {

            setTimeout(() => {

                panel.classList.remove('touch-active');

            }, 900);

        }, { passive: true });

    }

}


/* =========================================================
   10. HERO PARALLAX
   ========================================================= */

function initHeroParallax() {

    const wrapper = $('[data-parallax-wrap]');
    const element = $('[data-parallax]');

    if (!wrapper || !element) {
        return;
    }


    /*
     * Disable on:
     * - reduced motion
     * - touch devices
     * - smaller screens
     */

    if (
        prefersReducedMotion ||
        isTouchDevice ||
        window.innerWidth < 900
    ) {
        return;
    }


    let frame = null;


    function update(event) {

        if (frame) {
            cancelAnimationFrame(frame);
        }


        frame = requestAnimationFrame(() => {

            const rect =
                wrapper.getBoundingClientRect();


            const x =
                (event.clientX - rect.left) /
                rect.width;


            const y =
                (event.clientY - rect.top) /
                rect.height;


            const rotateX =
                (0.5 - y) * 3;


            const rotateY =
                (x - 0.5) * 3;


            const translateX =
                (x - 0.5) * 8;


            const translateY =
                (y - 0.5) * 8;


            element.style.transform =
                `translate3d(${translateX}px, ${translateY}px, 0)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });

    }


    function reset() {

        if (frame) {
            cancelAnimationFrame(frame);
        }


        element.style.transform =
            'translate3d(0,0,0) rotateX(0) rotateY(0)';

    }


    wrapper.addEventListener(
        'mousemove',
        update
    );


    wrapper.addEventListener(
        'mouseleave',
        reset
    );

}


/* =========================================================
   11. DESIGN BOARD TILT
   ========================================================= */

function initDesignBoardTilt() {

    const boards = $$('[data-tilt]');

    if (!boards.length) {
        return;
    }


    if (
        prefersReducedMotion ||
        isTouchDevice ||
        window.innerWidth < 900
    ) {
        return;
    }


    boards.forEach(board => {

        let frame = null;


        board.addEventListener('mousemove', event => {

            if (frame) {
                cancelAnimationFrame(frame);
            }


            frame = requestAnimationFrame(() => {

                const rect =
                    board.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) / centerY) * -3;


                const rotateY =
                    ((x - centerX) / centerX) * 3;


                board.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-4px)`;

            });

        });


        board.addEventListener('mouseleave', () => {

            if (frame) {
                cancelAnimationFrame(frame);
            }


            board.style.transform =
                'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';

        });

    });

}


/* =========================================================
   12. MAGNETIC BUTTONS
   ========================================================= */

function initMagneticButtons() {

    const buttons = $$('.magnetic');

    if (!buttons.length) {
        return;
    }


    if (
        prefersReducedMotion ||
        isTouchDevice ||
        window.innerWidth < 900
    ) {
        return;
    }


    buttons.forEach(button => {

        let frame = null;


        button.addEventListener('mousemove', event => {

            if (frame) {
                cancelAnimationFrame(frame);
            }


            frame = requestAnimationFrame(() => {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const moveX =
                    (x - rect.width / 2) * .12;


                const moveY =
                    (y - rect.height / 2) * .12;


                button.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;

            });

        });


        button.addEventListener('mouseleave', () => {

            if (frame) {
                cancelAnimationFrame(frame);
            }


            button.style.transform = '';

        });

    });

}


/* =========================================================
   13. HEADER SCROLL STATE
   ========================================================= */

function initHeaderScrollState() {

    const header = $('.site-header');

    if (!header) {
        return;
    }


    let ticking = false;


    function update() {

        const scrolled =
            window.scrollY > 20;


        header.classList.toggle(
            'scrolled',
            scrolled
        );

        ticking = false;

    }


    window.addEventListener(
        'scroll',
        () => {

            if (ticking) {
                return;
            }


            ticking = true;

            requestAnimationFrame(update);

        },
        { passive: true }
    );


    update();

}


/* =========================================================
   14. LAZY IMAGE ENHANCEMENT
   ========================================================= */

function initLazyImages() {

    const images =
        $$('img[loading="lazy"]');

    if (!images.length) {
        return;
    }


    /*
     * Native lazy-loading is already handled by the browser.
     *
     * This simply adds a class when images become visible,
     * allowing CSS to animate them if desired.
     */

    if (!('IntersectionObserver' in window)) {
        images.forEach(image => {
            image.classList.add('image-loaded');
        });

        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.classList.add(
                        'image-visible'
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                rootMargin: '150px'
            }
        );


    images.forEach(image => {
        observer.observe(image);
    });

}


/* =========================================================
   15. IMAGE FALLBACK
   ========================================================= */

function initImageFallbacks() {

    const images = $$('img');

    images.forEach(image => {

        image.addEventListener('error', () => {

            /*
             * Don't repeatedly trigger the error handler.
             */

            if (
                image.dataset.fallbackApplied === 'true'
            ) {
                return;
            }


            image.dataset.fallbackApplied = 'true';

            image.style.display = 'none';


            const parent =
                image.parentElement;


            if (!parent) {
                return;
            }


            parent.classList.add(
                'image-fallback'
            );

        });

    });

}


/* =========================================================
   16. EXTERNAL LINKS
   ========================================================= */

function initExternalLinks() {

    const links = $$('a[href]');


    links.forEach(link => {

        const href =
            link.getAttribute('href');


        if (!href) {
            return;
        }


        if (
            href.startsWith('http://') ||
            href.startsWith('https://')
        ) {

            const currentHost =
                window.location.hostname;


            try {

                const url =
                    new URL(href);


                if (
                    url.hostname !== currentHost
                ) {

                    link.setAttribute(
                        'target',
                        '_blank'
                    );


                    link.setAttribute(
                        'rel',
                        'noopener noreferrer'
                    );

                }

            } catch (error) {

                /*
                 * Invalid URLs are ignored.
                 */

            }

        }

    });

}


/* =========================================================
   17. PAGE VISIBILITY
   ========================================================= */

document.addEventListener(
    'visibilitychange',
    () => {

        /*
         * When the user leaves the tab, pause
         * unnecessary visual work.
         */

        if (document.hidden) {

            document.documentElement
                .classList.add('page-hidden');

        } else {

            document.documentElement
                .classList.remove('page-hidden');

        }

    }
);


/* =========================================================
   18. PREVENT TRANSITION FLASH
   ========================================================= */

window.addEventListener(
    'load',
    () => {

        document.documentElement
            .classList.add('page-loaded');

    }
);


/* =========================================================
   19. CONSOLE BRAND MARK
   ========================================================= */

if (window.console) {

    console.log(
        '%c WEBINERDS ',
        'background:#0735ff;color:#fff;font-weight:800;padding:5px 9px;'
    );

    console.log(
        'Digital experiences built for ambitious businesses.'
    );

}
function initDesignCards() {
    const buttons = document.querySelectorAll(".design-expand");

    if (!buttons.length) return;

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const card = button.closest(".design-card");

            if (!card) return;

            const isOpen = card.classList.contains("is-open");

            document
                .querySelectorAll(".design-card.is-open")
                .forEach((openCard) => {

                    if (openCard !== card) {

                        openCard.classList.remove("is-open");

                        const openButton =
                            openCard.querySelector(".design-expand");

                        if (openButton) {
                            openButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );
                        }

                    }

                });

            card.classList.toggle("is-open", !isOpen);

            button.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

        });

    });
}
function initProcessStages() {
    const buttons = document.querySelectorAll(".process-stage-trigger");

    if (!buttons.length) return;

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const stage = button.closest(".process-stage");

            if (!stage) return;

            const isOpen = stage.classList.contains("is-active");

            document
                .querySelectorAll(".process-stage.is-active")
                .forEach((openStage) => {

                    if (openStage !== stage) {

                        openStage.classList.remove("is-active");

                        const openButton =
                            openStage.querySelector(
                                ".process-stage-trigger"
                            );

                        if (openButton) {
                            openButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );
                        }

                    }

                });

            stage.classList.toggle("is-active", !isOpen);

            button.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

        });

    });
}
function initWebsiteTypeCards() {
    const buttons = document.querySelectorAll(".website-type-expand");

    if (!buttons.length) return;

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const card = button.closest(".website-type-card");

            if (!card) return;

            const isOpen = card.classList.contains("is-open");

            document
                .querySelectorAll(".website-type-card.is-open")
                .forEach((openCard) => {

                    if (openCard !== card) {

                        openCard.classList.remove("is-open");

                        const openButton =
                            openCard.querySelector(".website-type-expand");

                        if (openButton) {
                            openButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );
                        }
                    }
                });

            card.classList.toggle("is-open", !isOpen);

            button.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

        });

    });
}
function initWorkPage() {

    const filters = document.querySelectorAll(".work-filter");
    const projects = document.querySelectorAll(".concept-project");

    if (filters.length && projects.length) {

        filters.forEach((filter) => {

            filter.addEventListener("click", () => {

                const category = filter.dataset.filter;

                filters.forEach((item) => {
                    item.classList.remove("active");
                });

                filter.classList.add("active");

                projects.forEach((project) => {

                    const projectCategory =
                        project.dataset.category;

                    if (
                        category === "all" ||
                        projectCategory === category
                    ) {
                        project.classList.remove("is-filtered");
                    } else {
                        project.classList.add("is-filtered");
                    }

                });

            });

        });

    }


    const expandButtons =
        document.querySelectorAll(".concept-expand");

    expandButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const project =
                button.closest(".concept-project");

            if (!project) return;

            const isOpen =
                project.classList.contains("is-open");

            document
                .querySelectorAll(".concept-project.is-open")
                .forEach((openProject) => {

                    if (openProject !== project) {

                        openProject.classList.remove("is-open");

                        const openButton =
                            openProject.querySelector(
                                ".concept-expand"
                            );

                        if (openButton) {
                            openButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );
                        }

                    }

                });

            project.classList.toggle(
                "is-open",
                !isOpen
            );

            button.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

        });

    });

}