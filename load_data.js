// function download_as_textfile()



function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function download_button_pressed() {
    // parse the quoted object
    var text = '';

    for(i=0; i<quotes.length; i++){

        text += (quotes[i].message + ' ~ (' + quotes[i].author + ')' + '\n\n')
    }
    
    download("hello.txt", text);
}

const quotes = [
    {
        "message": "Have a great day!",
        "author": "Love Jake"
    },
    {
        "message": "Thank you for always being impressed. It means a lot to me.",
        "author": "Love Jake"
    },
    {
        "message": "Why don't you read to me anymore?",
        "author": "Love Jake"
    },
    {
        "message": "Forget about your list, please.",
        "author": "Love Jake"
    },
    {
        "message": "Looking forward to a coffee from Tortellini.",
        "author": "Love Jake"
    },
    {
        "message": "Have a great year!",
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
    }
];