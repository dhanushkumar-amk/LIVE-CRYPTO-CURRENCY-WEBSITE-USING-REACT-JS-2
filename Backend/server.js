import express from 'express'
import cors from 'cors'
import { ConnectDB } from './Config/db.js';
import  userRouter from './Routes/UserRoutes.js';
import 'dotenv/config';

/* app config */
const app = express();
const port = 4000;


/* middleware */

app.use(express.json())
app.use(cors())

/* db connection */
ConnectDB();

/** Initilize the routes */
app.use('/api/user', userRouter);

app.get("/", (req, res) => {
    res.send("Working")    
})


/* server listen */
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);  
})