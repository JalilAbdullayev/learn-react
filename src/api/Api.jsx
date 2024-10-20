import {Header} from "./components/Header.jsx";
import searchImages from "./data.js";

const Api = () => {
    const handleSubmit = term => {
        searchImages(term);
    };
    return (
        <main className="container my-6">
            <Header search={handleSubmit}/>
        </main>
    );
};

export default Api;