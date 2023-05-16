module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        'article', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            texte: {
                type: Sequelize.DataTypes.STRING(255),
                allowNull: false
            },
            image: {
                type: Sequelize.DataTypes.BLOB('long'),
                allowNull: true
            }
            
        }, {
            timestamps: true,
            underscored: true
        }
    )
}