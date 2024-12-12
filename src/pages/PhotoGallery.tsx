import React from 'react';

const photos = [
    { src: '/images/photo1.jpg', alt: 'Photo 1' },
    { src: '/images/photo2.jpg', alt: 'Photo 2' },
    { src: '/images/photo3.jpg', alt: 'Photo 3' },
    { src: '/images/photo4.jpg', alt: 'Photo 4' },

];

const PhotoGallery: React.FC = () => (
    <section id="gallery" className="gallery-section">
        <h1 className="gallery-title">Photo Gallery</h1>
        <div className="photo-grid">
            {photos.map((photo, index) => (
                <div key={index} className="photo-container">
                    <img src={photo.src} alt={photo.alt} className="photo" />
                </div>
            ))}
        </div>
    </section>
);

export default PhotoGallery;
