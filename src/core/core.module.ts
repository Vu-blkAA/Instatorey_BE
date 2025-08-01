import { Global, Module } from "@nestjs/common";
import { AWSS3Service } from "./aws/s3.service";

@Global()
@Module({
    providers: [AWSS3Service],
    exports: [AWSS3Service]
})

export class CoreModule {}