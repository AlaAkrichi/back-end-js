const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const cors = require("cors")
const dbConnection = require("./config/DataBase")
const port =  process.env.PORT || 5000
const app = express()
const bodyParser = require('body-parser');
const clientRoute = require("./routes/ClientRoutes")
const demandesRoute = require("./routes/DemandeRoutes")
const factureRoutes = require("./routes/FactureRoutes")
const abonnementRoutes = require("./routes/AbonnementRoutes")
const roleRoutes = require("./routes/RoleRoutes")
const userRoutes = require("./routes/UserRoutes")
const reclamationRoutes= require("./routes/ReclamationRoutes")
const applicationRoutes= require("./routes/ApplicationRoutes")
const platformRoutes = require("./routes/PlatformRoutes")
const machineRoutes = require("./routes/MachinesRoute")
const cpuRoutes = require("./routes/CpuRoutes")
const stockageRoutes = require("./routes/StockageRoutes")
const ramRoutes = require("./routes/RamRoutes")
const authenificationRoutes = require("./routes/AuthentificationRoutes")
dbConnection()
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.use("/api/clients",clientRoute)
app.use("/api/demandes",demandesRoute)
app.use("/api/factures",factureRoutes)
app.use("/api/abonements",abonnementRoutes)
app.use("/api/roles",roleRoutes)
app.use("/api/users",userRoutes)
app.use("/api/reclamations",reclamationRoutes)
app.use("/api/applications",applicationRoutes)
app.use("/api/platforms",platformRoutes)
app.use("/api/machines",machineRoutes)
app.use("/api/cpus",cpuRoutes)
app.use("/api/stockages",stockageRoutes)
app.use("/api/rams",ramRoutes)
app.use("/api/login",authenificationRoutes)


app.listen(port,()=>{
    console.log(`Serveur started on port ${port}`)
})

