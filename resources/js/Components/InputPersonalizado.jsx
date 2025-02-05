import React from "react";

const InputPersonalizado = ({nombre, valor, texto}) => {
    return (
        <>
            <label>
                <input type="radio" name={nombre} value={valor}/>
                {texto}
            </label>
            
        </>
    );
};

export default InputPersonalizado;