import axios, { AxiosResponse } from "axios";
import { SalesEmployeeRequest } from "../models/SalesEmployeeRequest";

export const createSalesEmployee = async (salesEmployee: SalesEmployeeRequest): Promise<Number> => {
    try{
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/sales-employee", salesEmployee);

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error(e.response.data);
    }
}
