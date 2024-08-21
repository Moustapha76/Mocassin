import { GlobalContext } from "./GlobalContext";
import React, { useContext } from "react";

export default function Carte(){
    const { cart } = useContext(GlobalContext);
    return(
        <section className="cart">
            {cart.length > 0 &&
           <>
            <h2>Ma Carte</h2>
            <table>
            {cart.map((item, index) => (
                <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                </tr>
            ))}
            </table>
            </>
            }
            {cart.length === 0 && 
            <>
            <h2>Votre carte est vide</h2>
            <br/>
            <a role="button" href="/" className="btn">Ajouter des produits</a>
            </>
            }
        </section>
            
    )
}