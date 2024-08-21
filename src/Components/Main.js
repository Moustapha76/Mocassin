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
  }, []);
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
            <a role="button" href="" onClick={()=>goToArticle(el.id)} className="btn">Voir l'article <i class="fa-solid fa-eye-open"></i></a>  
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
              <a role="button" href="" onClick={()=>goToArticle(el.id)} className="btn">Voir l'article <i class="fa-solid fa-eye-open"></i></a>  
            </div>
          </div>
          );
        })}
        </div>
        {filteredList.length === 0 && noFound && <h2>Aucun résultat trouvé</h2>}
      </section>
    </div>
  );
}
