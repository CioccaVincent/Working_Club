const express = require("express");
const route = express.Router();
const db = require("../database/db");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

route.get("/getAll", (req, res) => {
    db.user
        .findAll()
        .then((users) => {
            res.json({ users: users });
        })
        .catch((err) => {
            res.json({ error: err });
        });
});

route.post("/newuser", (req, res) => {
    db.user
        .findOne({
            where: { email: req.body.email },
        })
        .then((user) => {
            if (!user) {
                db.user
                    .create(req.body)
                    .then((itemuser) => {
                        res.json({ user: itemuser });
                    })
                    .catch((err) => {
                        res.json(err);
                    });
            } else {
                res.json("user déjà utiliser dans db");
            }
        })
        .catch((err) => {
            res.json(err);
        });
});
route.put("/update/:id", (req, res) => {
    db.user
        .findOne({
            where: { id: req.params.id },
        })
        .then((user) => {
            user
                .update(req.body)
                .then(() => {
                    db.user
                        .findOne({
                            where: { id: req.params.id },
                        })
                        .then((newuser) => {
                            res.json({
                                user: newuser,
                            });
                        })
                        .catch((err) => {
                            res.json(err);
                        });
                })
                .catch((err) => {
                    res.json(err);
                });
        })
        .catch((err) => {
            res.json(err);
        });
});

route.get("/getuser/:id", (req, res) => {
    db.user
        .findOne({
            where: { id: req.params.id },
        })
        .then((user) => {
            res.json({ user: user });
        })
        .catch((err) => {
            res.json(err);
        });
});

route.delete("/delete/:id", (req, res) => {
    db.user
        .findOne({
            where: { id: req.params.id },
        })
        .then((user) => {
            if (!user) {
                res.json({
                    error: "this user not existe in your base",
                });
            } else {
                user
                    .destroy()
                    .then(() => {
                        res.json({ status: "user deleted" });
                    })
                    .catch((err) => {
                        res.json(err);
                    });
            }
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = route;