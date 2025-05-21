document.querySelectorAll(".gallery-row").forEach((row) => {
    let scrollInterval;

    row.addEventListener("mousemove", (e) => {
        const rowWidth = row.scrollWidth;
        const visibleWidth = row.offsetWidth;
        const mouseX = e.clientX - row.getBoundingClientRect().left;
        const scrollSpeed = 5;

        if (mouseX < 50) {
            clearInterval(scrollInterval);
            scrollInterval = setInterval(() => {
                row.scrollLeft -= scrollSpeed;
            }, 10);
        }

        else if (mouseX > visibleWidth - 50) {
            clearInterval(scrollInterval);
            scrollInterval = setInterval(() => {
                row.scrollLeft += scrollSpeed;
            }, 10);
        } else {
            clearInterval(scrollInterval);
        }
    });

    row.addEventListener("mouseleave", () => {
        clearInterval(scrollInterval);
    });
});