const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const requestLogger = require("./middlewares/requestLogger");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/evaluations", require("./routes/evaluationRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use(errorHandler);
app.use(requestLogger);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
