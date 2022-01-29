import express from 'express'
import path from 'path'
import cors from 'cors'
import ip from 'ip'

const app = express()
const address = ip.address()

app.use(cors({origin: '*'}))

app.use(express.static(path.join(__dirname, "../build")))

app.get('/*', function (req, res){
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.listen(9090, address, ()=>{
  console.log(`http://${address}:9090`)
})