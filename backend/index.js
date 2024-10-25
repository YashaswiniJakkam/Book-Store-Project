import express from 'express';
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app= express();
app.use(express.json()); 


app.get('/',(request,response)=>{
console.log(request)
return response.status(234).send('Welcome to MERN Stack Bookstore Application')
});

app.use(cors());

// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-type'],
//     })
// )

app.use('/books',booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connected to database');
        app.listen(PORT,()=>{
            console.log(`App is listening to the port:${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    })