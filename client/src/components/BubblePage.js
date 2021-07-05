import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import { useParams } from "react-router-dom";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // const params = useParams();

  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const getColors = () => {
    axiosWithAuth()
      .get("/colors")
      .then((res) => {
        console.log(res)
        setColorList(res.data)
      })
      .catch((err) => console.log("GET bubble colors error: ", err))
  };

  useEffect(() => {
    getColors()
  }, [])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
