import { useSearchParams } from "react-router-dom";
import { GlobalContext } from "../Components/GlobalContext";
import { useContext } from "react";
// import React, { useContext } from "react";
export default function Article() {
  const [searchParams] = useSearchParams();
  let id = 1;
  if(parseInt(searchParams.get("id"))){
    id = parseInt(searchParams.get("id"));
  }
    
  let index = id - 1;
  const {addToCart, removeFromCart, products} = useContext(GlobalContext);
  const article = products[index];
  return(
        <article>
          {/* <h1>Article {id}</h1> */}
          <div class="wrapper">
            <div class="content">
              <div class="bg-shape"><span>Luxe Mocassin</span><span>Le luxe à bas prix</span></div>
              <div class="product-img">
                <div class="product-img__item" id="img1">
                  <img src={article.image} alt="star wars" class="product-img__img" />
                </div>
              </div>
              <div class="product-slider">
                <div class="product-slider__wrp swiper-wrapper">
                  <div class="product-slider__item swiper-slide" data-target="img1">
                    <div class="product-slider__card">
                      <div class="product-slider__content">
                        <h2 class="product-slider__title">{article.name} <small>LUXE</small>
                        </h2>
                        <span class="product-slider__price">{article.price}€</span>
                        <div class="product-ctr">
                          <div class="product-labels">
                            <div class="product-labels__title">Taille</div>

                            <div class="product-labels__group">
                              <label class="product-labels__item">
                                <input type="radio" class="product-labels__checkbox" name="type1" checked />
                                <span class="product-labels__txt">40</span>
                              </label>

                              <label class="product-labels__item">
                                <input type="radio" class="product-labels__checkbox" name="type1" />
                                <span class="product-labels__txt">42</span>
                              </label>
                              <label class="product-labels__item">
                                <input type="radio" class="product-labels__checkbox" name="type1" />
                                <span class="product-labels__txt">45</span>
                              </label>
                              <label class="product-labels__item">
                                <input type="radio" class="product-labels__checkbox" name="type1" />
                                <span class="product-labels__txt">50</span>
                              </label>
                            </div>

                          </div>

                          <span class="hr-vertical"></span>

                          <div class="product-inf">
                            <div class="product-inf__percent">
                              <div class="product-inf__percent-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                                  <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                      <stop offset="0%" stop-color="#0c1e2c" stop-opacity="0" />
                                      <stop offset="100%" stop-color="#cb2240" stop-opacity="1" />
                                    </linearGradient>
                                  </defs>
                                  <circle cx="50" cy="50" r="47" stroke-dasharray="225, 300" stroke="#d4af37" stroke-width="2" fill="none"/>
                                </svg>
                              </div>
                              <div class="product-inf__percent-txt">
                                75%
                              </div>
                            </div>

                            <span class="product-inf__title">DURABILITé</span>
                          </div>

                        </div>

                        <div class="product-slider__bottom">
                          {article.addCart === false && <button onClick={() => addToCart(article)} className="addCart btn">Ajouter à la carte <i class="fa-solid fa-cart-plus"></i></button>}    
                          {article.addCart === true && <button onClick={() => removeFromCart(article)} className="remove btn">Retirer de la carte <i class="fa-solid fa-cart-shopping"></i></button> }  
                        </div>
                      </div>
                    </div>
                  </div>     
                </div>
              </div>
            </div>
          </div>
        </article>
    );
}