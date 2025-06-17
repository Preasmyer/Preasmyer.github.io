document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project a");
    projects.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
        });
        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
        });
    });
});

