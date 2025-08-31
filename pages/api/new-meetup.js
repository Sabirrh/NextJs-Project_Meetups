// /api/new-meetup
import {MongoClient} from "mongodb";
async function handler(req,res){
    if(req.method === 'POST'){
        const data = req.body;
        //store data in database
       const client = await  MongoClient.connect(process.env.MONGODB_URI);
       const db = client.db();
       const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data); 
        console.log(result);
        client.close();
        res.status(201).json({message:'Meetup created!'});
    }
}


export default handler;