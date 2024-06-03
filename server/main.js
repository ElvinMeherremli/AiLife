const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

//] schema
//? CASE
const caseSchema = new mongoose.Schema(
  {
    img: String,
    title: String,
    descr: String,
  },
  { timestamps: true }
);

//? Reviews
const reviewSchema = new mongoose.Schema(
  {
    img: String,
    name: String,
    profession: String,
    review: String,
  },
  { timestamps: true }
);

//] model
//? CASE
const caseModel = mongoose.model("case", caseSchema);

// ? Reviews
const reviewModel = mongoose.model("review", reviewSchema);

//] requests
//? CASES
app.get("/api/cases", async (req, res) => {
  const { title } = req.query;
  let cases;
  if (title) cases = await caseModel.find({ title: title });
  else cases = await caseModel.find();

  if (cases.length > 0) {
    res.status(200).send({
      message: "success",
      data: cases,
    });
  } else {
    res.status(204).send({
      message: "not found",
      data: null,
    });
  }
});
app.get("/api/cases/:id", async (req, res) => {
  const { id } = req.params;
  let cases;
  try {
    cases = await caseModel.findById(id);
  } catch (error) {
    res.send({ error: error });
  }

  if (cases) {
    res.status(200).send({
      message: "success",
      data: cases,
    });
  } else {
    res.status(204).status({
      message: "not found",
      data: null,
    });
  }
});
app.post("/api/cases", async (req, res) => {
  const Case = new caseModel(req.body);
  await Case.save();
  res.send(Case);
});
app.delete("/api/cases/:id", async (req, res) => {
  const { id } = req.params;
  let response;
  try {
    response = await caseModel.findByIdAndDelete(id);
  } catch (error) {
    res.send({
      message: "not found",
    });
  }
  if (response) {
    res.send({
      message: "deleted",
      response: response,
    });
  } else {
    res.send({
      message: "fatal error (doesnt deleted...)",
    });
  }
});
app.delete("/api/cases", async (req, res) => {
  let response;
  try {
    response = await caseModel.deleteMany({});
  } catch (error) {
    res.send({
      message: "error",
      error: error,
    });
  }

  if (response.deletedCount > 0) {
    res.send({
      message: "success",
      deletedCount: response.deletedCount,
    });
  } else {
    res.send({
      message: "no documents to delete",
    });
  }
});


// ? Reviews
app.get("/api/reviews", async (req, res) => {
  const { title } = req.query;
  let reviews;
  if (title) reviews = await reviewModel.find({ title: title });
  else reviews = await reviewModel.find();

  if (reviews.length > 0) {
    res.status(200).send({
      message: "success",
      data: reviews,
    });
  } else {
    res.status(204).send({
      message: "not found",
      data: null,
    });
  }
});
app.get("/api/reviews/:id", async (req, res) => {
  const { id } = req.params;
  let reviews;
  try {
    reviews = await reviewModel.findById(id);
  } catch (error) {
    res.send({ error: error });
  }

  if (reviews) {
    res.status(200).send({
      message: "success",
      data: reviews,
    });
  } else {
    res.status(204).status({
      message: "not found",
      data: null,
    });
  }
});
app.post("/api/reviews", async (req, res) => {
  const review = new reviewModel(req.body);
  await review.save();
  res.send(review);
});
app.delete("/api/reviews/:id", async (req, res) => {
  const { id } = req.params;
  let response;
  try {
    response = await reviewModel.findByIdAndDelete(id);
  } catch (error) {
    res.send({
      message: "not found",
    });
  }
  if (response) {
    res.send({
      message: "deleted",
      response: response,
    });
  } else {
    res.send({
      message: "fatal error (doesnt deleted...)",
    });
  }
});
app.delete("/api/reviews", async (req, res) => {
  let response;
  try {
    response = await reviewModel.deleteMany({});
  } catch (error) {
    res.send({
      message: "error",
      error: error,
    });
  }

  if (response.deletedCount > 0) {
    res.send({
      message: "success",
      deletedCount: response.deletedCount,
    });
  } else {
    res.send({
      message: "no documents to delete",
    });
  }
});

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then((res) => console.log("connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log(
    "Server listening on Port",
    process.env.PORT,
    "\n\nhttp://localhost:1212/api/cases",
    "\nhttp://localhost:1212/api/reviews \n"
  );
});
