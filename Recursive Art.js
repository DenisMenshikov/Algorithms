var drawShape = function(x, y, xSize, ySize){
    
    var r = floor(random(0, 255));
    var g = floor(random(0, 255));
    var b = floor(random(0, 255));
    fill(r, g, b);
    rect(x, y, xSize, ySize);
    
    var newX = 1+x*2;
    var newySize = ySize/1.5;
    if (newX <= width) {
        drawShape(newX, y, xSize, newySize);
    }
    
    var newY = 1+y*2;
    var newxSize = xSize/1.5;
    if (newY <= height) {
        drawShape(x, newY, newxSize, ySize);
    }
};

drawShape(0, 0, 300, 300);
