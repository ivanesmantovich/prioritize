import { ColumnNumber } from "../types/ColumnNumber"
import { Dayjs } from "dayjs"

export interface ITodo {
    id: string,
    text: string,
    done: boolean,
    columnNumber: ColumnNumber,
    creationDate: Dayjs,
}