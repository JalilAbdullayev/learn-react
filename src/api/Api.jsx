import './Api.css';
import {Header} from "./components/Header.jsx";
import searchImages from "./data.js";
import {useState} from "react";
import {ImageList} from "./components/ImageList.jsx";

const Api = () => {
    const [images, setImages] = useState([]);
    const handleSubmit = async(term) => {
        const result = await searchImages(term);
        setImages(result);
    };

    return (
        <main className="container my-6">
            <Header search={handleSubmit}/>
            <ImageList imagesPlaceholder={images}/>
        </main>
    );
};

export default Api;