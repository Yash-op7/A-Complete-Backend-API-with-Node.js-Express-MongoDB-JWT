const express = require("express");
const { identifier } = require("../middlewares/identification");
const router = express.Router();
const postController = require('../controllers/postController');

// gets all posts
router.get("/", identifier, postController.getAll);

// gets one post by id
router.get("/:id", identifier, postController.getById);

// creates a new post
router.post("/", identifier, postController.create);

// updates an existing post
router.post("/:id", identifier, postController.update);

// deletes a post by id
router.delete("/:id", identifier, postController.delete);

module.exports = router;