const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/contact', (req, res) => {
    res.render('contact', { error: null, name: '', email: '', message: '' });
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    
   
    if (!name || !email || !message) {
        return res.render('contact', { error: 'All fields are required.', name, email, message });
    }

    res.render('thankYou', { name, email, message });
});




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
