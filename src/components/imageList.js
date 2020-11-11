import React from 'react';
import ImageCard from './imageCard';
import './imageList.css';

const ImageList = props => {

    const images = props.image.map((img) => {
        return <ImageCard key={img.id} image={img} />
    })


    return <div className="image-list">{images}</div>
}

export default ImageList;