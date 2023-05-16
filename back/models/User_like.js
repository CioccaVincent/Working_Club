module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        'user_like', {
            like: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false
            },
            quantite: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            }
            
        }, {
            timestamps: true,
            underscored: true
        }
    )
}