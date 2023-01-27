import ColumnContainer from "./ColumnContainer";
import SearchBar from "./SearchBar";
import './AppContainer.css'
import { useState } from "react";
import { ITodo } from "../interfaces/ITodo";
import { nanoid } from 'nanoid'
import { ColumnNumber } from "../types/ColumnNumber";
import dayjs from "dayjs";

export default function AppContainer() {
    const [todos, setTodos] = useState<ITodo[]>([]);
    
    // TODO: npm remove --save nanoid
    function handleAddTodo(text: string, columnNumber: ColumnNumber): void {
        setTodos([
            ...todos,
            {
                id: nanoid(),
                text: text,
                done: false,
                columnNumber: columnNumber,
                creationDate: dayjs()
            }
        ])
    }

    return (
        <div className="app-container start-animation bg-white h-full w-full p-5">
            <SearchBar />
            <div className="flex flex-row items-start">
                <ColumnContainer />
                <ColumnContainer />
                <ColumnContainer />
            </div>
        </div>
    )
}