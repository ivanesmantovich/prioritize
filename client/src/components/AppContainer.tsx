import ColumnContainer from "./ColumnContainer";
import SearchBar from "./SearchBar";
import './AppContainer.css'

export default function AppContainer() {
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