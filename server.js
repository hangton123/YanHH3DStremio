const express = require("express");

const app = express();
const PORT = process.env.PORT || 7000;

const manifest = {
  id: "community.yanhh3d",
  version: "1.0.0",
  name: "YanHH3D",
  description: "YanHH3D Stremio Addon",
  resources: [
    "catalog",
    "meta",
    "stream"
  ],
  types: [
    "movie",
    "series"
  ],
  catalogs: [
    {
      type: "series",
      id: "yanhh3d",
      name: "YanHH3D"
    }
  ]
};

app.get("/manifest.json", (req, res) => {
  res.json(manifest);
});

app.listen(PORT, () => {
  console.log(`YanHH3D Stremio addon running on port ${PORT}`);
});
