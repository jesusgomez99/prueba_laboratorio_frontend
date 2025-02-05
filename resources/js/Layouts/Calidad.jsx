import React, { useState } from "react";
import InputConservacion from "@/Components/InputPersonalizado";
import BotonPersonalizado from "@/Components/BotonPersonalizado";
import ModalPersonalizado from "@/Components/ModalPersonalizado";
import OptionPersonalizado from "@/Components/OptionPersonalizado";

const CiudadTipo = () => {

    const calidades = [
        "Excelente",
        "Buena",
        "Regular",
        "Mala"
    ]

    return (
        <>
            <div className="pb-6">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">

                <form id="calidad">
                    <label htmlFor="calidadmuestra" className="mr-3">Selecciona la calidad de la muestra:</label>
                    <select className="rounded-lg cursor-pointer hover:bg-slate-200" name="calidadmuestra" id="calidadmuestra" required>
                        <option value="" disabled selected>Calidad</option>
                        {calidades.map((calidad, index) => (
                            <OptionPersonalizado key={index} valor={calidad}/>
                        ))}
                    </select>

                        <br />

                    <label className="mt-5 mb-2 block" htmlFor="descripcioncalidad">Descripción de la calidad:</label>
                    <textarea 
                        className="w-full rounded-lg min-h-[2.6rem]" 
                        name="descripcioncalidad" 
                        id="descripcioncalidad" 
                        rows={3}
                        placeholder="Proporciona más detalles sobre la calidad de la muestra"
                    />

                </form>
            </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default CiudadTipo;