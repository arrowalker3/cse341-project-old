const fs = require('fs');


const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Greetings</title></head>');
        // Name of action below does not need to be message, we are setting a variable name to use later
        res.write('<body>');
        res.write('<h1>Good morning (or evening)!</h1>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="message"><button type="submit">Send</button>');
        res.write('</form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    };

    if (url ==='/users') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        // Name of action below does not need to be message, we are setting a variable name to use later
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></body>');
        res.write('</html>');
        return res.end();
    };
};

// Export: using just the filename "routes" will use the proper function in this case
module.exports = requestHandler;