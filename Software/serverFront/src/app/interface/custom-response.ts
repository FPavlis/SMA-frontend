import { Status } from "../enum/status.enum";
import { Server } from "./server";

export interface CustomResponse{
    timeStamp : Date,
    statusCode: number,
    status: Status,
    reason: string,
    message: string,
    developerMessage: string,
    data: {servers?: Server[], server?: Server};
}