// src/Components/DogModal.jsx
import React from 'react';

const DogModal = ({ isOpen, dogImage, dogOryginalImage, onClose, onFetchNewImage }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-2 rounded-lg w-1/3o p-5">
                <h2 className="text-lg font-bold dark:text-white text-black mb-5">Obrazek psa</h2>
                <img
                    src={dogImage || dogOryginalImage}
                    alt="Pies"
                    className="my-2 shadow-lg rounded-lg w-96 h-96 object-cover"
                />
                <div className="flex justify-between mt-5">
                    <button
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={onClose}
                    >
                        Zamknij
                    </button>
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={onFetchNewImage}
                    >
                        Losuj obrazek
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DogModal;