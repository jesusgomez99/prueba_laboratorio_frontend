import React from "react";

const OptionPersonalizado = ({valor}) => {
    return (
        <>
            <option value={valor}>{valor}</option>
        </>
    );
};

export default OptionPersonalizado;