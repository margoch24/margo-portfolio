const DATA = [
    {
        "title": "Skyfly",
        "type": "websites",
        "image": "public/img/skyfly.png",
        "id": "skyfly",
        description: "A dynamic and visually engaging website featuring sleek designs and animations, ideal for showcasing modern web capabilities."
    },
    {
        "title": "GemWiz",
        "type": "websites",
        "image": "public/img/gemwiz.png",
        "id": "gemwiz",
        description: "A gemstone catalog or marketplace website that highlights beautiful visuals and offers an intuitive browsing experience."
    },
    {
        "title": "TravelTales",
        "type": "websites",
        "image": "public/img/traveltales.png",
        "id": "traveltales",
        description: "A travel-focused online forum designed to share stories, itineraries, and memorable adventures from around the world."
    },
    {
        "title": "SportLife (exmp)",
        "type": "mobile-apps",
        "image": "public/img/sportlife.png",
        "id": "sportlife",
        description: "A mobile app concept that keeps you motivated with fitness tracking, workout plans, and lifestyle tips for staying active."
    },
    {
        "title": "EatOut (exmp)",
        "type": "mobile-apps",
        "image": "public/img/eatout.png",
        "id": "eatout",
        description: "A mobile app for discovering great dining spots, complete with reviews, menus, and location-based recommendations."
    },
    {
        "title": "ShowLingo",
        "type": "websites",
        "image": "public/img/showlingo.png",
        "id": "showlingo",
        description: "A website dedicated to language learning through popular TV shows, offering an interactive and fun educational experience."
    },
    {
        "title": "DeCalendar",
        "type": "websites",
        "image": "public/img/decalendar.png",
        "id": "decalendar",
        description: "A modern and feature-rich online calendar application designed to help users plan and organize their schedules effortlessly."
    },
    {
        "title": "ShowLingo",
        "type": "extensions",
        "image": "public/img/showlingo-ext.png",
        "id": "showlingo-ext",
        description: "A browser extension that integrates language learning tools directly into streaming platforms for seamless practice."
    },
    {
        "title": "Clock",
        "type": "websites",
        "image": "public/img/clock.png",
        "id": "clock",
        description: "A simple yet interactive clock, showcasing real-time updates and styling through JavaScript functionality."
    },
]

document.querySelectorAll('.portfolio-menu .menu-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.portfolio-menu .menu-button.active').classList.remove("active")
        button.classList.add('active');

        const newData = DATA.filter(({type}) => button.id !== "all" ? type.toLowerCase() === button.id : type);
        setData(newData)
    });
});

const setData = (data) => {
    const div = document.querySelector(".portfolio-projects");
    div.innerHTML = ''
    data.forEach(({ title, image, id }) => {
        const newHtml = `
            <div class="project">
                <img src="${image}" />
                <div class="project-hover" id="${id}">
                    <h2 class="project-hover-text">${title}</h2>
                </div>
            </div>
        `;

        div.insertAdjacentHTML("beforeend", newHtml);
    })

    document.querySelectorAll('.project-hover').forEach(project => {
        project.addEventListener('click', () => {
            const [{ title, description, id }] = DATA.filter(({ id }) => project.id === id);
            document.querySelector(".modal-title").textContent = title;
            document.querySelector(".modal-description").textContent = description;

            if (id === "clock") {
                document.querySelector(".modal .svg").classList.remove("hidden")
            } else {
                document.querySelector(".modal .svg").classList.add("hidden")
            }

            const modalElement = document.querySelector("#projectModal");
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        });
    });
}

const onPotfolioPageReady = () => {
    setData(DATA);
    setTimeout(finishLoading, 300)
    setInterval(updateClock, 1000);
    updateClock();
}

function updateClock() {
    const clockElement = document.querySelector(".digital-clock h4");
    const now = new Date();
  
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

const finishLoading = () => {
    document.querySelector(".loading").classList.add("hidden")
    document.querySelector(".portfolio-section").classList.remove("hidden")
}
  