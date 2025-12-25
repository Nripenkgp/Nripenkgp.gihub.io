document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".progress");

    bars.forEach(bar => {
        const value = bar.getAttribute("data-value");
        setTimeout(() => {
            bar.style.width = value + "%";
        }, 500);
    });
});

