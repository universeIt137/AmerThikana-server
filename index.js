const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware  
app.use(cors());
app.use(express.json());




const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const sendNotificationEmail = require('./emilUtility');
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
    const aboutUsCollection = client.db('AmerThikana').collection('about-us');
    const scheduleCollection = client.db('AmerThikana').collection('schedules');
    const whyOurProjectBest = client.db('AmerThikana').collection('why-best-projects');
    const websiteContentCollection = client.db('AmerThikana').collection('website-content-real-states');
    const clientReviewCollection = client.db('AmerThikana').collection('client-review');
    const csrCollection = client.db('AmerThikana').collection('csr');
    const bannerCollection = client.db('AmerThikana').collection('banner');
    const certificationCollection = client.db('AmerThikana').collection('certification');
    const offerCollection = client.db('AmerThikana').collection('offer');
    const careerCollection = client.db('AmerThikana').collection('career');


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
    });

    app.delete("/about-us/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await aboutUsCollection.deleteOne(query);
      res.send(result);
    });

    app.get("/about-us/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await aboutUsCollection.findOne(query);
      res.send(result);
    });

    app.get("/about-us", async (req, res) => {
      const result = await aboutUsCollection.find().toArray();
      res.send(result);
    });


    // schedule related api

    app.post('/schedule', async (req, res) => {
      const data = req.body;


      const result = await scheduleCollection.insertOne({ data, status: false });
      res.send(result);
    });

    app.put("/schedule/:id", async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedInfo = {
        $set: {
          ...data
        }
      };
      const result = await scheduleCollection.updateOne(query, updatedInfo, options);
      res.send(result);
    });

    app.delete("/schedule/:id", async function (req, res) {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await scheduleCollection.deleteOne(query);
      res.send(result);
    });

    app.get("/schedule/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await scheduleCollection.findOne(query);
      res.send(result);
    });

    app.get("/schedule", async (req, res) => {
      const result = await scheduleCollection.find().toArray();
      res.send(result);
    });

    app.put("/schedule-status-update/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: { status: true }, // Use $set to update the status field
      };

      const result = await scheduleCollection.updateOne(query, updateDoc, options);
      res.send(result);
    });



    // why our project best related api

    app.post("/best-project", async (req, res) => {
      let reqBody = req.body;
      let result = await whyOurProjectBest.insertOne(reqBody);
      res.send(result);
    });

    app.put("/best-project/:id", async (req, res) => {
      let data = req.body;
      let id = req.params.id;
      let query = { _id: new ObjectId(id) };
      let options = { upsert: true };
      let updatedInfo = {
        $set: {
          ...data
        }
      };
      let result = await whyOurProjectBest.updateOne(query, updatedInfo, options);
      res.send(result);
    }); //

    app.delete("/best-project/:id", async (req, res) => {
      let id = req.params.id;
      let query = { _id: new ObjectId(id) };
      let result = await whyOurProjectBest.deleteOne(query);
      res.send(result);
    }
    );

    app.get("/best-project/:id", async (req, res) => {
      let id = req.params.id;
      let query = { _id: new ObjectId(id) };
      let result = await whyOurProjectBest.findOne(query);
      res.send(result);
    });

    app.get("/best-project", async (req, res) => {
      let result = await whyOurProjectBest.find().toArray();
      res.send(result);
    });

    // website content related api

    app.post("/website-content", async (req, res) => {
      let reqBody = req.body;
      let result = await websiteContentCollection.insertOne(reqBody);
      res.send(result);
    });

    app.put("/website-content/:id", async (req, res) => {
      let data = req.body;
      let id = req.params.id;
      let query = { _id: new ObjectId(id) };
      let options = { upsert: true };
      let updatedInfo = {
        $set: {
          ...data
        }
      };
      let result = await websiteContentCollection.updateOne(query, updatedInfo, options);
      res.send(result);
    });

    app.delete("/website-content/:id", async (req, res) => {
      let id = req.params.id;
      let query = { _id: new ObjectId(id) };
      let result = await websiteContentCollection.deleteOne(query);
      res.send(result);
    });

    app.get("/website-content/:id", async (req, res) => {
      let id = req.params.id;
      let query = { _id: new ObjectId(id) };
      let result = await websiteContentCollection.findOne(query);
      res.send(result);
    });

    app.get("/website-content", async (req, res) => {
      let result = await websiteContentCollection.find().toArray();
      res.send(result);
    });

    // client reviewed related api

    app.post("/client-review", async (req, res) => {
      let reqBody = req.body;
      let result = await clientReviewCollection.insertOne(reqBody);
      res.send(result);
    });

    app.put("/client-review/:id", async (req, res) => {
      let data = req.body;
      let id = req.params.id;
      let query = { _id: new ObjectId(id) };
      let options = { upsert: true };
      let updatedInfo = {
        $set: {
          ...data
        }
      };
      let result = await clientReviewCollection.updateOne(query, updatedInfo, options);
      res.send(result);
    });

    app.delete("/client-review/:id", async (req, res) => {
      let id = req.params.id;
      let query = { _id: new ObjectId(id) };
      let result = await clientReviewCollection.deleteOne(query);
      res.send(result);
    });

    app.get("/client-review/:id", async (req, res) => {
      let id = req.params.id;
      let query = { _id: new ObjectId(id) };
      let result = await clientReviewCollection.findOne(query);
      res.send(result);
    });

    app.get("/client-review", async (req, res) => {
      let result = await clientReviewCollection.find().toArray();
      res.send(result);
    });


    // CSR related api

    app.post('/csr', async (req, res) => {
      const data = req.body;
      const result = await csrCollection.insertOne(data);
      res.send(result);
    })

    app.get('/csr', async (req, res) => {
      const result = await csrCollection.find().toArray();
      res.send(result);
    })

    app.get('/csr/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await csrCollection.findOne(query);
      res.send(result);
    })

    app.put('/csr/:id', async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedInfo = {
        $set: {
          ...data
        }
      }
      const result = await csrCollection.updateOne(query, updatedInfo, options);
      res.send(result);
    })

    app.delete('/csr/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await csrCollection.deleteOne(query);
      res.send(result);
    })


     // banner related api

     app.post('/banner', async (req, res) => {
      const data = req.body;
      const result = await bannerCollection.insertOne(data);
      res.send(result);
    });

    app.get("/banner/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bannerCollection.findOne(query);
      res.send(result);
    });

    app.get("/banner", async (req, res) => {
      const result = await bannerCollection.find().toArray();
      res.send(result);
    });

    app.put("/banner/:id", async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedInfo = {
        $set: {
          ...data
        }
      };
      const result = await bannerCollection.updateOne(query, updatedInfo, options);
      res.send(result);
    });


    app.delete("/banner/:id",async(req,res)=>{
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bannerCollection.deleteOne(query);
      res.send(result);
    });

    

    // certification related api 
    app.post('/certificate', async (req, res) => {
      const data = req.body;
      const result = await certificationCollection.insertOne(data);
      res.send(result);
    })

    app.get('/certificate', async (req, res) => {
      const result = await certificationCollection.find().toArray();
      res.send(result);
    })

    app.get('/certificate/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await certificationCollection.findOne(query);
      res.send(result);
    })

    app.put('/certificate/:id', async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedInfo = {
        $set: {
          ...data
        }
      }

      const result = await certificationCollection.updateOne(query, updatedInfo, options);
      res.send(result);
    })


    app.delete('/certificate/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await certificationCollection.deleteOne(query);
      res.send(result);
    });


    // contact related api

    app.post("/contact", async function(req,res){
        let data = req.body;
          userEmail = await sendNotificationEmail(data);
          if(userEmail){
            return res.send("email send");
          }else{
            res.send("email send fail ");
          }
    })

    // offer related api 
    app.post('/offer', async (req, res) => {
      const data = req.body;
      const result = await offerCollection.insertOne(data);
      res.send(result);
    })

    app.get('/offer', async (req, res) => {
      const result = await offerCollection.find().toArray();
      res.send(result);
    })

    app.get('/offer/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await offerCollection.findOne(query);
      res.send(result);
    })

    app.put('/offer/:id', async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedInfo = {
        $set: {
          ...data
        }
      }

      const result = await offerCollection.updateOne(query, updatedInfo, options);
      res.send(result);
    })


    app.delete('/offer/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await offerCollection.deleteOne(query);
      res.send(result);
    })


    // career related api

    app.post('/career', async (req, res) => {
      const data = req.body;
      const result = await careerCollection.insertOne(data);
      res.send(result);
    })

    app.get('/career', async (req, res) => {
      const result = await careerCollection.find().toArray();
      res.send(result);
    })

    app.get('/career/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await careerCollection.findOne(query);
      res.send(result);
    })

    app.put('/career/:id', async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedInfo = {
        $set: {
          ...data
        }
      }

      const result = await careerCollection.updateOne(query, updatedInfo, options);
      res.send(result);
    })


    app.delete('/career/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await careerCollection.deleteOne(query);
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