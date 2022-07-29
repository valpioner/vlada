// People CRUD

const express = require("express");
const {
  getPeople,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

const Person = require("../models/Person");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

// router.use(protect); // anything below will use this middleware instead of passing it to each one.
// router.use(authorize("admin"));

router
  .route("/")
  .get(advancedResults(Person), getPeople)
  .post(protect, authorize("admin"), createPerson);

router
  .route("/:id")
  .get(getPerson)
  .put(protect, authorize("admin"), updatePerson)
  .delete(protect, authorize("admin"), deletePerson);

module.exports = router;
