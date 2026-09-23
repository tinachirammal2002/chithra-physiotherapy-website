/* =====================================================
   HERO SLIDER
   Works only when slider exists
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    let currentSlide = 0;
    let autoSlide = null;


    /* ---------------------------------------------
       CHECK SLIDER
    --------------------------------------------- */

    if (slides.length > 0) {


        /* -----------------------------------------
           SHOW SLIDE
        ----------------------------------------- */

        function showSlide(index) {

            if (index >= slides.length) {
                currentSlide = 0;
            }

            if (index < 0) {
                currentSlide = slides.length - 1;
            }


            slides.forEach(function (slide) {
                slide.classList.remove("active");
            });


            dots.forEach(function (dot) {
                dot.classList.remove("active");
            });


            if (slides[currentSlide]) {
                slides[currentSlide].classList.add("active");
            }

            if (dots[currentSlide]) {
                dots[currentSlide].classList.add("active");
            }

        }


        /* -----------------------------------------
           NEXT SLIDE
        ----------------------------------------- */

        function nextSlide() {

            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            showSlide(currentSlide);

        }


        /* -----------------------------------------
           PREVIOUS SLIDE
        ----------------------------------------- */

        function previousSlide() {

            currentSlide--;

            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }

            showSlide(currentSlide);

        }


        /* -----------------------------------------
           AUTO SLIDER
        ----------------------------------------- */

        function startAutoSlide() {

            autoSlide = setInterval(function () {

                nextSlide();

            }, 6000);

        }


        function restartAutoSlide() {

            if (autoSlide) {
                clearInterval(autoSlide);
            }

            startAutoSlide();

        }


        /* -----------------------------------------
           INITIAL SLIDE
        ----------------------------------------- */

        showSlide(currentSlide);


        /* -----------------------------------------
           START AUTO SLIDE
        ----------------------------------------- */

        startAutoSlide();


        /* -----------------------------------------
           NEXT BUTTON
        ----------------------------------------- */

        if (nextBtn) {

            nextBtn.addEventListener("click", function () {

                nextSlide();
                restartAutoSlide();

            });

        }


        /* -----------------------------------------
           PREVIOUS BUTTON
        ----------------------------------------- */

        if (prevBtn) {

            prevBtn.addEventListener("click", function () {

                previousSlide();
                restartAutoSlide();

            });

        }


        /* -----------------------------------------
           DOT NAVIGATION
        ----------------------------------------- */

        dots.forEach(function (dot, index) {

            dot.addEventListener("click", function () {

                currentSlide = index;

                showSlide(currentSlide);

                restartAutoSlide();

            });

        });

    }

});



/* =====================================================
   MOBILE NAVBAR
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    /* ---------------------------------------------
       CHECK NAVBAR
    --------------------------------------------- */

    if (!menuToggle || !navMenu) {
        return;
    }


    /* ---------------------------------------------
       MENU TOGGLE
    --------------------------------------------- */

    menuToggle.addEventListener("click", function (event) {

        event.preventDefault();

        event.stopPropagation();


        navMenu.classList.toggle("show");


        const icon =
            menuToggle.querySelector("i");


        if (icon) {

            if (navMenu.classList.contains("show")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });


    /* ---------------------------------------------
       NAV LINKS
    --------------------------------------------- */

    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("show");


            const icon =
                menuToggle.querySelector("i");


            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });


    /* ---------------------------------------------
       CLICK OUTSIDE MENU
    --------------------------------------------- */

    document.addEventListener("click", function (event) {

        if (
            navMenu.classList.contains("show") &&
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove("show");


            const icon =
                menuToggle.querySelector("i");


            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });

});



