// Dependencies;
// =============:
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Express;
// =============: -
const PORT = process.env.PORT || 3000;
const app = express();
// - "morgan" server logger;
app.use(logger("dev"));
// - Data Parsing;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// - Static Directory;
app.use(express.static("public"));

// Mongoose;
// =============: - Database Modeler/Validator;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
	useNewUrlParser: true
});

// Routes;
// =============: - View html; Create, Read, Update, Delete;
app.use(require("./routes/view.js"));
app.use(require("./routes/crud.js"));

// Server Listener;
// =============: - Launch Server;
app.listen(PORT, () => {
	console.log(
		"==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
		PORT,
		PORT
	);
});
