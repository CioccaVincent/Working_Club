module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        'user', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nom: {
                type: Sequelize.DataTypes.STRING(45),
                allowNull: false
            },
            prenom: {
                type: Sequelize.DataTypes.STRING(45),
                allowNull: false
            },
            email: {
                type: Sequelize.DataTypes.STRING(100),
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false
            }

        }, {
            timestamps: true,
            underscored: true
        }
    )
}