// testMongo.js
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("happytools");
    const collections = await db.listCollections().toArray();
    console.log("Connected successfully. Collections:", collections.map(c => c.name));
  } catch (e) {
    console.error("Connection failed:", e);
  } finally {
    await client.close();
  }
}

run();
