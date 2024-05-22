const express = require("express");
const router = express.Router();
const BookController = require("../controller/BookController");
const multer = require("multer");
const upload = multer({ dest: "upload/" });
router.post("/book/create", upload.any(), (req, res) => {
  BookController.createBook(req, res);
});

router.get("/Book/list", (req, res) => {
  BookController.getAllBook(req, res);
});
router.get("/Book/byCourse", (req, res) => {
  BookController.getAllBookByCourse(req, res);
});
router.get("/Book/get", (req, res) => {
  BookController.getBooks(req, res);
});

router.delete("/Book/delete/:id", (req, res) => {
  BookController.deleteBook(req, res);
});
router.get("/Book/forEdit/:id", (req, res) => {
  BookController.getBookForEdit(req, res);
});
router.put("/Book/edit/:id", (req, res) => {
  BookController.BookEdit(req, res);
});
module.exports = router;
