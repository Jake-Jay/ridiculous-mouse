// Returns a height from 0 to 0.9*(height)
function getRandomHeight() {
    return Math.floor(Math.random() * Math.floor(0.9 * height));
}

// Returns either 'left' or 'right'
function getRandomDir() {
    var dir = Math.floor(Math.random() + 0.5);
    if (dir === 0) {
        return 'right';
    }
    return 'left';
}

function toggleQuoteDisplay() {
    var x = document.getElementById("quote");
    if (x.style.display === "none") {
        randomiseQuote()
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function randomiseQuote() {
    // Set the quote
    var q = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("personal_message").textContent = q.message
    document.getElementById("author").textContent = q.author

    // Set the color
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    quote.style.color = '#' + randomColor;
    quote.style.borderColor = '#' + randomColor;

    // Randomise position
    var canvas = document.getElementById("canvas");
    var font_size = quote.style.fontSize;

    var left = Math.max(0, Math.floor(Math.random() * (window.screen.width - quote.offsetWidth))).toString();
    var top = Math.max(0, Math.floor(Math.random() * (window.screen.height - quote.offsetHeight))).toString();
    quote.style.left = left.concat('px')
    quote.style.top = top.concat('px')
}

function update() {

    if (state.direction === 'right') {
        state.x += state.step_size;
    } else {
        state.x -= state.step_size;
    }

    // either wall is hit
    if (state.x > width || state.x < -img_left.width) {
        state.step_size = 0
        state.y = getRandomHeight();
        state.direction = getRandomDir();
        // toggleQuoteDisplay();
        randomiseQuote();

        if (state.direction === 'right') {
            state.x = -img_left.width;
        } else {
            state.x = width;
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    var size_scaling = Math.floor(Math.random() * 4);
    var img_width = img_left.width / state.img_size_scaler;
    var img_height = img_left.height / state.img_size_scaler;
    if (state.direction === 'left') {
        ctx.drawImage(img_left, state.x, state.y, img_width, img_height);
    } else {
        ctx.drawImage(img_right, state.x, state.y, img_width, img_height);
    }
}

function loop(timestamp) {

    if (reversed_message.length > 0) {
        if (message_timer === message_timing) {
            message_builder = message_builder.concat(reversed_message.pop())
            document.getElementById("message").textContent = message_builder;
            message_timer = 0
        } else {
            message_timer++
        }
    } else if (reversed_message.length == 0) {
        // reset
        message_builder = ''
        document.getElementById("message").textContent = message_builder;
        reversed_message = [...message]

    }

    // keep the creature off screen
    if (state.step_size === 0) {
        sleep_counter += 1
        if (sleep_counter === 50) {
            state.step_size = state.default_step_size
            sleep_counter = 0
        }
        state.img_size_scaler = Math.floor(Math.random() * 4);
    }

    update();
    draw();

    window.requestAnimationFrame(loop)
}

// Get the stuff from the DOM
var canvas = document.getElementById("canvas")
var quote = document.getElementById("quote");

var resize = function () {
    width = window.innerWidth //* 2
    height = window.innerHeight //* 2
    canvas.width = width
    canvas.height = height
}
window.onresize = resize
resize()

var ctx = canvas.getContext("2d")

// Variables for the floating creature
var img_left = new Image();
var img_right = new Image();
var width
var height
var sleep_counter = 0

img_left.src = "./creatures/mouse-hat-left.png";
img_right.src = "./creatures/mouse-hat-right.png";

var state = {
    x: 0,                 // starting x position
    y: (height / 2),      // starting y position
    direction: 'right',   // right or left
    step_size: 10,
    default_step_size: 10
}

// Variables for text
var message = ["H", "A", "P", "P", "Y", " ", "B", "I", "R", "T", "H", "D", "A", "Y", "!", "!", "!"].reverse()
var reversed_message = [...message];
const message_timing = 12;
var message_timer = 0;
var message_builder = "";

confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
});


// Run the loop
setTimeout(() => {
    loop();
}, 5000)