import React from "react";

const BotonPersonalizado = ({id, texto, funcion}) => {
    return (
        <>
            <button 
                id={id} 
                className=" p-2 mt-3 mr-3 text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-800"
                onClick={(event)=> {
                    event.preventDefault(); //Evita la recarga del formulario
                    funcion()
                }}>

                {texto}
            </button>
        </>
    );
};

export default BotonPersonalizado;