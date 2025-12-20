import React from "react";
import "./Houses.css";
import Card from '../Card/Card';
import house from "../../assets/house.jpg";
import house1 from "../../assets/housekichen.jpg";
import house2 from "../../assets/houseliving.jpg";
import villa from "../../assets/villa.jpg";
import villa1 from "../../assets/villa1.jpg";
import villa2 from "../../assets/villa3.jpg";
import village from "../../assets/village1.avif";
import village1 from "../../assets/village2.avif";
import village2 from "../../assets/village3.avif";
import old from "../../assets/old.avif";
import old1 from "../../assets/old2.avif";
import old2 from "../../assets/old1.avif";
import hut1 from "../../assets/hut1.avif";
import hut2 from "../../assets/hut2.avif";
import hut3 from "../../assets/hut3.avif";
import farmhouse from "../../assets/farmhouse2.jpg";
import farmhouse1 from "../../assets/farmhouse1.jpg";
import farmhouse2 from "../../assets/farmhouse.jpg";

function Houses() {
  return (
    <div id="houses">
      <Card
        image1={house}
        image2={house1}
        image3={house2}
        title={"3BHK Villa in Jhansi"}
        price={"20,000"}
      />
      <Card
        image1={villa2}
        image2={villa1}
        image3={villa}
        title={" Modern House in Jaipur"}
        price={"30,000"}
      />
      <Card
        image1={village}
        image2={village1}
        image3={village2}
        title={"Village House"}
        price={"20,000"}
      />
      <Card
        image1={old}
        image2={old1}
        image3={old2}
        title={"1BHK house in Manali"}
        price={"20,000"}
      />
      <Card
        image1={hut3}
        image2={hut2}
        image3={hut1}
        title={"Hut House"}
        price={"20,000"}
      />
      <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title={"Farmhouse in Lucknow"} price={"60,000"}/>
    </div>
  );
}

export default Houses;
