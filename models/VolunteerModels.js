import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import VolunteerContribution from "./volunteerContributionModels.js";
import Organization from "./OrganizationModels.js";
import Event from "./EventModels.js";
import Role from "./RoleModels.js";

const Volunteer = db.define(
    //memberikan nama models dengan nama user secara default, jika tidak memberikan tablename maka akan menjadi nama jamak
    "Volunteer",
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    tableName: "volunteer",
}
);

export default Volunteer

Volunteer.hasMany(VolunteerContribution, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

VolunteerContribution.belongsTo(Volunteer, {
    foreignKey: "VolunteerId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Organization.hasMany(Event, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Event.belongsTo(Organization, {
    foreignKey: "OrganizationId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Event.hasMany(VolunteerContribution, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

VolunteerContribution.belongsTo(Event, {
    foreignKey: "EventId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Role.hasMany(VolunteerContribution, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

VolunteerContribution.belongsTo(Role, {
    foreignKey: "RoleId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})