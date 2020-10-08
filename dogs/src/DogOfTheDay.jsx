import React, { useEffect, useState } from 'react'

const DogOfTheDay = () => {
    const [dogImg, setDogImg] = useState(null);

    const fetchDog = () => {
        setDogImg("");
        fetch(`https://dog.ceo/api/breeds/image/random`)
            .then((res) => res.json())
            .then((dogInfo) => {
                setDogImg(dogInfo.message);
            });
    };

    useEffect(() => {
        if (dogImg === null) {
            fetchDog();
        }
    });

    return (
        <header>
            <h3>Perrito del día</h3>
            <div>
                <button onClick={() => fetchDog()}>Nuevo perro</button>
            </div>
            {dogImg !== "" ? (
                <div>
                    <img src={dogImg} width="400px" alt="doggo" />
                </div>
            ) : (
                    <div>Loading Image</div>
                )}
        </header>
    )
}

export default DogOfTheDay
