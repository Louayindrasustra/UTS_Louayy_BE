import db from "../utils/connection.js";
import Volunteer from "./VolunteerModels.js";
import VolunteerContribution from "./volunteerContributionModels.js";
import Role from "./RoleModels.js";
import Event from "./EventModels.js";
import Organization from "./OrganizationModels.js";

await db.sync({force: true})

await Volunteer.sync()
await VolunteerContribution.sync()
await Role.sync()
await Event.sync()
await Organization.sync()
