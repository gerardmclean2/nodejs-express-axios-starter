import express from "express";


export const getDeliveryEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('deliveryEmployeeForm.html');
}