/* =====================================================
   ACTIVE NAVBAR ON SCROLL
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const navMenu =
        document.getElementById("navMenu");

    const navLinks =
        document.querySelectorAll(".nav-menu a");

    const sections =
        document.querySelectorAll("section[id]");


    if (!navMenu || navLinks.length === 0) {
        return;
    }


    window.addEventListener("scroll", function () {

        let scrollPosition =
            window.scrollY + 150;


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                navLinks.forEach(function (link) {

                    link.classList.remove("active");

                });


                const activeLink =
                    document.querySelector(
                        '.nav-menu a[href="#' +
                        sectionId +
                        '"]'
                    );


                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        });

    });

});



/* =====================================================
   SERVICES SCROLL REVEAL
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const serviceElements =
        document.querySelectorAll(".service-reveal");


    if (
        serviceElements.length === 0 ||
        !("IntersectionObserver" in window)
    ) {
        return;
    }


    const serviceObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "service-active"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    serviceElements.forEach(function (element) {

        serviceObserver.observe(element);

    });

});



/* =====================================================
   ABOUT US SCROLL ANIMATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const aboutImage =
        document.querySelector(
            ".cp-about-image-area"
        );

    const aboutContent =
        document.querySelector(
            ".cp-about-content-area"
        );


    if (!("IntersectionObserver" in window)) {
        return;
    }


    const aboutObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "cp-about-show"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    if (aboutImage) {

        aboutObserver.observe(aboutImage);

    }


    if (aboutContent) {

        aboutObserver.observe(aboutContent);

    }

});



/* =====================================================
   DR PARALLAX SCROLL ANIMATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const drElements =
        document.querySelectorAll(
            ".dr-parallax-reveal, " +
            ".dr-parallax-left, " +
            ".dr-parallax-right"
        );


    if (
        drElements.length === 0 ||
        !("IntersectionObserver" in window)
    ) {
        return;
    }


    const drObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "dr-parallax-active"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    drElements.forEach(function (element) {

        drObserver.observe(element);

    });

});



/* =====================================================
   MINI SPECIAL SERVICES ANIMATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const miniElements =
        document.querySelectorAll(
            ".mini-reveal, .mini-left, .mini-right"
        );


    if (
        miniElements.length === 0 ||
        !("IntersectionObserver" in window)
    ) {
        return;
    }


    const miniObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "mini-show"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    miniElements.forEach(function (element) {

        miniObserver.observe(element);

    });

});



/* =====================================================
   VIDEO TESTIMONIAL POPUP
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const videoCards =
        document.querySelectorAll(
            ".video-thumb-card"
        );

    const modal =
        document.querySelector(
            ".testimonial-video-modal"
        );

    const videoFrame =
        document.querySelector(
            "#testimonialYoutubeVideo"
        );

    const closeButton =
        document.querySelector(
            ".testimonial-close-btn"
        );


    /* ---------------------------------------------
       CHECK VIDEO POPUP
    --------------------------------------------- */

    if (
        videoCards.length === 0 ||
        !modal ||
        !videoFrame
    ) {
        return;
    }


    /* ---------------------------------------------
       OPEN VIDEO
    --------------------------------------------- */

    videoCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const videoID =
                card.getAttribute("data-video");


            if (!videoID) {
                return;
            }


            videoFrame.src =
                "https://www.youtube.com/embed/" +
                videoID +
                "?autoplay=1";


            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    /* ---------------------------------------------
       CLOSE FUNCTION
    --------------------------------------------- */

    function closeVideo() {

        modal.classList.remove("active");

        videoFrame.src = "";

        document.body.style.overflow = "";

    }


    /* ---------------------------------------------
       CLOSE BUTTON
    --------------------------------------------- */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeVideo
        );

    }


    /* ---------------------------------------------
       CLICK OUTSIDE
    --------------------------------------------- */

    modal.addEventListener(
        "click",
        function (event) {

            if (event.target === modal) {

                closeVideo();

            }

        }
    );


    /* ---------------------------------------------
       ESC KEY
    --------------------------------------------- */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                modal.classList.contains("active")
            ) {

                closeVideo();

            }

        }
    );

});



