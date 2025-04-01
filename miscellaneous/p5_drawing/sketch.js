let currentColor;
let isInitialized;
let bgimage;

let pencilStyle = {
  traceRadius: 3,
  dotDiameter: 3,
  dotCount: 5,
}

let penStyle = {
  traceRadius: 0,
  dotDiameter: 10,
  dotCount: 1,
}

let brushStyle = {
  traceRadius: 10,
  dotDiameter: 4,
  dotCount: 10,
}

let eraserStyle = {}

let penTypeCircle = {
  x: 50,
  y: 210,
  diameter: 30,
  strokeWeight: 10,
}

let colorCircle = {
  x: 27,
  y: 415,
  diameter: 18,
  strokeWeight: 7,
}


let currentPenType = pencilStyle;
let currentPenButton;
let currentColorButton;

function preload() {
  bgimage = loadImage("./assets/roughpaper.jpg");
}

function setup() {
  isInitialized = true;
  // full screen canvas
  createCanvas(windowWidth, windowHeight);
  image(bgimage, 0, 0);
  drawPenTypeButtons();
  drawColorButtons();
  drawFunctionalityButtons();

}

function draw() {
  renderTitle();
  renderPenTypeArea();
  renderColorArea();
  renderFunctionalityArea();

  if (isInitialized == true) {
    writeStart();
  }
 

  if (currentColor == "random") {
    // set circles in random colors, but not too dark
    fill(random(0,255),random(0,255),random(0,255));
  } else {
    fill(currentColor);
  }
  noStroke();
  if(mouseIsPressed == true) {
    switch (currentPenType) {
      case pencilStyle:
      case brushStyle: {
        for (let i=0; i<currentPenType.dotCount; i+=1) {
          circle(mouseX+random(currentPenType.traceRadius*-1,currentPenType.traceRadius), mouseY+random(currentPenType.traceRadius*-1,currentPenType.traceRadius), currentPenType.dotDiameter);
        }
        break;
      }
      case penStyle: {
        if (currentColor == "random") {
          stroke(random(0,255),random(0,255),random(0,255));
          line(pmouseX, pmouseY, mouseX, mouseY);
        } else {  
          stroke(currentColor);
          line(pmouseX, pmouseY, mouseX, mouseY);
        }
        break;
      }
      case eraserStyle: {
        copy(bgimage, mouseX, mouseY, 20, 20, mouseX, mouseY, 20, 20);
        break;
      }
    }
  }
}

function writeStart() {
  if (isInitialized == true) {
    stroke(200);
    strokeWeight(5);
    fill("#EC8620");
    textSize(50);
    textAlign(CENTER, TOP);
    text("Hold the mouse 🖱️ \nto start your work!", windowWidth/2, windowHeight/2);
  } 
}

function mousePressed() {
  if (isInitialized == true) {
    createCanvas(windowWidth, windowHeight);
    image(bgimage, 0, 0);
    isInitialized = false;
  }
}

function renderPenTypeArea() {
  let basicX = 0;
  let basicY = 60;
  strokeWeight(5);
  fill(200);
  stroke("gray");
  rect(basicX, basicY, 100, 305);

  textAlign(CENTER, TOP);
  fill(80);
  noStroke();
  textSize(18);
  text("Pen Type", basicX+50, basicY+10);
}

function renderTitle() {
  strokeWeight(5);
  stroke("#78400E")
  fill("#F0EEAC");
  rect(0, 0, windowWidth, 45);  

  // Title text
  noStroke();
  fill("#78400E");  
  textSize(30);  
  textAlign(CENTER, TOP);  
  text("Simple Paint v0.1 - by UoB CS 24/25 Group 8", windowWidth/2, 10);
  }

function renderColorArea() {
  let basicX = 0;
  let basicY = 380;
  strokeWeight(5);
  fill(200);
  stroke("gray");
  rect(basicX, basicY, 100, 320);
  textAlign(CENTER, TOP);
  fill(80);
  noStroke();
  textSize(18);
  text("Color", basicX+50, basicY+10);
} 

