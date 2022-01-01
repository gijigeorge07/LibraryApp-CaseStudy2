const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://userone:userone@ictakfiles.zx59a.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  title: String,
  image: String,
  about: String,
});

const authordata = mongoose.model("authordata", AuthorSchema);

module.exports = authordata;
