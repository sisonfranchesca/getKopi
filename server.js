const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. SERVE STATIC FILES (CSS, Images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// 2. HTTP GET ROUTES - Serving static HTML pages
app.get('/', (req, res) => {
    console.log('Rendering home.html');
    res.sendFile(path.join(__dirname, 'public', 'pages', 'home.html'));
});

app.get('/menu', (req, res) => {
    console.log('Rendering menu.html');
    res.sendFile(path.join(__dirname, 'public', 'pages', 'menu.html'));
});

app.get('/about', (req, res) => {
    console.log('Rendering about.html');
    res.sendFile(path.join(__dirname, 'public', 'pages', 'about.html'));
});

app.get('/contact', (req, res) => {
    console.log('Rendering contact.html');
    res.sendFile(path.join(__dirname, 'public', 'pages', 'contactUs.html'));
});

// 3. GET METHOD WITH QUERY PARAMETERS (handling form submission or simple query parameters)
// Example route: http://localhost:3000/process_get?fname=Franchesca&lname=Sison
app.get('/process_get', (req, res) => {
    console.log('Processed GET Request');
    const response = {
        first_name: req.query.fname,
        last_name: req.query.lname
    };
    res.send(JSON.stringify(response));
});

// 4. 404 PAGE NOT FOUND HANDLER
app.use((req, res) => {
    console.log(`404 Page Not Found: ${req.originalUrl}`);
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});