import { connection } from "../index"

export const insertStudent = async (
    id: number,
    name: string,
    email: string,
    birthdate: Date,
    class_id: number
): Promise <void> => {
    await connection.raw(`
        INSERT INTO student (id, name, email, birthdate, mission_id)
        VALUES (${id}, "${name}", "${email}", "${birthdate}", ${class_id});
    `)
};