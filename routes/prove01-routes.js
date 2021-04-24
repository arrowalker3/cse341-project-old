const fs = require('fs');
const { reset } = require('nodemon');


const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    // In testing, just to make sure it works
    // console.log('Requested page ', url);

    if (url === '/') {
        res.write('<html>');
        // Title of HTML
        res.write('<head><title>Greetings</title></head>');

        // Body of HTML
        res.write('<body>');
        res.write('<h1>Good morning (or evening)!</h1>');

        // Form on page
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="username">');       // Text input
        res.write('<button type="submit">Send</button>');   // Submit button
        res.write('</form>')
        res.write('<a href="/users">View all the users here!</a>')

        res.write('</body>');
        res.write('</html>');
        return res.end();
    };

    if (url ==='/users') {
        res.write('<html>');
        res.write('<head>');
        res.write('<title>Enter Message</title>');
        res.write('</head>');

        res.write('<body>');
        res.write('<h2>Our users are:</h2>')
        // List of users
        res.write('<ul>');
        // Read file
        let users = fs.readFileSync('./public/other/users_prove01.txt').toString().split('\n');

        // Write file to html
        for (var user of users) {
            // console.log(users);
            res.write('<li>' + user + '</li>');
            // console.log(user);
        }
        res.write('</ul>');

        res.write('<h3>That\'s all folks!</h3>');

        res.write('<a href="/">Back to the main page</a>')

        res.write('</body>');
        res.write('</html>');
        return res.end();
    };

    if (url === '/create-user' && method === 'POST') {
        
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const username = parsedBody.split('=')[1];
            fs.appendFile('./public/other/users_prove01.txt', '\n' + username, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/users');
                return res.end();
            });
        });
    }
};

// Export: using just the filename "routes" will use the proper function in this case
module.exports = requestHandler;