const express = require("express");
const route = express.Router();
const db = require("../database/db");
const Sequelize = require("sequelize");

//Créer un nouveau poste
route.post('/', async (req, res) => {
    db.article
        const { texte, image } = req.body;
        
    try {
        const newPost = new Post({ texte, image });
    await newPost.save();
        
        res.json("Poste crée avec succès");
        } catch (error) {
        res.json("Une erreur est survenue");
        }
  });

//Modifier un poste
route.put('/:id', async (req, res) => {
    db.article
    const {texte, image} = req.body;
    
    try {
    const post = await Post.findByIdAndUpdate(req.params.id, {texte, image}, { new: true });
    
    if (!post) {
        return res.json("Poste mis à jour");
    }
    
    res.send(post);
    } catch (error) {
    res.json("Une erreur est survenue");
    }
});

//Supprimer un poste
route.delete('/posts/:id', async (req, res) => {
try {
    const post = await Post.findByIdAndDelete(req.params.id);
    
    if (!post) {
    return res.json("Poste supprimer");
    }
    
    res.send(post);
} catch (error) {
    res.json("Une erreur est survenue");
}
});

// route.get("/", (req, res) => {
//     db.article
//         .findAll()
//         .then((articles) => {
//             res.json({ articles: articles });
//         })
//         .catch((err) => {
//             res.json({ error: err });
//         });
// });

// route.put("/:id", (req, res) => {
//     db.user
//         .findOne({
//             where: { id: req.params.id },
//         })
//         .then((user) => {
//             user
//                 .update(req.body)
//                 .then(() => {
//                     db.user
//                         .findOne({
//                             where: { id: req.params.id },
//                         })
//                         .then((newuser) => {
//                             res.json({
//                                 user: newuser,
//                             });
//                         })
//                         .catch((err) => {
//                             res.json(err);
//                         });
//                 })
//                 .catch((err) => {
//                     res.json(err);
//                 });
//         })
//         .catch((err) => {
//             res.json(err);
//         });
// });

// route.get("/:id", (req, res) => {
//     db.user
//         .findOne({
//             where: { id: req.params.id },
//         })
//         .then((user) => {
//             res.json({ user: user });
//         })
//         .catch((err) => {
//             res.json(err);
//         });
// });

// route.delete("/:id", (req, res) => {
//     db.user
//         .findOne({
//             where: { id: req.params.id },
//         })
//         .then((user) => {
//             if (!user) {
//                 res.json({
//                     error: "this user not existe in your base",
//                 });
//             } else {
//                 user
//                     .destroy()
//                     .then(() => {
//                         res.json({ status: "user deleted" });
//                     })
//                     .catch((err) => {
//                         res.json(err);
//                     });
//             }
//         })
//         .catch((err) => {
//             res.json(err);
//         });
// });

module.exports = route;