module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        'user_role', {
            normal_user: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false
            },
            admin: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false
            }
            
        }, {
            timestamps: true,
            underscored: true
        }
    )
}