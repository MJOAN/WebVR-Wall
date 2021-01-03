const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');
const cors = require('cors');
const routes = require("./server/routes");

// app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

app.use("/", routes);

// app.use(express.static(path.join(__dirname, 'build')));


async function main(){
    const uri = "mongodb+srv://MJOAN:MongoDB1!@cluster0.kxj4j.gcp.mongodb.net/webvr-wall?retryWrites=true&w=majority"

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
 
    try {
        await client.connect();
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
    console.log(`🌎  ==> API server listening on PORT ${PORT}!`);
});
