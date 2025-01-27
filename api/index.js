import express from "express";

const app= express()
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import commentRoute from './routes/comments.js'
import postRoutes from './routes/posts.js'
import likeRoute from './routes/likes.js'
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000", // Your frontend URL
  credentials: true, // Allow credentials
}));
app.use(cookieParser());








// multer middleware defined for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/social-media/public/upload');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() +  file.originalname);
  },
})

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single('file'), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

console.log("i am in index page")
app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/comments",commentRoute)
app.use("/api/posts",postRoutes)
app.use("/api/likes",likeRoute)


app.listen(8801, () => {
    console.log("API working");
    
})