function renderFunctionalityArea() {
  let basicX = windowWidth-100;
  let basicY = 60;
  strokeWeight(5);
  fill(200);
  stroke("gray");
  rect(basicX, basicY, 100, 240);

  textAlign(CENTER, TOP);
  fill(80);
  noStroke();
  textSize(18);
  text("Function", basicX+50, basicY+10);
}


function drawPenTypeButtons() {
  let basicX = 5;
  let basicY = 60;
  let pencilButton = createButton("✏️").position(basicX+15, basicY+35);
  pencilButton.style("border", 0);
  pencilButton.style("background-color", "white");
  pencilButton.style("font-size", "45px");
  pencilButton.style("border-radius", "50%");
  pencilButton.style("width", "60px");
  pencilButton.style("height", "60px");
  pencilButton.style("padding", "0 0 0 0");
  pencilButton.mousePressed(function() {
    currentPenType = pencilStyle;
    if (currentPenButton != null) {
      currentPenButton.style("background-color", "white");
    }
    currentPenButton = pencilButton;
    currentPenButton.style("background-color", "gray");
  });
  let brushButton = createButton("🖌️").position(basicX+15, basicY+100);
  brushButton.style("border", 0);
  brushButton.style("background-color", "white");
  brushButton.style("font-size", "45px");
  brushButton.style("border-radius", "50%");
  brushButton.style("width", "60px");
  brushButton.style("height", "60px");
  brushButton.style("padding", "0 0 0 0");
  brushButton.mousePressed(function() {
    currentPenType = brushStyle;
    if (currentPenButton != null) {
      currentPenButton.style("background-color", "white");
    }
    currentPenButton = brushButton;
    currentPenButton.style("background-color", "gray");
  });
  let penButton = createButton("🖊️").position(basicX+15, basicY+165);
  penButton.style("border", 0);
  penButton.style("background-color", "white");
  penButton.style("font-size", "45px");
  penButton.style("border-radius", "50%");
  penButton.style("width", "60px");
  penButton.style("height", "60px");
  penButton.style("padding", "0 0 0 0");
  penButton.mousePressed(function() {
    currentPenType = penStyle;
    if (currentPenButton != null) {
      currentPenButton.style("background-color", "white");
    }
    currentPenButton = penButton;
    currentPenButton.style("background-color", "gray");
  });
  let eraserButton = createButton("🧼").position(basicX+15, basicY+230);
  eraserButton.style("border", 0);
  eraserButton.style("background-color", "white");
  eraserButton.style("font-size", "45px");
  eraserButton.style("border-radius", "50%");
  eraserButton.style("width", "60px");
  eraserButton.style("height", "60px");
  eraserButton.style("padding", "0 0 0 0");
  eraserButton.mousePressed(function() {
    currentPenType = eraserStyle;
    if (currentPenButton != null) {
      currentPenButton.style("background-color", "white");
    }
    currentPenButton = eraserButton;
    currentPenButton.style("background-color", "gray");
    });
  if (isInitialized == true) {
    currentPenButton = pencilButton;
    currentPenType = pencilStyle;
    currentPenButton.style("background-color", "gray");
  }
}

