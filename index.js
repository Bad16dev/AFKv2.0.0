const express = require("express")
const app = express();

app.use(express.static('public'))

const PORT = process.env.PORT | 8000

app.listen(PORT, () => console.log(`Sever running in ${PORT}`))

const afk = require('afkbybadro');
