const express = require("express");
const app = express();
const router = require("./routes");
const port = 3000;
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", router);

// app.use(session({
//     secret: 'hehehe',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       secure: false,
//       sameSite: true
//     }
//   }));

// endpoint Login.Controler.apagitu dpt 2 proses ,, get sama post
// endpoint Register.Controller.apalahitu dpt get sama post juga

// app.use((req, res, next) => {
//     console.log(req.session)
//     if (!req.session.userId) {
//       const error = 'Please login first!';
//       res.redirect(`/login?error=${error}`);
//     }
//     else {
//       next();
//     }
//   })

/// tambahan app.get/post lain dengan endpoint nya

app.listen(port, () => {
  console.log("Running on port", port);
});
