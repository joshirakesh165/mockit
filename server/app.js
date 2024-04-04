import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import defaultRouter from './src/routes/default.routes.js';

const app = express();
dotenv.config();

var corsOptions = {
  origin: "*"
}

app.use(cors(corsOptions));

// const SERVICE_PORT = process.env.SERVICE_PORT || 8000
const SERVICE_PORT = 8000


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(SERVICE_PORT, () => {
  console.log('server running on ', SERVICE_PORT)
});




try {
  app.use('/api/v1/', defaultRouter);
  app.use(express.static('client/dist'));
  app.use('/', (req, res) => res.sendFile('index.html', { root: "client/dist" }));

} catch (err) {
  console.log('error');
}















// const makeConnectionsReady = async () => {
//     try {
//         await createDBConnection();
//     } catch (e) {
//         let msg = e && e.message || "Not able to stablish connection with socket or db";
//     }

// }

// makeConnectionsReady();



// let schema = {
//     user: 'firstName',
//     dob: 'date',
//     age: 'number',
//     address: [
//         { firstAddress: { firstLine: 'string', secLine: 'string' } },
//         { secAddress: { firstLine: 'string', secLine: 'string' } }
//     ]
// }

// let data = generateJSONData(schema, 10);
// console.log(data[2].address);