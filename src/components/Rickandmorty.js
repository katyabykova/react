import React, {useState} from 'react';

const Rickandmorty = () => {

    let [users,setUsers] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value=>value.json())
        .then(value => {
                setUsers(value.results);

        })
    return (
        <div>
            <h3>2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього
                апі.
                Створити 6 персонажів</h3>
            {
                users.slice(0,6).map(value =>
                    <div className={'rick'}>
                    <p>ID: {value.id}</p>
                    <p>Name: {value.rickname}</p>
                    <p>Status: {value.status}</p>
                    <p>Spesies:{value.spesies}</p>
                    <p>Genger:{value.gender}</p>
                    <img src={value.image}/>
                </div>)
            }
        </div>
    );
};

export default Rickandmorty;