// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const mongoose = require('../Backend/models/connection');

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// // Set up multer to store images in the 'uploads' folder
// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   }
// });

// const upload = multer({ storage: storage });

// // Create a schema for the image model
// const imageSchema = new mongoose.Schema({
//   description: String,
//   image: String
// });

// const Image = mongoose.model('Image', imageSchema);


// // POST a new image
// app.post('/images', upload.single('image'), async (req, res) => {
//   try {
//     const image = new Image({
//       description: req.body.description,
//       image: `/uploads/${req.file.filename}`
//     });
//     await image.save();
//     res.status(201).json(image);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error creating image');
//   }
// });

// // Serve the images folder as a static directory
// app.use('/uploads', express.static('uploads'));

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });