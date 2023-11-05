import React from "react";
import Sunflower from "../../Icons/images3.jpg"
import styles from "./Home.styled"
import Rose from "../../Icons/0RgfXAUiquvfnO5JfMvx.jpg"
import Tulip from "../../Icons/images1.jpg"
import Iris from "../../Icons/images2.jpg"
import FlowerItem from "../../components/FlowerItem";


const data = [
    {
        image: Rose,
        name: "Rose",
        height: 40,
        price: 100,
    },
    {
        image: Tulip,
        name: "Tulip",
        height: 30,
        price: 65,
    },
    {
        image: Iris,
        name: "Iris",
        height: 45,
        price: 130,
    },
];

const Home = () => {
    return (
        <div className="container">
            <div style={styles.container} className="row">
                <div className="col-md-6">
                    <img style={styles.img}
                        src={Sunflower}
                        alt="Зображення"
                        className="img-fluid"
                    />
                    </div>
                    <div className="col-md-6">
                    <h2 style={styles.textHeader}>Магазин найкращих квітів</h2>
                    <p style={styles.text}>
                        у нашому магазині є багато видів квітів.
                    </p>
                </div>
            </div>
            <div style={styles.flowerWrapper}>
                {data.map(({ image, name, height, price }, idx) => (
                    <FlowerItem
                        imageSrc={image}
                        name={name}
                        height={height}
                        price={price}
                        id={idx}
                    />
                ))}
            </div>
            <div style={styles.button_container}>
                <button style={styles.button} className="btn btn-primary">
                    <a className="nav-link" href="#">View more</a>
                </button>
            </div>
        </div>
    );
}

export default Home