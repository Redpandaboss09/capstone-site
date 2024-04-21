document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
       entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
       });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-loud');
            } else {
                entry.target.classList.remove('show-loud');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden-loud');
    hiddenElements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('type-show');
            } else {
                entry.target.classList.remove('type-show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.type-hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function () {
    let index = 0,
        interval = 1000;

    const rand = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = star => {
        star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
        star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

        star.style.animation = "none";
        star.offsetHeight;
        star.style.animation = "";
    }

    for(const star of document.getElementsByClassName("magic-star")) {
        setTimeout(() => {
            animate(star);

            setInterval(() => animate(star), 1000);
        }, index++ * (interval / 3))
    }
});