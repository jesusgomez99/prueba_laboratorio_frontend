import React, { useState } from "react";
import InputConservacion from "@/Components/InputPersonalizado";
import BotonPersonalizado from "@/Components/BotonPersonalizado";
import ModalPersonalizado from "@/Components/ModalPersonalizado";
import OptionPersonalizado from "@/Components/OptionPersonalizado";

const Interpretacion = () => {
    const codigos = ["Código 1", "Código 2", "Código 3"];

    // Estado para manejar los formularios dinámicos
    const [formularios, setFormularios] = useState([1]); // Inicialmente un formulario

    // Función para añadir un nuevo formulario
    const añadirFormulario = () => {
        setFormularios([...formularios, formularios.length + 1]); // Añade un nuevo formulario
    };

    // Función para eliminar
    const eliminarFormulario = (index) => {
        setFormularios(formularios.filter((_, i) => i !== index)); // Filtra y elimina el formulario correspondiente
    };

    return (
        <>
            <div className="pb-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-5 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        
                        {/* Renderizar todos los formularios dinámicamente */}
                        {formularios.map((formulario, index) => (
                            <div className="p-5 text-gray-900 rounded-lg bg-slate-100" key={index} id={index}>
                                <form id={'interpretacion'} className="mb-6">
                                    <div className="flex justify-between">
                                        <div>
                                            <label htmlFor={`interpretaciones-${index}`} className="mr-3">
                                                Código de Interpretación:
                                            </label>
                                            <select
                                                className="rounded-lg cursor-pointer hover:bg-slate-200"
                                                name={`interpretaciones-${index}`}
                                                id={`interpretaciones-${index}`}
                                                required
                                            >
                                                <option value="" disabled selected>
                                                    Código
                                                </option>
                                                {codigos.map((codigo, idx) => (
                                                    <OptionPersonalizado key={idx} valor={codigo} />
                                                ))}
                                            </select>
                                        </div>

                                        {/* Botón SVG para eliminar el formulario */}
                                        <svg
                                            onClick={() => eliminarFormulario(formularios.indexOf(formulario))} // Llama a la función con el índice del formulario
                                            className="bg-slate-400 rounded-lg p-1 cursor-pointer hover:bg-red-500 transition-all"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="40px"
                                            viewBox="0 -960 960 960"
                                            width="40px"
                                            fill="#f1f5f9"
                                        >
                                            <path d="M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
                                        </svg>
                                    </div>

                                    <label className="mt-5 mb-2 block" htmlFor={`desint-${index}`}>
                                        Descripción de la calidad:
                                    </label>
                                    <textarea
                                        className="w-full rounded-lg min-h-[2.6rem]"
                                        name={`desint-${index}`}
                                        id={`desint-${index}`}
                                        rows={3}
                                        placeholder="Proporciona la descripción de la interpretación"
                                    />
                                </form>
                            </div>
                        ))}

                        {/* Botón para añadir un nuevo formulario */}
                        <button
                            onClick={añadirFormulario}
                            type="button"
                            className="mt-4 px-2 py-1 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all"
                        >
                            Añadir Interpretación
                        </button>

                        <button
                            onClick={añadirFormulario}
                            type="button"
                            className="mt-4 px-2 py-1 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all"
                        >
                            Añadir Interpretación
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Interpretacion;