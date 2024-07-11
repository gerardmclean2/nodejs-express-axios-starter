import axios, { AxiosResponse } from "axios";
import { DeliveryEmployeeRequest } from "../models/DeliveryEmployeeRequest";
import { DeliveryEmployeeResponse } from "../models/DeliveryEmployeeResponse";

export const createDeliveryEmployee = async (deliveryEmployee: DeliveryEmployeeRequest): Promise<Number> => {
    try{
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/delivery-employee", deliveryEmployee);

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error(e.response.data);
    }
}

export const getDeliveryEmployees = async (): Promise<DeliveryEmployeeResponse[]> => {
    try{
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/delivery-employee");

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get Delivery Employees');
    }
}