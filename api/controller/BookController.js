const Book = require("../model/BookSchema");
const cloudinary = require("cloudinary");
const createBook = async (req, res) => {
  try {
    console.log("ghjk");

    console.log(req.body, "req.body");
    console.log(req.files, "req.file");
    cloudinary.config({
      cloud_name: "ddkftpgzy",
      api_key: "279392953531995",
      api_secret: "9wYvB_-IwcU7ki8YS0WY3H9hFqw",
    });

    const uploadResult = await cloudinary.uploader.upload(req.files[0].path);
    console.log(uploadResult);
    let book = new Book(req.body);
    book.bookImage = uploadResult.url;
    await book.save();

    res.status(200).send({
      success: true,
      message: "book created..",
      data: book,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      success: false,
      message: "errror..",
      data: "",
    });
  }
};
module.exports = {
  createBook,
};
