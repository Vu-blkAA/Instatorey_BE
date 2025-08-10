import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { ThrottlerException } from "@nestjs/throttler";
import { Response } from "express";


@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
   catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();
        let message = 'Internal server error';

        if(exception instanceof ThrottlerException) 
            message = exception.message;
        else {
            const exceptionResponse = exception.getResponse();

            if(typeof exceptionResponse === 'object' && 'message' in exceptionResponse) 
                message = exceptionResponse.message as string || 'Internal server error';
            else
                message = exceptionResponse as string || 'Internal server error';
        }

        response
            .status(status)
            .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                message,
            })
   }
}