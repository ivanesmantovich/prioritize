import ColumnContainer from "./ColumnContainer";

export default function AppContainer() {
    return (
        <div className="items-start bg-white flex flex-row h-full w-full p-5">
            <ColumnContainer />
            <ColumnContainer />
            <ColumnContainer />
        </div>
    )
}