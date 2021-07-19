const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { sendMail } = require("./Utils/emailSender");
const { eMessage } = require("./Utils/emailTemplate");

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/views"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("sever listening on port 4000");
});

app.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    if (!name && !email && !subject && !message)
      return res.json("All fileds are required");

    await sendMail({
      name,
      email,
      subject,
      message: await eMessage(name, email, subject, message),
    });
    res.status(201).json({ message: "Email sent" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Email not sent" });
  }
});
