const phoneMask = document.querySelector(".phone-number");


IMask(
    phoneMask,
    {mask: "+{38}(\\000) 000-00-00"}
)



document.querySelectorAll(".make-appointment").forEach(button => {
    button.addEventListener("click", (e) => {
        document.querySelector(".overlay-contacts").classList.toggle("active")
        document.querySelector(".popup-contacts").classList.toggle("active")
    })
})




document.querySelector(".send-contacts").addEventListener("click", (e) => {
    e.preventDefault()
    
    document.querySelector(".overlay-contacts").classList.remove("active");
    document.querySelector(".popup-contacts").classList.remove("active");
})


document.querySelectorAll(".clear-popup").forEach(button => {
    button.addEventListener("click", () => {
        if (document.querySelector(".overlay-contacts").classList.contains("active")) {
            document.querySelector(".overlay-contacts").classList.remove("active");
            document.querySelector(".popup-contacts").classList.remove("active");
        }
    });
});


setTimeout(() => {
    document.querySelector(".overlay-contacts").classList.toggle("active");
    document.querySelector(".popup-contacts").classList.toggle("active");
}, 10000);