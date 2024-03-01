const app = require('./index')
require("dotenv").config();


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
  })