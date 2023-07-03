const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
const PORT = 4000;

const uri =
  "mongodb+srv://it20252090:12345@cluster0.47lehc1.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const TodoRoute = require("./routes");
app.use("/api/todo", TodoRoute);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is up and running on port: ${PORT}`);
  } else {
    console.log("Server Connection Error ", err);
  }
});
