const express = require("express");
const https = require("https");
const bodyParser = require('body-parser');

const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + '/views');

app.use("/assets", express.static(__dirname + '/assets'));
app.use(bodyParser.json());

let mk64Response = null;
let mk64LastCall = 0;
let imageId = "banner";

app.post('/set-kart-id', async (req, res) => {
  const { kartId } = req.body;
  if (!kartId) {
    return res.status(400).send({ error: 'Kart ID is required' });
  }
  try {
    const apiRes = await fetchMk64(kartId);
    res.status(200).send({ data: apiRes.data });
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.post('/set-image-id', async (req, res) => {
  imageId = req.body.imageId;
});

app.get("/panel.html", async (_, res) =>
{
  const apiRes = await fetchMk64();
  res.render("panel.ejs", { data: apiRes.data, imageName: imageId, formatTime, numberToRank });
});

app.get("/config.html", async (_, res) =>
{
  res.render("config.ejs");
});

console.log(app.listen(8080, "localhost", 0));
console.log("Ready");

function formatTime(seconds) {
  // Calculate the minutes
  let minutes = Math.floor(seconds / 60);

  // Calculate the remaining seconds
  let remainingSeconds = seconds % 60;
  let fullSeconds = Math.floor(remainingSeconds);

  // Extract milliseconds from the remaining seconds
  let milliseconds = Math.round((remainingSeconds - fullSeconds) * 100);

  // Ensure two digits formatting
  let formattedMinutes = String(minutes).padStart(2, '0');
  let formattedSeconds = String(fullSeconds).padStart(2, '0');
  let formattedMilliseconds = String(milliseconds).padStart(2, '0');

  // Return the formatted string
  return `${formattedMinutes}'${formattedSeconds}"${formattedMilliseconds}`;
}

const numberToRank = (num) => {
  if (!num || Number.isNaN(num)) return "";

  let suffix;
  const digit0 = String(num).at(-1);
  const digit1 = String(num).at(-2) ?? "0";
  if (digit1 === "1" || digit0 === "0" || Number(digit0) > 3) {
    suffix = "th";
  } else if (digit0 === "1") {
    suffix = "st";
  } else if (digit0 === "2") {
    suffix = "nd";
  } else if (digit0 === "3") {
    suffix = "rd";
  }

  return `${num}${suffix}`;
}