const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const indexRouter = require('./routes/index');
const tabuadaRouter = require('./routes/tabuada')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));


app.use('/', indexRouter);
app.use('/tabuadas', tabuadaRouter);




app.listen(PORT, () => {
    console.log('server running');
})