// Determine variables

// Assign random number between 19 - 120 and display

var assignedNumber = random (19, 120);
$(".assigned").text("Assigned Number: " + assignedNumber)

// Assign random number between 1 - 12 to each crystal and hide behind image
var crystalNumber = random (1, 12);
$("rainbow").text(crystalNumber)
$(".strawberry").text(crystalNumber)
$(".purple").text(crystalNumber)
$(".diamond").text(crystalNumber)

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// On image click, reveal and add the value assigned to the crystal to the total score

$(".rainbow").on("click", function () {
    $(".rainbow").hide()
})

$(".strawberry").on("click", function () {
    $(".strawberry").hide()
})

$(".purple").on("click", function () {
    $(".purple").hide()
})

$(".diamond").on("click", function () {
    $(".diamond").hide()
})

// If Total Score = Assigned...
    // Add 1 to Wins:
    // Reset Assigned Random Number
    // Reset Crystal Random Numbers
    // Else If Total Score > Assigned,
        // Add 1 to Losses:
        // Reset Assigned Random Number
        // Reset Crystal Random Numbers
    // Else... do nothing