// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function downloadButtonPressed() {
    // parse the quoted object
    var text = '';

    for(i=0; i<quotes.length; i++){

        text += (quotes[i].message + ' ~ (' + quotes[i].author + ')' + '\n\n')
    }
    
    download("hello.txt", text);
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



// -----------------------------------------------------------------------------
// Data
// -----------------------------------------------------------------------------

// Colors
const quote_colors = [
    "#DC143C",
    "#808000",
    "#556B2F",
    "#006400",
    "#2E8B57",
    "#A52A2A",
    "#800000",
    "#20B2AA",
    "#4682B4",
    "#000080",
    "#4B0082",
    "#6A5ACD",
    "#8B008B",
    "#800080",
    "#C71585",
    "#A0522D",
    "#708090",
    "#FF69B4"
]

// Quotes
const quotes = [
    {
      "message": "Have a great day",
      "author": "Love Jake"
    },
    {
      "message": "Have a great year",
      "author": "Love Jake"
    },
    {
      "message": "I miss your cap and your jokes. Happy happy",
      "author": "Love Sacha"
    },
    {
      "message": "So what's news...",
      "author": "Mark"
    },
    {
        "message": "To the best bridge opponent let’s keep on playing.....",
        "author": "Love Michelle"
    },
    {
        "message": "Dad, I love it when you pop past the shop to say hi!",
        "author": "Love Michelle"
    },
    {
        "message": "Dad, thanks for always being available to offer advice and support to everyone all the time- you know so much about everything!",
        "author": "Love Michelle"
    },
    {
        "message": "Thank you for loving my kids and being their greatest fan",
        "author": "Love Michelle"
    },
    {
        "message": "Remember my first visit to the circus when you surprised me  - loved it!",
        "author": "Love Michelle"
    },
    {
        "message": "Dad I am so grateful for all your interest  and support in everything I do.",
        "author": "Love Michelle"
    },
    {
        "message": "Call me when you’re free.",
        "author": "Love Jake"
    },
    {
        "message": "Our Sunday morning walks and tortellino breakfasts are a highlight of my week!",
        "author": "Love Paris"
    },
    {
        "message": "Thank you for always being my biggest supporter in all aspects of my life.",
        "author": "Love Paris"
    },
    {
        "message": "I love you always and I am so incredibly proud to call you my grandpa.",
        "author": "Love Paris"
    },
    {
        "message": "I have always admired your curiosity and your wide range of knowledge",
        "author": "Love Paris"
    },
    {
        "message": "Thanks for passing on your food fussiness to me",
        "author": "Love Paris"
    },
    {
        "message": "Gramps, you are the most ‘ridiculous’ but most ‘marvellous’ person I have ever met.",
        "author": "Love Lula"
    },
    {
        "message": "I love exploring Joburg with you on a Sunday morning.",
        "author": "Love Lula"
    },
    {
        "message": "You make me laugh like no one else.",
        "author": "Love Lula"
    },
    {
        "message": "Finish your dinner!",
        "author": "Love Granny"
    },
    {
        "message": "I have a body of an eighteen year old. I keep it in the fridge.",
        "author": "Love Spike Milligan"
    },
    {
        "message": "If God did not intend for us to eat animals, then why did he make them out of meat?",
        "author": "Love John Cleese"
    },
    {
        "message": "You can't get a suit of armour and a rubber chicken just like that. You have to plan ahead.",
        "author": "Love Michael Palin"
    },
    {
        "message": "Thank you for being such an amazing husband, father and grandfather",
        "author": "Love Granny"
    },
    {
        "message": "Looking forward to many more happy years together.",
        "author": "Love Granny"
    },
    {
        "message": "Stop going for so many walks! I want to watch Netflix!",
        "author": "Love Granny"
    },
    {
        "message": "Happy Birthday Dad. Thanks for all your advice, support and encouragement.",
        "author": "Love Steve"
    },
    {
        "message": "Having you around always puts a smile on my face",
        "author": "Love Sacha"
    },
    {
        "message": "Norman, thank you for always making me laugh and for your insightful conversations",
        "author": "Love Sacha"
    }
];