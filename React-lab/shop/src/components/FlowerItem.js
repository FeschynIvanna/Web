import React from "react";
import { Flower } from "antd";
import styles from "./FlowerItem.styled";

const FlowerItem = ({ imageSrc, name, height, price }) => (
    <Flower
        hoverable
        style={{ width: 350, borderRadius: "20px" }}
        cover={
            <img style={styles.image} alt="example" src={imageSrc} />
        }
    >
        <div>
            <h2>{name}</h2>
            <p>Height: {height}</p>
            <p>Price: {price}</p>
        </div>
    </Flower>
);

export default FlowerItem;