class BgSetter {
    drawBg(bgImage) {
        createCanvas(windowWidth, windowHeight);
        tint(80);
        image(bgImage, 0, 0, windowWidth, windowHeight);
        noTint();
    }
}
