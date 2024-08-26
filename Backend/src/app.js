import express from "express"
import cors from "cors"
const app = express()
import dotenv from "dotenv"
dotenv.config({
    path: "./.env"
})




app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

//common middlewares
app.use(express.json())

//import routes
import healthCheckRouter from "./routes/healthCheck.routes.js"
import signupRouter from "./routes/signup.routes.js"
import signinRouter from "./routes/signin.routes.js"
import formRouter from "./routes/form.routes.js"
app.use('/api/v1/healthCheck', healthCheckRouter)
app.use('/register', signupRouter)
app.use('/login', signinRouter)
app.use('/form', formRouter)
export {app}