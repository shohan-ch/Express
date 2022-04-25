import { Column as Col, CreatedAt, Model, Table, UpdatedAt } from "sequelize-typescript";


@Table({
    tableName:'speechs'
})
export class Speech extends Model{

    @Col
    name!:string

    @CreatedAt
    created_at!: Date 

    @UpdatedAt
    updated_at!: Date
}


