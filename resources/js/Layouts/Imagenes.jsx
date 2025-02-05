import React, { useState } from "react";
import InputConservacion from "@/Components/InputPersonalizado";
import BotonPersonalizado from "@/Components/BotonPersonalizado";
import ModalPersonalizado from "@/Components/ModalPersonalizado";
import InputPersonalizado from "@/Components/InputPersonalizado";


const Conservacion = () => {
    //creamos el array de imágenes para almacenarlas
    const [images, setImages] = useState([]);

    const actualizacion = (event) => {
        // Obtener los archivos seleccionados
        const files = event.target.files;
        // Crear un array vacío para almacenar nuevas imágenes
        const newImages = [];
    
        // Recorrer cada archivo seleccionado
        for (let i = 0; i < files.length; i++) {
            const file = files[i]; // Obtener el archivo actual
            const reader = new FileReader(); // Crear una instancia de FileReader para leer el archivo
    
            // Definir lo que sucede cuando el archivo se ha leído completamente
            reader.onload = (e) => {
                // Agregar un objeto con los datos de la imagen al array newImages
                newImages.push({
                    src: e.target.result, // URL de la imagen cargada
                    magnification: "x4", // Valor predeterminado del aumento
                });
    
                // Actualizar el estado después de procesar todas las imágenes
                setImages(newImages);
            };
    
            // Leer el archivo como una URL de datos (base64)
            reader.readAsDataURL(file);
        }
    };

    const handleMagnificationChange = (index, value) => {
        // Actualizar el aumento de una imagen específica
        setImages((prevImages) =>
            prevImages.map((img, i) =>
                i === index ? { ...img, magnification: value } : img
            )
        );
    };

    return (
        <div className="pb-6">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <form>
                            <label htmlFor="imagenes">Selecciona imágenes:</label>
                            <br />
                            <input
                                type="file"
                                id="imagenes"
                                name="imagenes"
                                accept="image/*"
                                multiple
                                required
                                onChange={actualizacion} // Manejar la carga de imágenes
                            />
                            <div id="visualizacion" className="mt-4">
                                {images.map((image, index) => (
                                    <div key={index} className="flex items-center mb-4">
                                        <img
                                            src={image.src}
                                            alt={`Preview ${index}`}
                                            style={{
                                                width: "100px",
                                                marginRight: "10px",
                                            }}
                                        />
                                        <select
                                            value={image.magnification}
                                            onChange={(e) =>
                                                handleMagnificationChange(index, e.target.value)
                                            }
                                            required
                                        >
                                            {["x4", "x10", "x40", "x100"].map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Conservacion;