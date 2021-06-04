import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import dotenv from "dotenv"
import knex from "knex"
import { createStudent } from './endpoints/createStudent'
import { createClass } from './endpoints/createClass'
import { createTeacher } from './endpoints/createTeacher'
import { getStudentAgeById } from './endpoints/getStudentAgeById'




const app: Express = express()
app.use(express.json())
app.use(cors())



dotenv.config()

export const connection = knex({
  client: "mysql",
  connection: {
     host: process.env.DB_HOST,
     port: 3306,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME
  }
})

export default connection


app.get("/student/:id", getStudentAgeById);
app.post("/class/create", createClass);
app.post("/student/create", createStudent);
app.post("/teacher/create", createTeacher);

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})
