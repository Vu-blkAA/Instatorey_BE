import { MigrationInterface, QueryRunner } from "typeorm";

export class AddLikeConstraint1753687138100 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE likes
            ADD CONSTRAINT chk_one_of_two_not_full
            CHECK (
                (post_id IS NOT NULL AND comment_id IS NULL) OR
                (post_id IS NULL AND comment_id IS NOT NULL)
            );
            `);

        await queryRunner.query(`
            CREATE UNIQUE INDEX idx_unique_like_post on likes (user_id, post_id) WHERE post_id IS NOT NULL;
        `);

        await queryRunner.query(`
            CREATE UNIQUE INDEX idx_unique_like_comment on likes (user_id, comment_id) where comment_id IS NOT NULL;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX idx_unique_like_post`)
        await queryRunner.query(`DROP INDEX idx_unique_like_comment`)
        await queryRunner.query(`ALTER TABLE likes DROP CONSTRAINT chk_one_of_two_not_full`)
    }

}
