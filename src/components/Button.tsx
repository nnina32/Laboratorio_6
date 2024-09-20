import { useState } from "react";

export function Button (){
    const[count, setCount] = useState(5);

    const increment = () => {
        setCount(count + 50);
    };

    return(
        <button style={{width:'100px', margin:'10px'}} onClick={increment}>
            {count}
        </button>
    );
}