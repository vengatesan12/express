

const fs = require('fs')
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const port = 3000;
const moduleDetails = require('./models/module.model')
const rollDetails = require('./models/roll.model')
app.use(bodyparser.json())
//localhost:3000
var cors = require('cors')
app.use(cors())
app.get('/', (req, res) => res.send("vengatesan.com"))

app.listen(port, () => console.log("server is running"))


mongoose.connect("mongodb://127.0.0.1:27017/module");


mongoose.connection.on('connected', () => {
	console.log('connected');
});

mongoose.connection.on('error', (err) => {

	if (err) {
		console.log('error');
	}
	console.log('connected to databae mongodb' + err);
});


app.get('/moduledata', (req, res, next) => {
	moduleDetails.find(function (err, data) {
		if (err) {
			console.log(err);
			res.json({ Responsecode: "500", msg: "Failed  to get" + err });
		} else {
			res.json({ Responsecode: "200", msg: " get Successfully", result: data });
		}
	});
});



app.get('/moduledata/:id', (req, res, next) => {
	moduleDetails.find({ _id: req.params.id }, function (err, data) {

		if (err) {
			console.log(err);
			res.json({ Responsecode: "500", msg: "Failed  to get" + err });
		} else {
			res.json({ Responsecode: "200", msg: " get Successfully", result: data });
		}
	});
});


app.post('/moduleAdd', (req, res, next) => {
	console.log(req.body, "module");
	var Modules = new moduleDetails({
		moduleCode: req.body.moduleCode,
		moduleName: req.body.moduleName

	});
	Modules.save((err, Modules) => {
		if (err) {
			console.log(err);
			res.json({ Responsecode: "500", msg: "Failed  to post" + err });
		} else {
			res.json({ Responsecode: "200", msg: " post Successfully", result: Modules });
		}
	});

});



app.put('/moduledata/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const moduleCode = req.body;
		const options = { new: true };

		const result = await moduleDetails.findByIdAndUpdate(
			id, moduleCode, options,
		)

		res.json({ Responsecode: "200", msg: " put Successfully", result: result });
	}
	catch (error) {
		res.status(400).json({ message: error.message })
	}
})





app.delete('/moduledata/:id', (req, res, next) => {
	console.log(req.params.id);
	moduleDetails.remove({ _id: req.params.id }, function (err, result) {
		if (err) {
			res.json({ Responsecode: "500", msg: "Failed  to delete" + err });
		} else {
			res.json({ Responsecode: "200", msg: " Delete Successfully" });
		}
	});
});








app.get('/rolldata', (req, res, next) => {
	rollDetails.find(function (err, data) {
		if (err) {
			console.log(err);
			res.json({ Responsecode: "500", msg: "Failed  to get" + err });
		} else {
			res.json({ Responsecode: "200", msg: " get Successfully", result: data });
		}
	});
});


app.get('/rolldata/:id', (req, res, next) => {
	rollDetails.find({ _id: req.params.id }, function (err, data) {
		if (err) {
			console.log(err);
			res.json({ Responsecode: "500", msg: "Failed  to get" + err });
		} else {
			res.json({ Responsecode: "200", msg: " get Successfully", result: data });
		}
	});
});






app.post('/rollAdd', (req, res, next) => {
	console.log(req.body, "roll");
	var rolls = new rollDetails({
		rollCode: req.body.rollCode,
		rollName: req.body.rollName

	});
	rolls.save((err, rolls) => {
		if (err) {
			console.log(err);
			res.json({ Responsecode: "500", msg: "Failed  to post" + err });
		} else {
			res.json({ Responsecode: "200", msg: " post Successfully", result: rolls });
		}
	});

});




app.put('/rolldata/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const rollCode = req.body;
		const options = { new: true };

		const result = await rollDetails.findByIdAndUpdate(
			id, rollCode, options,
		)

		res.json({ Responsecode: "200", msg: " put Successfully", result: result });
	}
	catch (error) {
		res.status(400).json({ message: error.message })
	}
})



app.delete('/rolldata/:id', (req, res, next) => {
	console.log(req.params.id);
	rollDetails.remove({ _id: req.params.id }, function (err, result) {
		if (err) {
			res.json({ Responsecode: "500", msg: "Failed  to delete" + err });
		} else {
			res.json({ Responsecode: "200", msg: " Delete Successfully" });
		}
	});
});