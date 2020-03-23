var mongoose = require('mongoose');
mongoose.set('debug', true);
//mongoose.connect('mongodb://localhost/todo-api');

mongoose.connect("mongodb+srv://SINGHHR:hello123@cluster0-ucnr1.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});
mongoose.set("useFindAndModify", false);

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
