import { Injectable, UploadedFile } from '@nestjs/common';
import { AWSS3Service } from 'src/core/aws/s3.service';

@Injectable()
export class FilesService {
  constructor(private readonly s3Service: AWSS3Service) {}
}
