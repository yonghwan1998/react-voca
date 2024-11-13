import { useState } from "react";
import UserName from "./UserName";

export default function Hello({ age }) {
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? '성인입니다.' : '미성년자입니다.';

    return (
        <div>
            <h2>
                {name}({age}) : {msg}
            </h2>
            <UserName name={name} />
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