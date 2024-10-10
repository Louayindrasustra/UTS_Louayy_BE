import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Organization = db.define(
    //memberikan nama models dengan nama user secara default, jika tidak memberikan tablename maka akan menjadi nama jamak
    "Organization",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    alamat: {
        
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    tableName: "organization",
}
);

export default Organization