const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './src/config.env'});
console.log(process.env.PORT);
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(con => {
  console.log('DB connection successful');
})


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
