import React, { useState } from "react";

const ModalEjemplo = ({agregarMuestra}) => {
    const [modalAbierto, setModalAbierto] = useState(false); // Estado para abrir/cerrar el modal
    const [texto, setTexto] = useState(""); // Estado para capturar el input

    return (
        <div>
            {/* Botón para abrir el modal */}
            <button 
                className="mt-4 px-2 py-1 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all"
                onClick={(event) => {
                    event.preventDefault();
                    setModalAbierto(true);
                }}
            >
                Añadir Conservación
            </button>

            {/* Modal */}
            {modalAbierto && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Ingrese una palabra</h2>

                        {/* Input dentro del modal */}
                        <input 
                            type="text"
                            placeholder="Escribe aquí..."
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                        />

                        {/* Botones de acción */}
                        <div className="flex justify-end mt-4 space-x-2">
                            <button 
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                                onClick={() => setModalAbierto(false)}
                            >
                                Cerrar
                            </button>

                            <button 
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                                onClick={(event) => {
                                    event.preventDefault();
                                    
                                    agregarMuestra(texto, texto)
                                    setTexto("")
                                    setModalAbierto(false)
                                }}
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalEjemplo;
