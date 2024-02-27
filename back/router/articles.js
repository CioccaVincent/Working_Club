const express = require("express");
const route = express.Router();
const db = require("../database/db");
const Sequelize = require("sequelize");

//Créer un nouveau poste
route.post('/', async (req, res) => {
    const { texte, imageUrl } = req.body;
        
    db.article.create({ texte, imageUrl })
        .then(() => {
            res.json("Poste créer avec succès");
        })
        .catch((err) => {
            res.json(err);
        });
  });

//Modifier un poste
route.put('/:id', async (req, res) => {

    db.article.findOne({
        where: { id: req.params.id },
    })
    .then((article) => {
        article.update(req.body)
        .then(() => {
            res.json("Poste mis à jour avec succès");
        })
        .catch((err) => {
            res.json(err);
        });
    })
    .catch((err) => {
        res.json(err);
    });
});

//Supprimer un poste
route.delete('/:id', async (req, res) => {
    db.article.findOne({
        where: { id: req.params.id },
    })
    .then((article) => {
        article.destroy()        
        .then(() => {
            res.json("Poste supprimer avec succès");
        })
        .catch((err) => {
            res.json(err);
        });
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = route;