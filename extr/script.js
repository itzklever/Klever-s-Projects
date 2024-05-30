// Function to calculate the area of a circle
function calculateArea(radius) {
    // Check if the radius is valid (positive number)
    if (radius <= 0) {
        return "Invalid radius. Please enter a positive number.";
    }

    // Calculate the area using the formula: A = πr^2
    var area = Math.PI * radius * radius;

    // Return the calculated area
    return area;
}

// Example usage:
var radius = 5;
var area = calculateArea(radius);
console.log("The area of the circle with radius", radius, "is", area);

<button onclick="greet()">Shop now!</button>