function drawColorButtons() {
  let basicX = 5;
  let basicY = 380;
  let redButton = createButton("").position(basicX+3, basicY+40);
  redButton.style("border", "1px solid gray");
  redButton.style("background-color", "red");
  redButton.style("border-radius", "50%");
  redButton.style("width", "40px");
  redButton.style("height", "40px");
  redButton.mousePressed(function() {
    currentColor = "red";
    if (currentColorButton != null) {
      currentColorButton.style("border", "1px solid gray");
    }
    currentColorButton = redButton;
    currentColorButton.style("border", "5px solid #454545");
  });
  let greenButton = createButton("").position(basicX+45, basicY+40);
  greenButton.style("border", "1px solid gray");
  greenButton.style("background-color", "green");
  greenButton.style("border-radius", "50%");
  greenButton.style("width", "40px");
  greenButton.style("height", "40px");
  greenButton.mousePressed(function() {
    currentColor = "green";
    if (currentColorButton != null) {
      currentColorButton.style("border", "1px solid gray");
    }
    currentColorButton = greenButton;
    currentColorButton.style("border", "5px solid #454545");
  });
  let blueButton = createButton("").position(basicX+3, basicY+85); 
  blueButton.style("border", "1px solid gray");
  blueButton.style("background-color", "blue");
  blueButton.style("border-radius", "50%");
  blueButton.style("width", "40px");
  blueButton.style("height", "40px");
  blueButton.mousePressed(function() {
    currentColor = "blue";
    if (currentColorButton != null) {
      currentColorButton.style("border", "1px solid gray");
    }
    currentColorButton = blueButton;
    currentColorButton.style("border", "5px solid #454545");
  });
    
  let yellowButton = createButton("").position(basicX+45, basicY+85);
  yellowButton.style("border", "1px solid gray");
  yellowButton.style("background-color", "yellow");
  yellowButton.style("border-radius", "50%");
  yellowButton.style("width", "40px");
  yellowButton.style("height", "40px");
  yellowButton.mousePressed(function() {
    currentColor = "yellow";
    if (currentColorButton != null) {
      currentColorButton.style("border", "1px solid gray");
    }
    currentColorButton = yellowButton;
    currentColorButton.style("border", "5px solid #454545");
  });
  
  let purpleButton = createButton("").position(basicX+3, basicY+130);
  purpleButton.style("border", "1px solid gray");
  purpleButton.style("background-color", "purple");
  purpleButton.style("border-radius", "50%");
  purpleButton.style("width", "40px");
  purpleButton.style("height", "40px");
  purpleButton.mousePressed(function() {
    currentColor = "purple";
    if (currentColorButton != null) {
      currentColorButton.style("border", "1px solid gray");
    }
    currentColorButton = purpleButton;
    currentColorButton.style("border", "5px solid #454545");
  });
  
  let orangeButton = createButton("").position(basicX+45, basicY+130);
  orangeButton.style("border", "1px solid gray");
  orangeButton.style("background-color", "orange");
  orangeButton.style("border-radius", "50%");
  orangeButton.style("width", "40px");
  orangeButton.style("height", "40px");
  orangeButton.mousePressed(function() {
    currentColor = "orange";
    if (currentColorButton != null) {
      currentColorButton.style("border", "1px solid gray");
    }
    currentColorButton = orangeButton;
    currentColorButton.style("border", "5px solid #454545");
  });
  let goldButton = createButton("").position(basicX+3, basicY+175); 
  goldButton.style("border", "1px solid gray");
  goldButton.style("background-color", "gold");
  goldButton.style("border-radius", "50%");
  goldButton.style("width", "40px");
  goldButton.style("height", "40px");
  goldButton.mousePressed(function() {
    currentColor = "gold";
    if (currentColorButton != null) {
      currentColorButton.style("border", "1px solid gray");
    }
    currentColorButton = goldButton;
    currentColorButton.style("border", "5px solid #454545");
  });
  
  let pinkButton = createButton("").position(basicX+45, basicY+175);
  pinkButton.style("border", "1px solid gray");
  pinkButton.style("background-color", "pink");
  pinkButton.style("border-radius", "50%"); 
  pinkButton.style("width", "40px");  
  pinkButton.style("height", "40px");
  pinkButton.mousePressed(function() {
    currentColor = "pink";
    if (currentColorButton != null) {
      currentColorButton.style("border", "1px solid gray");
    }
    currentColorButton = pinkButton;
    currentColorButton.style("border", "5px solid #454545");
  });
  
  let grayButton = createButton("").position(basicX+3, basicY+220);
  grayButton.style("border", "1px solid gray");
  grayButton.style("background-color", "gray");
  grayButton.style("border-radius", "50%");
  grayButton.style("width", "40px");
  grayButton.style("height", "40px");
  grayButton.mousePressed(function() {
    currentColor = "gray";
    if (currentColorButton != null) {
      currentColorButton.style("border", "1px solid gray");
    }
    currentColorButton = grayButton;
    currentColorButton.style("border", "5px solid #454545");
  });
  
  let brownButton = createButton("").position(basicX+45, basicY+220);
  brownButton.style("border", "1px solid gray");
  brownButton.style("background-color", "brown");
  brownButton.style("border-radius", "50%");
  brownButton.style("width", "40px");
  brownButton.style("height", "40px");
  brownButton.mousePressed(function() {
    currentColor = "brown";
    if (currentColorButton != null) {
      currentColorButton.style("border", "1px solid gray");
    }
    currentColorButton = brownButton;
    currentColorButton.style("border", "5px solid #454545");
  });
  
  let blackButton = createButton("").position(basicX+3, basicY+265);
  blackButton.style("border", "1px solid gray");
  blackButton.style("background-color", "black");
  blackButton.style("border-radius", "50%");
  blackButton.style("width", "40px");
  blackButton.style("height", "40px");
  blackButton.mousePressed(function() {
    currentColor = "black";
    if (currentColorButton != null) {
      currentColorButton.style("border", "1px solid gray");
    }
    currentColorButton = blackButton;
    currentColorButton.style("border", "5px solid #454545");
  });
  
  let whiteButton = createButton("🌈").position(basicX+45, basicY+265);
  whiteButton.style("padding", "0 0 0 0")
  whiteButton.style("font-size", "20px");
  whiteButton.style("color", "#454545");
  whiteButton.style("border", "1px solid gray");
  whiteButton.style("background-color", "white");
  whiteButton.style("border-radius", "50%");
  whiteButton.style("width", "40px");
  whiteButton.style("height", "40px");
  whiteButton.mousePressed(function() {
    currentColor = "random";
    if (currentColorButton != null) {
      currentColorButton.style("border", "1px solid gray");
    }
    currentColorButton = whiteButton;
    currentColorButton.style("border", "5px solid #454545");
  });
  if (isInitialized == true) {
    currentColor = "red";
    currentColorButton = redButton;
    currentColorButton.style("border", "5px solid #454545");
  }
}

