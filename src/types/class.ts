  
import { student } from "./student";
import { teacher } from "./teacher";

export enum SHIFTS {
   INTEGRAL = "INTEGRAL",
   NOTURNA = "NOTURNA"
}

export type Class = {
   id: string,
   name: string,
   startDate: string,
   endDate: string
   teachers: teacher[],
   students: student[]
   module: number,
   shift: SHIFTS
}