document.addEventListener('wheel', (event) => {
    document.documentElement.scrollLeft += event.deltaY; //scroll left if scrolling down
    document.documentElement.scrollLeft += event.deltaX; //scroll left if scrolling left
});