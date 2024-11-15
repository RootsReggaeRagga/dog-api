import React, { useState, useEffect } from 'react';
import DogModal from './DogModal';

const DogItem = ({ dog }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dogImage, setDogImage] = useState('');
    const [dogOryginalImage, setOriginalDogImage] = useState('');

    const dogImageList = "https://dog.ceo/api/breed/" + dog + "/images/random"

    const fetchDogImage = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            setDogImage(data.message);
        } catch (error) {
            console.error('Błąd podczas pobierania obrazu:', error);
        }
    };
    const fetchOrignalDogImage = async () => {
        try {
            const response = await fetch(dogImageList);
            const data = await response.json();
            setOriginalDogImage(data.message);
        } catch (error) {
            console.error('Błąd podczas pobierania obrazu:', error);
        }
    }


    const handleButtonClick = () => {
        fetchDogImage();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        fetchOrignalDogImage();
    }, []);

    return (

        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10">
                <img class="w-36 h-36 mt-8 rounded-full shadow-lg object-cover" src={dogOryginalImage} alt="Bonnie image" />

                <div class="flex mt-4 md:mt-8">
                    <button onClick={handleButtonClick} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{dog}</button>
                </div>
            </div>


            <DogModal
                isOpen={isModalOpen}
                dogImage={dogImage}
                onClose={closeModal}
                onFetchNewImage={fetchDogImage}
            />
        </div>

    );
};

export default DogItem;