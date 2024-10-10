import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Event = db.define(
    //memberikan nama models dengan nama user secara default, jika tidak memberikan tablename maka akan menjadi nama jamak
    "Event",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        
        type: DataTypes.DATE,
        allowNull: false,
    },
    location: {
        
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    tableName: "event",
}
);

export default Event