const Sequelize = require('sequelize');
const sequelize = require("../koneksi.js");

const note = sequelize.define(
  "note",
  {
    // attributes

    content: {
      type: Sequelize.TEXT,

      allowNull: false,
    },
  },
  {
    // options
  }
);
// note.sync({ force: true }); // enable if u want to run migration
module.exports = note;
