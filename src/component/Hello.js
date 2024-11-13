import { useState } from "react";

export default function Hello() {

    //let name = "Mike";
    const [name, setName] = useState('Mike');

    return (
        <div>
            <h1>state</h1>
            <h2>{name}</h2>
            <button
                onClick={() => {
                    setName(name === "Mike" ? "Jane" : "Mike");   
                }}
            >
            Change
            </button>
        </div>
    );
}