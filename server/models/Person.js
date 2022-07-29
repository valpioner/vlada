const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please add firstname"],
  },
  surname: {
    type: String,
    required: [true, "Please add surname"],
  },
  patronymic: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  gender: {
    type: Number,
    min: 1,
    max: 2,
    required: [true, "Please add gender"],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  links: {
    wiki: {
      type: String,
      match: [
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
        "Not valid Wiki url",
      ],
    },
    youtube: {
      type: String,
      match: [
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1Ppacka,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
        "Not valid YouTube url",
      ],
    },
  },
});

module.exports = mongoose.model("Person", PersonSchema);
