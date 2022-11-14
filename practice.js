background(240, 84, 164);
var x=200;
var y=200;
draw = function() {
    fill(255, 153, 0);
    ellipse(x, y, 500, 500);
    ellipse(x, y+25, 400, 400);

    x ++;
    y ++;
};
