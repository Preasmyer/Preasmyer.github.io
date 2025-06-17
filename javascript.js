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

function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    if (content.classList.contains("show")) {
        content.classList.remove("show");
        setTimeout(() => content.style.display = "none", 300); // Delayed hide for smooth transition
    } else {
        content.style.display = "block";
        setTimeout(() => content.classList.add("show"), 10); // Ensures transition starts properly
    }
}


