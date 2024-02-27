const express = require("express");
const route = express.Router();
const db = require("../database/db");
const Sequelize = require("sequelize");
const { passwordCrypt } = require("../helpers");

//Créer un nouveau user
route.post("/", (req, res) => {
    db.user
        .findOne({
            where: { email: req.body.email },
        })
        .then(async (user) => {
            if (!user) {
                const passwordEncrypted = await passwordCrypt(req.body.password)
                db.user
                    .create({ ...req.body, password: passwordEncrypted })
                    .then((itemuser) => {
                        res.json({ user: itemuser });
                    })
                    .catch((err) => {
                        res.json(err);
                    });
            } else {
                res.json("Cette utilisateur existe déjà");
            }
        })
        .catch((err) => {
            res.json(err);
        });
});

//Modifier un user par id
route.put("/:id", (req, res) => {
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

//Rechercher tous les utilisateurs
route.get("/", (req, res) => {
    db.user
        .findAll()
        .then((users) => {
            res.json({ users: users });
        })
        .catch((err) => {
            res.json({ error: err });
        });
});

//Rechercher un utilisateur par id
route.get("/:id", (req, res) => {
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

//Supprimer un user par id
route.delete("/:id", (req, res) => {
    db.user
        .findOne({
            where: { id: req.params.id },
        })
        .then((user) => {
            if (!user) {
                res.json({
                    error: "Cette utilisateur existe déjà",
                });
            } else {
                user
                    .destroy()
                    .then(() => {
                        res.json({ status: "Utilisateur supprimer avec succès" });
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