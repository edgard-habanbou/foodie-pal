const mongoose = require("mongoose");

const RolesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Role = mongoose.model("Role", RolesSchema);
async function insertPredefinedRoles() {
  try {
    const count = await Role.countDocuments();

    if (count === 0) {
      await Role.insertMany([
        {
          _id: "657f0445f4aaced6b5b8d7af",
          name: "Admin",
        },
        {
          _id: "657f052bf4aaced6b5b8d7b0",
          name: "User",
        },
      ]);
    }
  } catch (err) {}
}
insertPredefinedRoles();
module.exports = Role;
