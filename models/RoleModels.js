import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Role = db.define(
    //memberikan nama models dengan nama user secara default, jika tidak memberikan tablename maka akan menjadi nama jamak
    "Role",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    role_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desription: {
        
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    tableName: "role",
}
);

export default Role