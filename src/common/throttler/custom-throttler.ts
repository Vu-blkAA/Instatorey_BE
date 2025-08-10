import { HttpException, HttpStatus } from "@nestjs/common";
import { ThrottlerGuard, ThrottlerRequest } from "@nestjs/throttler";



export class CustomThrottlerGuard extends ThrottlerGuard {
    protected async handleRequest(requestProps: ThrottlerRequest): Promise<boolean> {
        try {
            return await super.handleRequest(requestProps);
        } catch (error) {
            throw new HttpException(`You have reached the maximum number of requests. Please try again in ${requestProps.ttl} seconds.`, HttpStatus.TOO_MANY_REQUESTS)
        }
    }
}