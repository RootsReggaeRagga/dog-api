// src/DogsList.js
import React, { useEffect, useState } from 'react';
import DogItem from './DogItem'

const DogsList = () => {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const response = await fetch('https://dog.ceo/api/breeds/list/all');
                const data = await response.json();
                setDogs(Object.keys(data.message));
            } catch (error) {
                console.error('Błąd podczas pobierania danych:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDogs();
    }, []);

    if (loading) {
        return <div>Ładowanie...</div>;
    }

    return (
        <div className='App container mx-auto '>
            <h1 className='my-8 text-2xl text-center dark:text-white text-black'>Lista psów</h1>
            <ul className='grid grid-cols-6 gap-6'>
                {dogs.map((dog, index) => (
                    <DogItem dog={dog} key={index} />
                ))}
            </ul>
        </div>
    );
};

export default DogsList;