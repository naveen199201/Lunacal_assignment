import React, { useState } from 'react';

const ImageSlider = () => {
    const initialImages = [
        'https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg',
        'https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg',
    ];
    const [images, setImages] = useState(initialImages);
    console.log(images)
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 3 : prevIndex - 1));
    };

    const slideRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3 >= images.length ? 0 : prevIndex + 1));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImages((prevImages) => [...prevImages, e.target.result]);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className='image-slider min-h-24 relative max-w-xl mx-auto'>

                <button
                    onClick={slideLeft}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 text-gray-600 rounded-full p- hover:bg-gray-300"
                >
                    &#8592;
                </button>

                <div className="flex justify-center mb-4">
                    <label htmlFor="imageUpload" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                        Add Image
                    </label>
                    <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                </div>

                {/* Forward Button */}
                <button
                    onClick={slideRight}
                    className="absolute top-1/2  transform -translate-y-1/2 bg-gray-200 text-gray-600 rounded-full p-2 hover:bg-gray-300"
                >
                    &#8594;      </button>

            </div>
            <div className="relative max-w-xl mx-auto">
                {/* Images container */}
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Slide ${index}`} className="w-1/3 p-2" />
                        ))}
                    </div>
                </div>

                {/* Backward Button */}

            </div>
        </div>
    );
};

export default ImageSlider;
