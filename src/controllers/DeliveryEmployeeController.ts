import express from "express";
import { createDeliveryEmployee, getDeliveryEmployees, getDeliveryEmployeeByID } from "../services/DeliveryEmployee";


export const getDeliveryEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('deliveryEmployeeForm.html');
}

export const postDeliveryEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const id = await createDeliveryEmployee(req.body);
        console.log("Delivery Employee Created");
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('deliveryEmployeeForm.html', req.body);
    }
}

export const getSingleDeliveryEmployee = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('deliveryEmployeeDetail.html', { product: await getDeliveryEmployeeByID(req.params.id) });
 }

export const getAllDeliveryEmployees = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('deliveryEmployeeList.html', {deliveryEmployees: await getDeliveryEmployees() });
}