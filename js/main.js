const header = document.querySelector(".header");
const container = document.querySelector(".container");
const aboutMe = document.querySelector(".about-me");
const services = document.querySelector(".services");
const reviews = document.querySelector(".reviews");
const teaching = document.querySelector(".teaching");
const contacts = document.querySelector(".contacts");

document.querySelector(".burger-btn").addEventListener("click", () => {
    if (!header.classList.contains("open-burger")) {
        header.classList.remove("close-burger");
        header.classList.toggle("open-burger");
        container.style.background = "rgba(0, 0, 0, 0.8)";
        container.style.padding = "0";
        container.style.width = "calc(100vw - 7.7px)"
        aboutMe.style.position = "relative";
        aboutMe.style.zIndex = "-2";
        services.style.position = "relative";
        services.style.zIndex = "-2";
        reviews.style.position = "relative";
        reviews.style.zIndex = "-2";
        teaching.style.display = "relative";
        teaching.style.zIndex = "-2";
        contacts.style.display = "relative";
        contacts.style.zIndex = "-2";
    } else {
        header.classList.remove("open-burger");
        header.classList.toggle("close-burger");
        container.style.background = "#fff";
        container.style.padding = "10px 20px";
        container.style.width = "calc(100vw - 8px)"
        aboutMe.style.position = "static";
        aboutMe.style.zIndex = "2";
        services.style.position = "static";
        services.style.zIndex = "2";
        reviews.style.position = "static";
        reviews.style.zIndex = "2";
        teaching.style.position = "static";
        teaching.style.zIndex = "2";
        contacts.style.position = "static";
        contacts.style.zIndex = "0";
    }
});



document.querySelector(".information-1").addEventListener("click", () => {
    const popup = document.querySelector(".overlay-1");
    document.querySelector(".popup-information-1").classList.toggle("active")

    popup.classList.toggle("active")
});


document.querySelector(".information-2").addEventListener("click", () => {
    const popup = document.querySelector(".overlay-2");
    document.querySelector(".popup-information-2").classList.toggle("active")
    popup.classList.toggle("active")
});


document.querySelectorAll(".clear-popup").forEach(button => {
    button.addEventListener("click", () => {
        if (document.querySelector(".overlay-1").classList.contains("active")) {
            document.querySelector(".overlay-1").classList.remove("active");
            document.querySelector(".popup-information-1").classList.remove("active");
        } else if (document.querySelector(".overlay-2").classList.contains("active")) {
            document.querySelector(".overlay-2").classList.remove("active");
            document.querySelector(".popup-information-2").classList.remove("active");
        }
    });
});


document.querySelectorAll(".navbar-item").forEach(navBarItem => {
    navBarItem.addEventListener("click", () => {
        header.classList.remove("open-burger");
        header.classList.toggle("close-burger");
        container.style.background = "#fff";
        container.style.padding = "10px 20px";
        container.style.width = "calc(100vw - 20px)"
        aboutMe.style.position = "static";
        aboutMe.style.zIndex = "2";
        services.style.position = "static";
        services.style.zIndex = "2";
        reviews.style.position = "static";
        reviews.style.zIndex = "2";
        teaching.style.position = "static";
        teaching.style.zIndex = "2";
        contacts.style.position = "static";
        contacts.style.zIndex = "-2";

    });
});


document.addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay-1")) {
        document.querySelector(".overlay-1").classList.remove("active");
        document.querySelector(".popup-information-1").classList.remove("active");
    } else if (e.target.classList.contains("overlay-2")) {
        document.querySelector(".overlay-2").classList.remove("active");
        document.querySelector(".popup-information-2").classList.remove("active");
    }
});

