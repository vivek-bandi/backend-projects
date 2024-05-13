const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
var users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];
app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealtyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealtyKidneys = numberOfHealtyKidneys + 1;
    }
  }
  const numberOfUnhealtyKidneys = numberOfKidneys - numberOfHealtyKidneys;
  res.json({ numberOfKidneys, numberOfHealtyKidneys, numberOfUnhealtyKidneys });
});
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "Done!",
  });
});
app.delete("/", function (req, res) {
  if (isThereatleastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      msg: "Done!",
    });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys",
    });
  }
});
function isThereatleastOneUnhealthyKidney() {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      return true;
    }
  }
  return false;
}
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
