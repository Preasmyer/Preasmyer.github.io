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
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

