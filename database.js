//import mongoose from "mongoose";
//import config from "./config";

//(async () => {
  //try {
    //const db = await mongoose.connect('mongodb+srv://fbs619:<Chacha1xd>@cluster0.ernhq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
      //useFindAndModify: false,
      //useCreateIndex: true,
    //});
    //console.log("Mongodb is connected to", db.connection.host);
  //} catch (error) {
    //console.error(error);
  //}
//})(); viejo metodo 

const mongoose = require('mongoose');
mongoose.connect(
`mongodb+srv://fbs619:fbs12345@cluster0.ernhq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
{
useNewUrlParser: true,
useUnifiedTopology: true
}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
console.log("Connected successfully");
});

