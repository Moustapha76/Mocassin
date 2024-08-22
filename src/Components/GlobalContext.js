import React, { createContext, useState } from "react";
// Créez un contexte
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
    product.addCart = true;
  };
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((item) => item.id !== productToRemove.id));
    // console.log(productToRemove);
    productToRemove.addCart = false;
  };
  const products = [
    { id: 1, name: "Mocassin Élégant", price: "199", image: "../images/elegant-mocassin.jpg", addCart: false, collection: 'homme' },
    { id: 2, name: "Mocassin Classique", price: "179", image: "../images/classic-mocassin.jpg",addCart: false, collection: 'homme' },
    { id: 3, name: "Mocassin Confort", price: "149", image: "../images/comfort-mocassin.jpg",addCart: false, collection: 'femme' },
    { id: 4, name: "Mocassin Moderne", price: "189", image: "../images/modern-mocassin.jpg",addCart: false, collection: 'femme' },
    { id: 5, name: "Mocassin Casual", price: "139", image: "../images/casual-mocassin.jpg" ,addCart: false, collection: 'enfant'},
    { id: 6, name: "Mocassin Luxe", price: "249", image: "../images/luxury-mocassin.jpg" ,addCart: false, collection: 'femme'},
    { id: 7, name: "Mocassin Tendance", price: "169", image: "../images/trendy-mocassin.jpg",addCart: false,collection: 'enfant' },
    { id: 8, name: "Mocassin Sportif", price: "159", image: "../images/sport-mocassin.jpg" ,addCart: false, collection: 'homme'},
    { id: 9, name: "Mocassin Urbain", price: "189", image: "../images/urban-mocassin.jpg" ,addCart: false, collection: 'femme'},
    { id: 10, name: "Mocassin Class", price: "199", image: "../images/class-mocassin.jpg" ,addCart: false, collection: 'enfant'},
  ];

  return (
    <GlobalContext.Provider value={{ cart, setCart, addToCart, removeFromCart, products }}>
      {children}
    </GlobalContext.Provider>
  );
};
