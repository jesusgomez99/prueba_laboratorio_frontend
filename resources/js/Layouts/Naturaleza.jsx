// resources/js/Layouts/Naturaleza.jsx
import React from "react";
import InputNaturaleza from "@/Components/InputPersonalizado";

const Naturaleza = () => {
    return (
        <>
            <div className="pt-12 pb-6">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">

                <form>
                <fieldset id="naturaleza">
                <legend>Selecciona la naturaleza de la muestra:</legend>
                    <InputNaturaleza nombre="muestra" value="sangre" texto="Sangre"/>
                    <br />
                    <InputNaturaleza nombre="muestra" value="orina" texto="Orina"/>
                    <br />
                    <InputNaturaleza nombre="muestra" value="saliva" texto="Saliva"/>
                    <br />
                    <InputNaturaleza nombre="muestra" value="esputo" texto="Esputo"/>
                    <br />
                    <InputNaturaleza nombre="muestra" value="heces" texto="Heces"/>
                    <br />
                    <InputNaturaleza nombre="muestra" value="semen" texto="Semen"/>
                    <br />
                </fieldset>
                </form>

            </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default Naturaleza;
