require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect.js')
const exphbs = require('express-handlebars');

const bodyParser = require('body-parser')
const app = express();

const router = require('./routes/index.js')

app.use(express.json());

const staticDir = express.static(__dirname+'/public');
app.use('/public', staticDir);
// app.use(express.static('public'));

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    authLayout: 'authLayout'
  }));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use('/',router)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();