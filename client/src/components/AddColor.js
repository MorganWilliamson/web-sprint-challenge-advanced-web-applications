import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams } from "react-router-dom";

const initialState = {
    color: "", 
    code: {
        hex: ""
    },
    id: "",
};

const AddColor = (props) => {
    const [value, setValues] = useState(initialState);
    const { id } = useParams();

    const handleChanges = (e) => {
        setValues({
            ...value, 
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addColor(values);
    };

    useEffect(() => {
        axiosWithAuth()
            .get(`/colors`)
            .then((res) => {
                setValues({...res.data})
            })
            .catch((err) => console.log("Error adding color: ", err))
    });

    return(
        <div>
            <h2>Add a Color!</h2>
            <form onSubmit={handleSubmit}>
                Color: 
                <input 
                    type="text"
                    name="color"
                    id="color"
                    placeholder="Color"
                    onChange={handleChanges}
                    value={value.color}
                />

                Hexcode: 
                <input 
                    type="text"
                    name="color"
                    id="color"
                    placeholder="Color"
                    onChange={handleChanges}
                    value={value.color}
                />

                ID: 
                <input 
                    type="text"
                    name="color"
                    id="color"
                    placeholder="Color"
                    onChange={handleChanges}
                    value={value.color}
                />
            </form>
        </div>
    )
}