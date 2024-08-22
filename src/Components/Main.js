import { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Article from "../pages/Article";


export default function Main() {
  const navigate = useNavigate();

  const goToArticle = (id) => {
    navigate("/article?id="+id);
  };
  const [store, setStore] = useState([]);
  const [filteredList, setFilteredList] = new useState([...store]);
  const [noFound, setNoFound] = useState(false);
  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...store];
    updatedList = updatedList.filter((item) => {
      // the function indexOf returns the position of the value in the string
      // if he don't find it he will return -1
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
    setNoFound(true);
  };
  // const [cart, setCart] = useState([]);
  const { products } = useContext(GlobalContext);
  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  //   product.addCart = true;
  // };
  // const removeFromCart = (productToRemove) => {
  //   setCart(cart.filter((item) => item.id !== productToRemove.id));
  //   productToRemove.addCart = false;
  // };
  useEffect(() => {
    setStore(products.map((item) => item));
  }, [products]);
  return (
    <div className="main">
      <input
        type="text"
        className="input"
        placeholder="Rechercher un produit..."
        id="search-box"
        onChange={filterBySearch}
      />
        <section className="products">
        {filteredList.map((el, k) => {
        return (
          <div className="card" key={k}>
          <div className="img-content">
            <img src={el.image} alt={el.image} />
          </div>
          <div className="info">
            <span className="title">{el.name}</span>
            <span className="price">{el.price} €</span>
            {/* {el.addCart === false && <button onClick={() => addToCart(el)} className="addCart btn">Ajouter à la carte <i class="fa-solid fa-cart-plus"></i></button>}     */}
            {/* {el.addCart && <button onClick={() => removeFromCart(el)} className="remove btn">Retirer de la carte <i class="fa-solid fa-cart-shopping"></i></button> }   */}
            <button onClick={()=>goToArticle(el.id)} className="btn">Voir l'article <i class="fa-solid fa-eye-open"></i></button>  
          </div>
        </div>
        );
        })}
        <h2>Nos Mocassins en Vedette</h2>
        <div className="product-container">
        {filteredList.length === 0 &&
        !noFound &&
        store.map((el, k) => {
          return (
            // <Card key={k} name={el.name} price={el.price} imageSrc={el.image}>
          <div className="card" key={k}>
            <div className="img-content">
              <img src={el.image} alt={el.image} />
            </div>
            <div className="info">
              <span className="title">{el.name}</span>
              <span className="price">{el.price} €</span>
              {/* {el.addCart === false && <a role="button" href="#" onClick={() => addToCart(el)} className="addCart btn">Ajouter à la carte <i class="fa-solid fa-cart-plus"></i></a>}    
              {el.addCart && <a role="button" href="#" onClick={() => removeFromCart(el)} className="remove btn">Retirer de la carte <i class="fa-solid fa-cart-shopping"></i></a> }   */}
              <button onClick={()=>goToArticle(el.id)} className="btn">Voir l'article <i class="fa-solid fa-eye-open"></i></button>  
            </div>
          </div>
          );
        })}
        </div>
        {filteredList.length === 0 && noFound && <h2>Aucun résultat trouvé</h2>}
      </section>
      <section className="about">
        <h2>Luxe Mocassin<span className="subtitle">Qui sommes-nous ?</span></h2>
        <div className="container">
          <div className="textcontent">
            <p><strong>Luxe Mocassin</strong> est une boutique spécialisée dans la vente de mocassins de luxe à Casablanca.</p>
            <p>Nous proposons des chaussures raffinées, confectionnées avec des matériaux haut de gamme pour un confort et une élégance inégalés.</p> 
            <p>Chaque paire est conçue pour sublimer votre style avec une touche d'exclusivité, que ce soit pour des occasions formelles ou un usage quotidien.</p> 
            <p>Découvrez l’alliance parfaite entre tradition artisanale et modernité chez Luxe Mocassin, où chaque détail compte pour offrir une expérience unique à nos clients.</p>
          </div>
          <div className="img-content">
            <img src="../images/mocassin-noir.jpg" alt="Mocassin"/>
            <img src="../images/elegant-mocassin.jpg" alt="Mocassin"/>
            <img src="../images/luxe-mocassin.jpg" alt="Mocassin"/>
          </div>
        </div>
      </section>
    </div>
  );
}
