// resources/js/Pages/Prueba.jsx
import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";  // Layout principal
import Naturaleza from "@/Layouts/Naturaleza"; // Layout adicional
import Conservacion from "@/Layouts/Conservacion";
import CiudadBiopsia from "@/Layouts/CiudadBiopsia"
import Calidad from "@/Layouts/Calidad"
import Interpretacion from "@/Layouts/Interpretación"
import Imagenes from "@/Layouts/Imagenes"


export default function Prueba() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Prueba
                </h2>
            }
        >
            {/*este es el title de la página en el navegador*/}
            <Head title="Prueba" />

            {/* Aquí va el contenido principal de la página */}

                            
                            {/* Aquí agregamos Naturaleza como un bloque adicional */}
                            <Naturaleza>
                            </Naturaleza>

                            <Conservacion>    
                            </Conservacion>

                            <CiudadBiopsia>
                            </CiudadBiopsia>

                            <Calidad></Calidad>

                            <Interpretacion></Interpretacion>

                            <Imagenes></Imagenes>

        </AuthenticatedLayout>
    );
}