document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       IMAGE / VIDEO GALLERY SWITCH
    ====================================================== */

    const galleryTabs =
        document.querySelectorAll(".cpc-gallery-tab");

    const galleryContents =
        document.querySelectorAll(".cpc-gallery-content");


    galleryTabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            /* Remove active from buttons */

            galleryTabs.forEach(function (btn) {

                btn.classList.remove("active");

            });


            /* Remove active from contents */

            galleryContents.forEach(function (content) {

                content.classList.remove("active");

            });


            /* Add active */

            this.classList.add("active");


            const targetID =
                this.getAttribute("data-target");

            const target =
                document.getElementById(targetID);


            if (target) {

                target.classList.add("active");

            }

        });

    });



    /* =====================================================
       IMAGE LIGHTBOX
    ====================================================== */

    const imageCards =
        document.querySelectorAll(".cpc-image-card");

    const lightbox =
        document.getElementById("cpcLightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxClose =
        document.getElementById("lightboxClose");

    const lightboxPrev =
        document.getElementById("lightboxPrev");

    const lightboxNext =
        document.getElementById("lightboxNext");


    let imageList = [];

    let currentImage = 0;



    /* Get all images */

    imageCards.forEach(function (card) {

        const image =
            card.querySelector("img");


        if (!image) return;


        imageList.push(image.src);


        card.addEventListener("click", function () {

            currentImage =
                imageList.indexOf(image.src);

            openImage();

        });

    });



    /* Open image */

    function openImage() {

        if (!lightbox ||
            !lightboxImage ||
            imageList.length === 0) {

            return;

        }


        lightboxImage.src =
            imageList[currentImage];


        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    }



    /* Close image */

    function closeImage() {

        if (!lightbox) return;


        lightbox.classList.remove("show");

        document.body.style.overflow = "";

    }



    /* Next image */

    function nextImage() {

        if (imageList.length === 0) return;


        currentImage++;

        if (currentImage >= imageList.length) {

            currentImage = 0;

        }


        openImage();

    }



    /* Previous image */

    function previousImage() {

        if (imageList.length === 0) return;


        currentImage--;

        if (currentImage < 0) {

            currentImage =
                imageList.length - 1;

        }


        openImage();

    }



    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeImage
        );

    }


    if (lightboxNext) {

        lightboxNext.addEventListener(
            "click",
            nextImage
        );

    }


    if (lightboxPrev) {

        lightboxPrev.addEventListener(
            "click",
            previousImage
        );

    }



    /* Click outside image */

    if (lightbox) {

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {

                closeImage();

            }

        });

    }



    /* =====================================================
       YOUTUBE VIDEO MODAL
    ====================================================== */

    const videoCards =
        document.querySelectorAll(".cpc-video-card");

    const videoModal =
        document.getElementById("cpcVideoModal");

    const youtubeVideo =
        document.getElementById("youtubeVideo");

    const videoClose =
        document.getElementById("videoClose");



    videoCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const videoID =
                this.getAttribute("data-video");


            if (!videoID ||
                videoID.includes("VIDEO_ID")) {

                alert("Please add the YouTube Video ID.");

                return;

            }


            youtubeVideo.src =
                "https://www.youtube.com/embed/" +
                videoID +
                "?autoplay=1&rel=0";


            videoModal.classList.add("show");

            document.body.style.overflow = "hidden";

        });

    });



    /* Close video */

    function closeVideo() {

        if (!videoModal ||
            !youtubeVideo) {

            return;

        }


        videoModal.classList.remove("show");

        youtubeVideo.src = "";

        document.body.style.overflow = "";

    }



    if (videoClose) {

        videoClose.addEventListener(
            "click",
            closeVideo
        );

    }



    /* Click outside video */

    if (videoModal) {

        videoModal.addEventListener(
            "click",
            function (event) {

                if (event.target === videoModal) {

                    closeVideo();

                }

            }
        );

    }



    /* =====================================================
       KEYBOARD CONTROLS
    ====================================================== */

    document.addEventListener(
        "keydown",
        function (event) {


            /* Image controls */

            if (
                lightbox &&
                lightbox.classList.contains("show")
            ) {

                if (event.key === "ArrowRight") {

                    nextImage();

                }


                if (event.key === "ArrowLeft") {

                    previousImage();

                }


                if (event.key === "Escape") {

                    closeImage();

                }

            }



            /* Video close */

            if (
                videoModal &&
                videoModal.classList.contains("show") &&
                event.key === "Escape"
            ) {

                closeVideo();

            }

        }
    );

});

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       TREATMENT CARD REVEAL
    ====================================================== */

    const cards = document.querySelectorAll(
        ".cpc-t1-cause-card, .cpc-t1-therapy-box"
    );


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "cpc-t1-visible"
                        );

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        cards.forEach(function (card) {

            card.classList.add("cpc-t1-reveal");

            observer.observe(card);

        });

    }



    /* =====================================================
       SMOOTH BACK BUTTON
    ====================================================== */

    const backButton =
        document.querySelector(".cpc-t1-back");


    if (backButton) {

        backButton.addEventListener(
            "mouseenter",
            function () {

                this.querySelector("i")
                    ?.classList.add("fa-beat");

            }
        );


        backButton.addEventListener(
            "mouseleave",
            function () {

                this.querySelector("i")
                    ?.classList.remove("fa-beat");

            }
        );

    }

});


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealElements = document.querySelectorAll(
        ".cpc-t2-component-card, " +
        ".cpc-t2-aim-card, " +
        ".cpc-t2-stable"
    );


    if ("IntersectionObserver" in window) {

        revealElements.forEach(function (element) {

            element.classList.add("cpc-t2-reveal");

        });


        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "cpc-t2-visible"
                        );

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        revealElements.forEach(function (element) {

            observer.observe(element);

        });

    }


});

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".cpc-t4-benefit, " +
        ".cpc-t4-technique-card, " +
        ".cpc-t4-active-content"
    );


    if ("IntersectionObserver" in window) {

        elements.forEach(function (element) {

            element.classList.add("cpc-t4-reveal");

        });


        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "cpc-t4-visible"
                        );

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        elements.forEach(function (element) {

            observer.observe(element);

        });

    }

});


