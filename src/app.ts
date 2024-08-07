import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import session from "express-session";

import { getAllDatabases } from "./controllers/TestController";
import { getAllDeliveryEmployees, getDeliveryEmployeeForm, getSingleDeliveryEmployee, postDeliveryEmployeeForm } from "./controllers/DeliveryEmployeeController";
import { getAllSalesEmployees } from "./controllers/SalesEmployeeController";
import { getSalesEmployeeForm, postSalesEmployeeForm } from "./controllers/SalesEmployeeController";

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(session({ secret: 'SUPER_SECRET', cookie: { maxAge: 28800000 }}));

declare module "express-session" {
  interface SessionData {
    token: string;
  }
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.get('/', getAllDatabases);

app.get('/delivery-employee-form', getDeliveryEmployeeForm);
app.post('/delivery-employee-form', postDeliveryEmployeeForm);
app.get('/delivery-employee', getAllDeliveryEmployees);

app.get('/delivery-employee/:id', getSingleDeliveryEmployee);
app.get('/sales-employee', getAllSalesEmployees);
app.get('/sales-employee-form', getSalesEmployeeForm);
app.post('/sales-employee-form', postSalesEmployeeForm);