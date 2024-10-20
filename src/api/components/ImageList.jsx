import {ImageItem} from "./ImageItem.jsx";

export const ImageList = ({imagesPlaceholder}) => {
    return (
        <section className="list">
            {imagesPlaceholder.map(image => {
                return <ImageItem image={image} key={image.id}/>;
            })}
        </section>
    );
};