// Dependencies;
// =============:
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Express;
// =============: - 
const PORT = process.env.PORT || 3000;
const app = express();
// - data parser;
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// - set static files in /public;
app.use(express.static("public"));

// Mongoose;
// =============: - Database Modeler/Validator;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
	useNewUrlParser: true
});

// Routes;
// =============:
app.use(require("./routes/Views.js"));

// Server Listener;
// =============: - Launch Server;
app.listen(PORT, () => {
	console.log(
		"==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
		PORT,
		PORT
	);
});
