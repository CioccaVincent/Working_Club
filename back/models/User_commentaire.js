module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        'user_commentaire', {
            texte: {
                type: Sequelize.DataTypes.STRING(255),
                allowNull: false
            }
            
        }, {
            timestamps: true,
            underscored: true
        }
    )
}