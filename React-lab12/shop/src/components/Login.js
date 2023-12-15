import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        localStorage.setItem('email', email);


        alert(`Успішний вхід для ${email}`);
    };

    return (
        <div>
            <h2>Сторінка входу</h2>
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
            <button onClick={handleLogin}>Увійти</button>

            {/* Додано посилання для переходу на сторінку реєстрації */}
            <p>Ще не маєте облікового запису? <Link to="/register">Зареєструйтеся</Link></p>
        </div>
    );
};

export default Login;
