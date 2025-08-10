import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { RefreshToken } from 'src/entities/refresh-token.entity';
import { LessThan, Repository } from 'typeorm';
@Injectable()
export class RefreshTokenService {
    private readonly logger = new Logger(RefreshTokenService.name);

    constructor(
        @InjectRepository(RefreshToken) private refreshTokenRepository: Repository<RefreshToken>,
    ) {}
    
    @Cron(CronExpression.EVERY_30_SECONDS)
    async handleClearExpiredRefreshTokens() {
        this.logger.debug('Clearing expired refresh tokens');

        try {
            const result = await this.refreshTokenRepository.delete([
                { revoked: true },
                { isExpired: true }, 
                { expiresAt: LessThan(new Date()) }
            ])

            this.logger.debug(`Cleared ${result.affected} expired refresh tokens`);
        } catch (error) {
            this.logger.error('Error clearing expired refresh tokens', error);
            throw error;
        }
    }
}
