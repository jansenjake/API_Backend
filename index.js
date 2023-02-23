const express = require("express");
const cors = require("cors");
const app = express();
app.set("port", process.env.PORT || 8080);
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "At ease Soldier." });
});

app.listen(app.get("port"), () => {
  console.log(`Listening on this port: ${app.get("port")}`);
  console.log(`Press Ctrl+C to stop server.`);
});

const router = express.Router();

router.get('/', (req, res)=> {
  res.sendFile('Welcome');
});

router.get('/products', (req, res)=> {
  res.send('This is the products');
});

module.exports = router;


