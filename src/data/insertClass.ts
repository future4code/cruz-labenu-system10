import { connection } from "../index"

export const insertClass = async (
    id: number,
    name: string,
    start_date: Date,
    end_date: Date,
    module: number
): Promise <void> => {
    await connection.raw(`
        INSERT INTO class (id, name, start_date, end_date, module)
        VALUES (${id}, "${name}", "${start_date}", "${end_date}", ${module});
    `)
};