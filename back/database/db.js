const Sequelize = require("sequelize");

const db = {};
//conextion avec PHPMyAdmin
const dbinfo = new Sequelize("workingclub", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    pool: {
        max: 5,
        min: 0,
    },
});


//on appel toutes no tables
db.user = require("../models/User")(dbinfo, Sequelize);
db.article = require("../models/Article")(dbinfo, Sequelize);
db.role = require("../models/Role")(dbinfo, Sequelize);
db.user_commentaire = require("../models/User_commentaire")(dbinfo, Sequelize);
db.user_like = require("../models/User_like")(dbinfo, Sequelize);
db.user_role = require("../models/User_role")(dbinfo, Sequelize);

// on instore les relation entre nos tables
db.user.hasMany(db.article, { foreignKey: "userId" });

db.user.belongsToMany(db.article, {
    through: "user_like",
    foreignKey: "userId",
});
db.article.belongsToMany(db.user, {
    through: "user_like",
    foreignKey: "articleId",
});

db.user.belongsToMany(db.article, {
    through: "user_commentaire",
    foreignKey: "userId",
});
db.article.belongsToMany(db.user, {
    through: "user_commentaire",
    foreignKey: "articleId",
});

db.user.belongsToMany(db.role, {
    through: "user_role",
    foreignKey: "userId",
});
db.role.belongsToMany(db.user, {
    through: "user_role",
    foreignKey: "articleId",
});


db.dbinfo = dbinfo;
db.Sequelize = Sequelize;

// dbinfo.sync({ force: true });   //envoie tous les models sur PHPMyAdmin (le faire une seul fois)
module.exports = db