document.addEventListener("DOMContentLoaded", function () {

    const faqQuestions = document.querySelectorAll(".faq-question");


    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const currentItem = this.closest(".faq-item");
            const currentAnswer = currentItem.querySelector(".faq-answer");

            const isActive = currentItem.classList.contains("active");


            /* Close all other FAQ items */

            document.querySelectorAll(".faq-item").forEach(function (item) {

                if (item !== currentItem) {

                    item.classList.remove("active");

                    const answer = item.querySelector(".faq-answer");

                    answer.style.maxHeight = null;

                }

            });


            /* Open / close current FAQ */

            if (!isActive) {

                currentItem.classList.add("active");

                currentAnswer.style.maxHeight =
                    currentAnswer.scrollHeight + "px";

            } else {

                currentItem.classList.remove("active");

                currentAnswer.style.maxHeight = null;

            }

        });

    });


    /* Recalculate height when browser is resized */

    window.addEventListener("resize", function () {

        const activeItem =
            document.querySelector(".faq-item.active");

        if (activeItem) {

            const activeAnswer =
                activeItem.querySelector(".faq-answer");

            activeAnswer.style.maxHeight =
                activeAnswer.scrollHeight + "px";

        }

    });

});


document.addEventListener("DOMContentLoaded", function () {

    const contactItems = document.querySelectorAll(".contact-item");

    contactItems.forEach((item, index) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";

        setTimeout(() => {

            item.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }, 150 + (index * 120));

    });

});