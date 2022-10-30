//This File Contains methods for all Computations and Calculations

//Distance Between Two Points
function getDistance(xA, yA, xB, yB) {
	var xDiff:Number = xA - xB;
	var yDiff:Number = yA - yB;

	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

//Slope of a Line
function getSlope(x1, y1,
                       x2, y2)
    {
        return (y2 - y1) / (x2 - x1);
    }
