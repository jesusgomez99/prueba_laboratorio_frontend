import React, { useState } from "react";
import InputConservacion from "@/Components/InputPersonalizado";
import BotonPersonalizado from "@/Components/BotonPersonalizado";
import ModalPersonalizado from "@/Components/ModalPersonalizado";
import OptionPersonalizado from "@/Components/OptionPersonalizado";

const CiudadBiopsia = () => {

    const ciudades = [
        "Córdoba",
        "Madrid",
        "Sevilla",
        "Málaga",
        "Barcelona"
    ]

    const biopsias = [
        "Por Aguja Fina",
        "Por Aguja de Corte",
        "Excisional",
        "Incisional",
        "Endoscópica"
    ]

    return (
        <>
            <div className="pb-6">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
                
                <form id="centro" className="mb-5">
                    <label for="ciudad" className="mr-3">Selecciona una ciudad:</label>
                    <select className="rounded-lg cursor-pointer hover:bg-slate-200" name="ciudad" id="ciudad" required>
                        <option value="" disabled selected>Ciudades</option>
                        
                        {ciudades.map((ciudad, index) => (
                            <OptionPersonalizado key={index} valor={ciudad}/>
                        ))}

                    </select>
                </form>

                <form id="tipobiopsia">
                    <label for="biopsia" className="mr-3">Selecciona el tipo de biopsia:</label>
                    <select className="rounded-lg cursor-pointer hover:bg-slate-200" name="biopsia" id="biopsia" required>
                        <option value="" disabled selected>Tipos de Biopsia</option>

                        {biopsias.map((biopsia, index) => (
                            <OptionPersonalizado key={index} valor={biopsia}/>
                        ))}

                    </select>
                </form>

            </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default CiudadBiopsia;