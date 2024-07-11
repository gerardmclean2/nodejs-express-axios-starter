import express from "express";
import { createSalesEmployee } from "../services/SalesEmployeeService";

export const getSalesEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('salesEmployeeForm.html');
}

export const postSalesEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const id = await createSalesEmployee(req.body);
        console.log("Sales Employee Created");
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('salesEmployeeForm.html', req.body);
    }
}