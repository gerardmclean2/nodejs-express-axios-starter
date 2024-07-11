import axios, { AxiosResponse } from "axios";
import { SalesEmployeeRequest } from "../models/SalesEmployeeRequest";
import { SalesEmployeeResponse } from "../models/SalesEmployeeResponse";

export const createSalesEmployee = async (salesEmployee: SalesEmployeeRequest): Promise<Number> => {
    try{
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/sales-employee", salesEmployee);

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error(e.response.data);
    }
}

export const getSalesEmployees = async (): Promise<SalesEmployeeResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/sales-employee");
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get Sales Employees');
    }
}
