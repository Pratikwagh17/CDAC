import React, { useState } from "react";
import imgPath from "../shared/constant/ConstantData";

const ToggleImgComp = () => {

    const [isboolean, setIsBoolean] = useState(true);
    const [label, setLabel] = useState("Tulip");

    const ToggleButton = () => {

        if (isboolean) {
            setIsBoolean(false);
            setLabel("Lavender");
        } else {
            setIsBoolean(true);
            setLabel("Tulip");
        }

    };

    return (
        <div className="container mt-5">

            <div className="card shadow mx-auto text-center"
                style={{ width: "400px" }}>

                <div className="card-body">

                    <h1 className="card-title text-success mb-4">
                        ToggleImgComp
                    </h1>

                    {isboolean ? (
                        <img src={imgPath.ladoo} className="img-fluid rounded border border-success"
                            style={{ width: "300px", height: "300px", objectFit: "cover" }} alt="Tulip" />
                    ) : (
                        <img
                            src={imgPath.jalebi}  className="img-fluid rounded border border-success"
                            style={{ width: "300px", height: "300px",objectFit: "cover"}}alt="Lavender"/>
                    )}

                    <h2 className="text-success mt-3">{label}</h2>

                    <button type="button" className="btn btn-info text-white mt-3 px-4" onClick={ToggleButton}>Toggle_Image</button>

                </div>

            </div>

        </div>
    );
};

export default ToggleImgComp;