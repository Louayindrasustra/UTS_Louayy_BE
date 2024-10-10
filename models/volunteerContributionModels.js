import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const VolunteerContribution = db.define(
    //memberikan nama models dengan nama user secara default, jika tidak memberikan tablename maka akan menjadi nama jamak
    "VolunteerContribution",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    task_description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    tableName: "volunteerContribution",
}
);

export default VolunteerContribution