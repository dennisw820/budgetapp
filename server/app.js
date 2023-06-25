const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const db = require('./.config/db.js');
// const expenseRouter = require('./API/v1/src/routes/expenseRouter.js');

const app = express();
// Configure dotenv
require('dotenv').config();
db.connect();
db.query('SELECT amount from transactions', function (error, results, fields) {
    if (error) throw error;
    console.log(`The solution is: ${results}`);
  });

app.set('view engine', 'ejs');
app.set('views', '../client/views')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

// Routes
// app.use('/expenses', expenseRouter);

    // Home
app.get('/', (req, res) => {
    res.render('index.ejs');
});

    // Expenses
app.get('/expenses', (req, res) => {
    res.render('expenses.ejs')
});

    // Income
app.get('/income', (req, res) => {
    res.render('income.ejs');
});

    // Savings
app.get('/savings', (req, res) => {
    res.render('savings.ejs');
});

    // ATM
app.get('/find-atm', (req, res) => {
    res.render('find-atm.ejs');
});

    // ATM Locations
app.get('/atm-map', (req, res) => {
    res.render('atm-map.ejs');
});
app.post('/', () => {

});

    // Report Issue
app.get('/report-issue', (req, res) => {
    res.render('report-error.ejs');
});

    // 404
app.get('/404', (req, res) => {
    res.render('404.ejs');
});

    // Login
app.get('/login', (req, res) => {
    res.render('login.ejs');
});
app.post('/', () => {
    
});

    // Logout
app.get('/logout', (req, res) => {
    res.write('You have been successfully logged out.')
});
app.post('/', () => {

});

    // User Registration
app.get('/signup', (req, res) => {
    res.render('registration.ejs');
});
app.post('/', () => {
    
});

    // Profile
app.get('/profile', (req, res) => {
    res.render('profile.ejs');
});
app.post('/', () => {
    
});

    // Forgot Password
app.get('/forgot-password', (req, res) => {
    res.render('forgot-password.ejs');
});
app.post('/', () => {

});

    // Password-reset
app.get('/forgot-password', (req, res) => {
    res.render('forgot-password.ejs');
});
app.post('/', () => {
    
});

app.listen(process.env.PORT || 3300, () => {
    console.log(`Server running on port ${process.env.PORT}.`);
});