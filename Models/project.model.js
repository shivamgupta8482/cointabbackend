const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  gender: String,
  name: Object,
  location: Object,
  email: String,
  login: Object,
  dob: Object,
  registered: Object,
  phone: String,
  cell: String,
  id: Object,
  picture: Object,
  nat: String

});

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = ProjectModel;
