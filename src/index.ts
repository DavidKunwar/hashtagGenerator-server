import express, { Request, Response } from 'express'
import { HashTagGenerator } from './HashTagGenrerator';

const app = express();
app.use(express.urlencoded())
app.use(express.json())

const PORT = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) =>  { res.json({ hashtagtypes: ['hastag']})} );

//Route for the hashtag generator
app.get('/hashtaggenerator', (req: Request, res: Response) =>  { 
    
    try {
        const caption = req.body.caption

        const Result = HashTagGenerator(caption)

        return res.json({ hashtags: Result })


    }
    catch(e){
        return res.status(400).send('error')
    }
    
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});