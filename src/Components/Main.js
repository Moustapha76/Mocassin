import { useEffect, useState,useContext } from "react";
import { GlobalContext } from "./GlobalContext";


export default function Main() {
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
        <section className="atouts">
          <div className="item-atout"><i class="fa-solid fa-truck"></i><span>Livraison express</span><p>Service de livraison disponile 24h/24</p></div>
          <div className="item-atout"><i class="fa-solid fa-award"></i><span>100% Garantie</span><p>Nos mocassins sont garanties pour 24 mois</p></div>
          <div className="item-atout"><i class="fa-solid fa-headset"></i><span>Service client</span><p>Service client joignable en ligne 24h/24</p></div>
          <div className="item-atout"><i class="fa-solid fa-percent"></i><span>Promotion</span><p>Avec Luxe Mocassins, obtenez le luxe à bas pris</p></div>
        </section>
        <section className="categories">

        </section>
        <section className="products">
        {filteredList.length === 0 && !noFound && <h2>Nos Mocassins en Vedette<span className="subtitle">Nos best sellers</span></h2>}
        {filteredList.length > 1 && noFound && <h2 className="search-result"><strong>{filteredList.length}</strong> articles trouvés</h2>}
        {filteredList.length === 1 && noFound && <h2 className="search-result"><strong>{filteredList.length}</strong> article trouvé</h2>}
        {filteredList.length === 0 && noFound && <h2 className="search-result">Aucun résultat trouvé pour votre recherche</h2>}
        <div className="product-container">
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
            <a className="seemore" href={`/article/${el.id}`}>Voir l'article <i class="fa-solid fa-eye-open"></i></a>  
          </div>
        </div>
        );
        })}
        {filteredList.length === 0 &&
        !noFound &&
        store.map((el, k) => {
          return (
          <div className="card" key={k}>
            <div className="img-content">
              <img src={el.image} alt={el.image} />
            </div>
            <div className="info">
              <span className="title">{el.name}</span>
              <span className="price">{el.price} €</span>
              {/* {el.addCart === false && <a role="button" href="#" onClick={() => addToCart(el)} className="addCart btn">Ajouter à la carte <i class="fa-solid fa-cart-plus"></i></a>}    
              {el.addCart && <a role="button" href="#" onClick={() => removeFromCart(el)} className="remove btn">Retirer de la carte <i class="fa-solid fa-cart-shopping"></i></a> }   */}
              <a className="seemore" href={`/article/${el.id}`}>Voir l'article <i class="fa-solid fa-eye-open"></i></a>
            </div>
          </div>
          );
        })}
        </div>
      </section>
      <section className="promo">
        <h2>Super promos</h2>
        <p>Promotion du 30 Août au 10 Septembre 2024 ! Réduction de <strong>50%</strong> sur tout nos produits.</p>
        <br/>
        <a href="/article" className="shop-button">Nos promotions <i class="fa-solid fa-percent"></i></a>
      </section>
      <section className="about">
        <div className="container">
          <div className="textcontent">
            <h2>Luxe Mocassin<span className="subtitle">Qui sommes-nous ?</span></h2>
            <div>
              <p><strong>Luxe Mocassin</strong> est une boutique spécialisée dans la vente de mocassins de luxe à Casablanca.</p>
              <p>Nous proposons des chaussures raffinées, confectionnées avec des matériaux haut de gamme pour un confort et une élégance inégalés.</p> 
              <p>Chaque paire est conçue pour sublimer votre style avec une touche d'exclusivité, que ce soit pour des occasions formelles ou un usage quotidien.</p> 
              <p>Découvrez l’alliance parfaite entre tradition artisanale et modernité chez Luxe Mocassin, où chaque détail compte pour offrir une expérience unique à nos clients.</p>
            </div>
            <div className="btn-group">
              <a href="/contact" className="btn">Contactez-nous <i class="fa-solid fa-phone-flip"></i></a>
              <a href="/article" className="btn">Visitez la boutique <i class="fa-solid fa-cart-shopping"></i></a>
            </div>
          </div>
          <div className="img-content">
            <div><img src="../images/13.jpg" alt="Mocassin"/></div>
            <div><img src="../images/modern-mocassin.jpg" alt="Mocassin"/></div>
          </div>
        </div>
      </section>
      <section className="marques">
        <h2>Nos marques<span>Partenaire des meilleures marques</span></h2>
        <div className="logo-container">
          <div><img src="../images/marques/alden-shoe-company-seeklogo.svg" alt="Marque alden"/></div>
          <div><img src="../images/marques/carmina-seeklogo.svg" alt="Marque carmina"/></div>
          <div><img src="../images/marques/churchs.svg" alt="Marque church's"/></div>
          <div><img src="../images/marques/gucci-seeklogo-4.svg" alt="Marque gucci"/></div>
          <div><img src="../images/marques/john-lobb-seeklogo.svg" alt="Marque john-lobb"/></div>
          <div><img src="../images/marques/salvatore-ferragamo-s-p-a-seeklogo.svg" alt="Marque ferragamo"/></div>
          <div><img src="../images/marques/Santoni.svg" alt="Marque Santoni"/></div>
          <div><img src="../images/marques/tods-seeklogo.svg" alt="Marque tod's"/></div>
        </div>
      </section>
    </div>
  );
}
