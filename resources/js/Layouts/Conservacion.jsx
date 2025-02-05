import React, { useState } from "react";
import InputConservacion from "@/Components/InputPersonalizado";
import BotonPersonalizado from "@/Components/BotonPersonalizado";
import ModalPersonalizado from "@/Components/ModalPersonalizado";

const Conservacion = () => {
    const [muestras, setMuestras] = useState([
        { nombre: "Refrigeración"},
        { nombre: "Congelación"},
        { nombre: "Deshidratación"},
    ]);

//-----AÑADIR----------------------------------------------------------------------------------------


    // Función para añadir nueva muestra
    const agregarMuestra = (nombre, texto) => {
        setMuestras([...muestras, { nombre, texto}]);
    };

//-----EDITAR-----------------------------------------------------------------------------------------

    // Función para editar una muestra
    const editarMuestra = (index) => {
        //Almacenamos el nuevo texto escrito en el prompt
        const nuevoTexto = prompt("Introduce el nuevo texto:", muestras[index].nombre);
        //Si el nuevo texto no es null y no está vacío realiza lo siguiente
        if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
            //Se usa .map para recorrer las muestras y guardar lo que devuelva
            const nuevasMuestras = muestras.map((muestra, i) => {
                //si el índice de la función coincide con alguno del array muestra
                if (i === index) {
                    //devuelve la muestra seleccionada con el nombre cambiado con el nuevoTexto
                    return { ...muestra, nombre: nuevoTexto };
                }
                //Si no, se devuelven la muestra tal cual estaba
                return muestra;
            });
            //Por último se actualizan las muestras
            setMuestras(nuevasMuestras);
        }
    };

//-----BORRAR-----------------------------------------------------------------------------------------

    // Función para eliminar una muestra
    const borrarMuestra = (index) => {
        //filtra las muestras, y devuelve las que cuyo index no es igual al index pasado por parámetros a la función
        const nuevasMuestras = muestras.filter((_, i) => i !== index);
        //Se actualizan las muestas con las nuevas muestras
        setMuestras(nuevasMuestras)
    };


    return (
        <>
            <div className="pb-6">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
                
                <form>
                    <fieldset id="naturaleza">
                        <legend>Selecciona el método de conservación:</legend>
                            
                            {/*RECORREMOS EL ARRAY DE MUESTRAS*/}
                            {muestras.map((muestra, index) => (
                                
                                <div className="flex" key={index}>

                                    {/*CREAMOS EL INPUT*/}
                                    <InputConservacion
                                        nombre="muestra"
                                        valor={muestra.nombre}
                                        texto={muestra.nombre}
                                    />
                                            
                                    <svg
                                        id="editarnatu"
                                        className="cursor-pointer hover:fill-gray-600 ml-2"
                                        onClick={() => editarMuestra(index)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="20px"
                                        viewBox="0 -1000 960 960"
                                        width="24px"
                                        fill="#858585"
                                    >
                                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                                    </svg>
                            
                                    <svg 
                                        id="borrarnatu" 
                                        className="cursor-pointer hover:fill-gray-600" 
                                        onClick={() => borrarMuestra(index)}
                                        xmlns="http://www.w3.org/2000/svg" 
                                        height="20px" 
                                        viewBox="0 -1000 960 960" 
                                        width="24px" 
                                        fill="#858585"
                                    >
                                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                                    </svg>
                                </div>
                    ))}
                    </fieldset>

                    <ModalPersonalizado agregarMuestra={agregarMuestra}/>

                </form>

            </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default Conservacion;