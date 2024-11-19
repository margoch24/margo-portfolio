const onDocumentReady = () => {
    onDocumentScroll()

    document.querySelector('.navmenu-toggle').addEventListener('click', () => {
        document.querySelector('.mobile-navmenu').classList.toggle('hidden');
    });

    document.querySelector('.code').addEventListener('click', () => {
        showServiceDetails('code');
    });
    
    document.querySelector('.video').addEventListener('click', () => {
        showServiceDetails('video');
    });
    
    document.querySelector('.design').addEventListener('click', () => {
        showServiceDetails('design');
    });

    document.querySelectorAll('.arrow-div i').forEach(arrow => {
        arrow.addEventListener('click', () => {
            document.querySelector('.services-section').classList.remove('hidden');
            document.querySelectorAll('.service-details').forEach(block => {
                block.classList.add('hidden');
            });
        });
    });
}

function showServiceDetails(selector) {
    document.querySelectorAll('.service-details').forEach(block => {
        if (block.id !== selector && !block.classList.contains("hidden")) {
            block.classList.add("hidden")
        }
    });

    document.querySelector(`.services-section`).classList.add('hidden');
    document.querySelector(`#${selector}`).classList.remove('hidden');
}

const onDocumentScroll = () => {
    const fadeIns = document.querySelectorAll(".fade-in");
    const linesGrow = document.querySelectorAll(".line-grow");
    const circlesGrow = document.querySelectorAll(".circle-grow");

    fadeIns.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
        el.classList.add("show");
        }
    });

    linesGrow.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const targetPercentage = el.getAttribute("data-percentage");
        if (rect.top < window.innerHeight) {
            el.style.width = `${targetPercentage}%`;
            el.classList.add("show-line");
        }
    });

    circlesGrow.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const targetPercentage = el.getAttribute("data-percentage");
        if (rect.top < window.innerHeight && !el.classList.contains('animated')) {
            animateCircle(el, targetPercentage);
            el.classList.add('animated');
        }
    });
}

const animateCircle = (el, targetPercentage) => {
    let currentPercentage = 0;
    const animationDuration = 1000;
    const framesPerSecond = 60;
    const increment = targetPercentage / (animationDuration / (1000 / framesPerSecond));
    
    const interval = setInterval(() => {
        if (currentPercentage >= targetPercentage) {
            clearInterval(interval);
        } else {
            currentPercentage += increment;
            el.style.background = `conic-gradient(rgba(9, 121, 105, 1) 0%, rgba(9, 121, 105, 1) ${currentPercentage}%, #1a1a1a ${currentPercentage}%, #1a1a1a 100%)`;
        }
    }, 1000 / framesPerSecond);
};

document.addEventListener("DOMContentLoaded", onDocumentReady);
document.addEventListener("scroll", onDocumentScroll);
  