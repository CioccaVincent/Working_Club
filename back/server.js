const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/Article", require("./router/article"));
// app.use("/Role", require("./router/role"));
// app.use("/User_commentaire", require("./router/user_commentaire"));
// app.use("/User_like", require("./router/user_like"));
// app.use("/User_role", require("./router/user_role"));
app.use("/users", require("./router/users"));


app.listen(port, function() {
    console.log("server start on " + port);
});