import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";


export class CustomResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const response = context.switchToHttp().getResponse(); 
        const statusCode = response.statusCode;

        return next.handle().pipe(map((data) => ({
            message: statusCode >= 400 ? 'Error' : 'Success', 
            status: statusCode,
            data,
        })));
    }
}