function drawFunctionalityButtons() {
  let basicX = windowWidth-114;
  let basicY = 60;
  let cameraButton = createButton("📷").position(basicX+35, basicY+35);
  cameraButton.style("border", 0);
  cameraButton.style("background-color", "white");
  cameraButton.style("font-size", "40px");
  cameraButton.style("border-radius", "50%");
  cameraButton.style("width", "60px");
  cameraButton.style("height", "60px");
  cameraButton.style("padding", "0 0 10px 0");
  cameraButton.mousePressed(function() {
    cameraButton.style("background-color", "gray");
  });
  cameraButton.mouseReleased(function() {
    cameraButton.style("background-color", "white");
    let img = get(102, 0, windowWidth-204, windowHeight)
    img.save("myCanvas.jpg");
  });
  let clearButton = createButton("🗑️").position(basicX+35, basicY+100);
  clearButton.style("border", 0);
  clearButton.style("background-color", "white");
  clearButton.style("font-size", "40px");
  clearButton.style("border-radius", "50%");
  clearButton.style("width", "60px");
  clearButton.style("height", "60px");
  clearButton.style("padding", "0 0 0 0");
  clearButton.mousePressed(function() {
    clearButton.style("background-color", "gray");
  });
  clearButton.mouseReleased(function() {
    clearButton.style("background-color", "white");
    clear();
    setup();
  });
  let aboutButton = createButton("📘").position(basicX+35, basicY+165);
  aboutButton.style("border", 0);
  aboutButton.style("background-color", "white");
  aboutButton.style("font-size", "40px");
  aboutButton.style("border-radius", "50%");
  aboutButton.style("width", "60px");
  aboutButton.style("height", "60px");
  aboutButton.style("padding", "0 0 0 0");
  aboutButton.mousePressed(function() {
    aboutButton.style("background-color", "gray");

  });
  aboutButton.mouseReleased(function() {
    aboutButton.style("background-color", "white");
    alert("Author: University of Bristol - CS 24/25 - Group 8\n"
      + "Project: Simple Paint\n"
      + "Version: 0.1\n"
      + "Date: 2025-1-22\n"
      + "Members: Zewen Liang, Yunhao Zhou, Kaijie Xu, Zhi Zhao, Yuying Zhang\n"
  );
  });

}