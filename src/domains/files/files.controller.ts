import { Controller, Get, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AWSS3Service } from 'src/core/aws/s3.service';

@Controller('files')
export class FilesController {
  constructor(private readonly s3Service: AWSS3Service) {}

  @Get('get-presigned-url')
  @UseInterceptors(FileInterceptor('file'))
  async getPresignedUrl(@UploadedFile() file: Express.Multer.File): Promise<{path: string, uploadUrl: string}> {
    return this.s3Service.getPresignedUrl(file);
  }
}
