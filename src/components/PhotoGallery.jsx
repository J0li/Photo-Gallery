import React, {useState} from 'react';
import './PhotoGallery.css';

function PhotoGallery() {
    const [images, setImages] = useState([
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
    ]);

    const addImage = () => {
        setImages([...images, 'https://via.placeholder.com/150']);
    }

    return(
        <div className='gallery'>
            <h2>Photo Gallery</h2>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                {images.map((image, index) =>(
                    <img key={index} src={image} alt={'image ${index + 1}'} style={{margin:'5px'}} />
                ))}
            </div>
            <button className='btn-add' onClick={addImage} style={{marginTop:'10px'}}>Add photo</button>
        </div>
    )
}

export default PhotoGallery;