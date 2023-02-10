import express, { Request, Response } from "express";
import { HashTagGenerator } from "./HashTagGenrerator";
import cors from "cors";

const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

const PORT = process.env.PORT || 3001;

app.get("/", (req: Request, res: Response) => {
  res.json({ hashtagtypes: ["hastag"] });
});

//Route for the hashtag generator
app.post("/hashtaggenerator", (req: Request, res: Response) => {
  try {
    const caption = req.body.caption;

    const Result = HashTagGenerator(caption);

    return res.json({ hashtags: Result });
  } catch (e) {
    return res.status(400).send(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});
