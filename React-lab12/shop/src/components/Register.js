import React, { useState } from 'react';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = () => {
        if (!name || !email || !password) {
            alert('Будь ласка, заповніть всі поля');
            return;
        }


        localStorage.setItem('user', JSON.stringify({ name, email }));

        alert(`Успішна реєстрація для ${name}`);
    };

    return (
        <div>
            <h2>Сторінка реєстрації</h2>
            <label>
                Ім'я:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Електронна пошта:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Пароль:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button onClick={handleRegistration}>Зареєструватися</button>
        </div>
    );
};

export default Registration;
