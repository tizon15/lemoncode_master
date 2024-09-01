import React from "react";
import * as classes from "./styles.scss";
import { calculateTotalCost, CartItem } from "./chartService";
import image from "./assets/logo_1.png"; // Import image as a default export

export const ChartComponent = () => {
    const [total, setTotal] = React.useState(0);
    console.log(classes);


    React.useEffect(() => {
        const cartItems: CartItem[] = [
            { price: 10, quantity: 2 },
            { price: 20, quantity: 1 },
            { price: 30, quantity: 3 },
        ];
        setTotal(calculateTotalCost(cartItems));//+
    })
    return (
        <div>
            <img src={image} alt="Logo" className={classes.image} />
            <h1 className={classes.title}>Hello from Chart Component</h1>
            <p className={classes.title}>
                Total cost: {total}
            </p>
        </div>
    );

}