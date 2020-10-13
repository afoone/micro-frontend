import React, { useState } from 'react'
import Header from './components/Header';
import { Cats, Dogs, GreetingCat } from './App'


function Home({ history }) {
    const [input, setInput] = useState("");

    const handleOnClick = () => {
        history.push(`/cat/${input}`);
    };

    return (
        <div>
            <Header />

            <div className="home">
                <input
                    placeholder="Escribe un saludo"
                    defaultValue={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleOnClick}>Saludame</button>
            </div>

            <div className="home">
                <div className="content">
                    <div className="cat">
                        <Cats history={history} />
                    </div>
                    <div className="cat">
                        <Dogs history={history} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home
