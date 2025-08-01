import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";


@Injectable()
export class AWSS3Service {
    private readonly region: string;
    private readonly bucketName: string;
    private readonly accessKeyId: string;
    private readonly secretAccesKey: string;
    private readonly s3Client: S3Client;
    private readonly temporaryAssetsPath: string;
    private readonly logger = new Logger(AWSS3Service.name);

    constructor(private readonly configService: ConfigService) {
        this.region = this.configService.get('AWS_REGION');
        this.bucketName = this.configService.get('AWS_BUCKET_NAME');
        this.accessKeyId = this.configService.get('AWS_ACCESS_KEY_ID');
        this.secretAccesKey = this.configService.get('AWS_SECRET_ACCESS_KEY');
        this.temporaryAssetsPath = this.configService.get('AWS_TEMPORARY_BUCKET_NAME');

        this.s3Client = new S3Client({
            region: this.region,
            credentials: {
                accessKeyId: this.accessKeyId,
                secretAccessKey: this.secretAccesKey
            }
        })

        this.logger.log(`S3 service initialized for bucket ${this.bucketName} in region: ${this.region}`)
    }

    // async uploadFile(fileName: string, mimetype: string, fileBuffer: Buffer): Promise<string> {
    //     const uploadParams = {
    //         Bucket: this.bucketName,
    //         Body: fileBuffer,
    //         Key: fileName,
    //         ContentType: mimetype,
    //     }

    //     try {
    //         const command = new PutObjectCommand(uploadParams);
    //         await this.s3Client.send(command);
    //         const fileUrl = `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${fileName}`;
    //         return fileUrl;

    //     } catch (error) {
    //         this.logger.error(`Error uploading file ${fileName} to S3: ${error}`);
    //         throw new Error('Could not upload file to S3');
    //     }
    // }

    // async deleteFile(fileName: string): Promise<void> {
    //     const deleteParams = {
    //         Bucket: this.bucketName,
    //         Key: fileName,
    //     }

    //     try {
    //         const command = new DeleteObjectCommand(deleteParams);
    //         await this.s3Client.send(command);
    //         this.logger.log(`File ${fileName} deleted from S3`);
    //     } catch (error) {
    //         this.logger.error(`Error deleting file ${fileName} from S3: ${error}`);
    //         throw new Error('Could not delete file from S3');
    //     }
    // }

    async getPresignedUrl(file: Express.Multer.File): Promise<{path: string, uploadUrl: string}> {
        const {originalname, mimetype} = file;
        const temporaryAssetsPath = this.temporaryAssetsPath;

        const path = `${temporaryAssetsPath}/${Date.now()}-${originalname}`;

        const params = {
            Bucket: this.bucketName,
            Key: path,
            ContentType: mimetype,
        }

        const presignUrl = await getSignedUrl(this.s3Client, new PutObjectCommand(params), {
            expiresIn: 60 * 5,
        })

        return {
            path,
            uploadUrl: presignUrl,
        }
    }
}