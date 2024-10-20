export const ImageItem = ({image}) => {
    return (
        <>
            <img src={image.urls.small} alt={image.alt_description} className='mb-3'/>
        </>
    );
};