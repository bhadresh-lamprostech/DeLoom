const { Database } = require("@tableland/sdk");
const { Wallet, getDefaultProvider } = require("ethers");
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
const app = express();
const port = 3002;
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// const privateKey = process.env.PRIVATE_KEY;
const privateKey =
  "9be733bc5526347f994a33c964ebcf278bdf0036c9daf4587808657ce23296b9";

const wallet = new Wallet(privateKey);

const provider = getDefaultProvider("https://rpc-mumbai.maticvigil.com"); // Update with your desired provider URL
const signer = wallet.connect(provider);

// Connect to the database
const db = new Database({ signer });

const prefix = "d_loom_personal";

const insertprefix = "d_loom_userdata_80001_6773";
// const workspace_prefix = "d_loom_workspace_80001_6862";
const workspace_prefix = "d_loom_workspace_80001_6922";
const content_prefix = "d_loom_videos_80001_6864";
const personal_prefix = "d_loom_personal_80001_6904";

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/create", async (req, res) => {
  console.log("i am here");
  try {
    const { meta: create } = await db
      .prepare(
        `CREATE TABLE ${workspace_prefix} (id integer primary key, name text, workspacelogo text, creatorname text, creatoraddress text, member1 text, member2 text, member3 text, member4 text, member5 text);`
      )
      .run();
    console.log("i am");
    res.json({ tableName: create.txn.name });
  } catch (error) {
    console.error("Error creating table:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//------------------------------------------------------------------------------------User APIs------------------------------------------------------------------------------//

app.post("/insertuserdata", async (req, res) => {
  console.log(req.body);
  try {
    const { meta: insert } = await db
      .prepare(
        `INSERT INTO ${insertprefix} (id, firstname, lastname, username, email, logocid, address) VALUES (?, ?, ?, ?, ?, ?, ?)`
      )
      .bind(
        req.body.id,
        req.body.firstname,
        req.body.lastname,
        req.body.username,
        req.body.email,
        req.body.logocid,
        req.body.address
      )
      .run();
    console.log("test");
    await insert.txn.wait();
    res.json({ success: true });
  } catch (error) {
    console.error("Error inserting row:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/readdata", async (req, res) => {
  try {
    console.log("serching...");
    const { results } = await db
      .prepare(
        `SELECT * FROM ${insertprefix} WHERE address = "${req.query.address}";`
      )
      .all();
    console.log(results);
    res.json(results);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//-------------------------------------------------------------------------------Workspace APIs-------------------------------------------------------------------------//

app.post("/insertworkspacedata", async (req, res) => {
  console.log(req.body);
  try {
    const { meta: insert } = await db
      .prepare(
        `INSERT INTO ${workspace_prefix} (id, name, workspaceLogo, creatorName, creatorAddress, member1, member2, member3, member4, member5) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .bind(
        req.body.id,
        req.body.name,
        req.body.workspaceLogo,
        req.body.creatorName,
        req.body.creatorAddress,
        req.body.member1,
        req.body.member2,
        req.body.member3,
        req.body.member4,
        req.body.member5
      )
      .run();
    console.log("test");
    await insert.txn.wait();
    res.json({ success: true });
  } catch (error) {
    console.error("Error inserting row:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/readworkspacedata", async (req, res) => {
  try {
    console.log("serching...");
    const { results } = await db
      .prepare(
        `SELECT * FROM ${workspace_prefix} WHERE creatoraddress = "${req.query.creatoraddress}";`
      )
      .all();
    console.log(results);
    res.json(results);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//------------------------------------------------------------------------------- Video Content-------------------------------------------------------------------------------//
app.post("/insertvideodata", async (req, res) => {
  console.log(req.body);
  try {
    const { meta: insert } = await db
      .prepare(
        `INSERT INTO ${content_prefix} (id, creator_address, video_name, video_desc, workspace_name, content_cid) VALUES (?, ?, ?, ?, ?, ?)`
      )
      .bind(
        req.body.id,
        req.body.creator_address,
        req.body.video_name,
        req.body.video_desc,
        req.body.workspace_name,
        req.body.content_cid
      )
      .run();
    console.log("test");
    await insert.txn.wait();
    res.json({ success: true });
  } catch (error) {
    console.error("Error inserting row:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/readvideodata", async (req, res) => {
  try {
    console.log("serching...");
    const { results } = await db
      .prepare(
        `SELECT * FROM ${content_prefix} WHERE creator_address = "${req.query.creatorAddress}";`
      )
      .all();
    console.log(results);
    res.json(results);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
//-------------------------------------------------------------------------------personalcontentAPIs----------------------------------------------------------------------------//
app.post("/insertpersonal", async (req, res) => {
  console.log(req.body);
  try {
    const { meta: insert } = await db
      .prepare(
        `INSERT INTO ${personal_prefix} (id, creator_address, video_name, video_desc, content_cid) VALUES (?, ?, ?, ?, ?)`
      )
      .bind(
        req.body.id,
        req.body.creator_address,
        req.body.video_name,
        req.body.video_desc,

        req.body.content_cid
      )
      .run();
    console.log("test");
    await insert.txn.wait();
    res.json({ success: true });
  } catch (error) {
    console.error("Error inserting row:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/readpersonaldata", async (req, res) => {
  try {
    console.log("serching...");
    const { results } = await db
      .prepare(
        `SELECT * FROM ${personal_prefix} WHERE creator_address="${req.query.creator_address}";`
      )
      .all();
    console.log(results);
    res.json(results);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//-------------------------------------------------------------------------------Access Control origin------------------------------------------------------------------------//

app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).end();
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
