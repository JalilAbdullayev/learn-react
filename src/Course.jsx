export const Course = ({title, image, description}) => {
    return (
        <div className='column'>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={image} alt="" style={{objectFit: 'cover'}}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">
                                {title}
                            </p>
                        </div>
                    </div>

                    <div className="content">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}