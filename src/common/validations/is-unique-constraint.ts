import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { DataSource } from "typeorm";

interface IsUniqueOptions {
    tableName: string;
    columnName: string;
}


@ValidatorConstraint({ name: 'IsUniqueConstraint', async: true })
@Injectable()
export class IsUniqueConstraint implements ValidatorConstraintInterface {
    constructor(private readonly dataSource: DataSource) {}

    async validate(value: string, arg: ValidationArguments) {
        const [entity, property] = arg.constraints;

        const repository = this.dataSource.getRepository(entity);

        const result = await repository.findOne({
            where: {
                [property]: value,
            }
        });

        return !result;
    }

    defaultMessage(arg: ValidationArguments) {
        return `${arg.property} must be unique`;
    }
}

export function IsUnique(options?: IsUniqueOptions, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'IsUnique',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [options.tableName, options.columnName],
            validator: IsUniqueConstraint,
        });
    };
}