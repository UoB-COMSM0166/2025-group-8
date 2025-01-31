class BgSetter {
    drawBg(bgImage) {
        createCanvas(windowWidth, windowHeight);
        image(bgImage, 0, 0, windowWidth, windowHeight);
    }
}