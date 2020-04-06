const express = require("express"); 
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

require("dotenv").config();

const PORT = process.env.PORT || 8080;
const CLIENT_DISTRIBUTION_DIRECTORY = path.resolve(__dirname, "./build");
const isDev = process.env.NODE_ENV !== "production";

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Priority serve any static files.
  app.use(express.static(CLIENT_DISTRIBUTION_DIRECTORY));

  app.post("/api/v1", (req, res) => {
    console.log("heeey",__dirname)
    var data = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
      }
    });

    var mailOptions = {
      from: data.email,
      to: "shirazipatricia@gmail.com",
      subject: "HumboldtToGoRequest",
      html: `<p>${data.name}</p>
            <p>${data.email}</p>
            <p>${data.message}</p>`
    };

    transporter.sendMail(mailOptions, (error, response) => {
      if (error) {
        res.send(error);
      } else {
        res.send("Success");
      }
      transporter.close();
    });
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(CLIENT_DISTRIBUTION_DIRECTORY, "index.html"));
  });

  app.listen(PORT, () => {
    console.log(
      `Node ${
        isDev ? "dev server" : "cluster worker " + process.pid
      }: listening on port ${PORT}`
    );
  });
}
