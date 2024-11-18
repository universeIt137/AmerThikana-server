const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware  
app.use(cors());
app.use(express.json());




const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.olinusx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server    (optional starting in v4.7)
    // await client.connect();

    const contentCollection = client.db('AmerThikana').collection('websiteContent');
    const chairmanCollection = client.db('AmerThikana').collection('chairman');
    const overviewCollection = client.db('AmerThikana').collection('overview');
    const featureCollection = client.db('AmerThikana').collection('feature');
    const aboutUsCollection = client.db('AmerThikana').collection('aboutUs');

    //website content
    app.post('/content', async (req, res) => {
      const data = req.body;
      const result = await contentCollection.insertOne(data);
      res.send(result);
    })

    app.get('/content', async (req, res) => {
      const result = await contentCollection.find().toArray();

      res.send(result);
    })

    app.get('/content/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await contentCollection.findOne(query);
      res.send(result);
    })

    app.put('/content/:id', async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedInfo = {
        $set: {
          ...data
        }
      }

      const result = await contentCollection.updateOne(query, updatedInfo, options);
      res.send(result);
    })

    app.delete('/content/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await contentCollection.deleteOne(query);
      res.send(result);
    })


    // chairman speech related api 
    app.post('/chairman', async (req, res) => {
      const data = req.body;
      const result = await chairmanCollection.insertOne(data);
      res.send(result);
    })

    app.get('/chairman', async (req, res) => {
      const result = await chairmanCollection.find().toArray();
      res.send(result);
    })

    app.get('/chairman/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await chairmanCollection.findOne(query);
      res.send(result);
    })

    app.put('/chairman/:id', async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedInfo = {
        $set: {
          ...data
        }
      }

      const result = await chairmanCollection.updateOne(query, updatedInfo, options);
      res.send(result);
    })

    app.delete('/chairman/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await chairmanCollection.deleteOne(query);
      res.send(result);
    })

    // project overview api 
    app.post('/overview', async (req, res) => {
      const data = req.body;
      const result = await overviewCollection.insertOne(data);
      res.send(result);
    })

    app.get('/overview', async (req, res) => {
      const result = await overviewCollection.find().toArray();
      res.send(result);
    })


    app.get('/overview/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await overviewCollection.findOne(query);
      res.send(result);
    })


    app.put('/overview/:id', async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedInfo = {
        $set: {
          ...data
        }
      }

      const result = await overviewCollection.updateOne(query, updatedInfo, options);
      res.send(result);
    })


    app.delete('/overview/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await overviewCollection.deleteOne(query);
      res.send(result);
    })

    // project feature related api
    app.post('/feature', async (req, res) => {
      const data = req.body;
      const result = await featureCollection.insertOne(data);
      res.send(result);
    })

    app.get('/feature', async (req, res) => {
      const result = await featureCollection.find().toArray();
      res.send(result);
    })


    app.get('/feature/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await featureCollection.findOne(query);
      res.send(result);
    })


    app.put('/feature/:id', async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedInfo = {
        $set: {
          ...data
        }
      }

      const result = await featureCollection.updateOne(query, updatedInfo, options);
      res.send(result);
    })

    app.delete('/feature/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await featureCollection.deleteOne(query);
      res.send(result);
    })

    // about us related api

    app.post("/about-us", async (req, res) => {
      try {
        let reqBody = req.body;
        let data = await aboutUsCollection.insertOne(reqBody);
        return res.send(data);
      } catch (error) {
        return res.send(error);
      }
    });

    app.put('/about-us/:id', async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedInfo = {
        $set: {
          ...data
        }
      }

      const result = await aboutUsCollection.updateOne(query, updatedInfo, options);
      res.send(result);
    })

    app.delete("/about-us/:id",async (req,res)=>{
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await aboutUsCollection.deleteOne(query);
      res.send(result);
    })






















    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('server is ok');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});