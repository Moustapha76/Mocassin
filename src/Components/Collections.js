import { GlobalContext } from "../Components/GlobalContext";
import { useContext } from "react";

export default function Collections(){
    const {products} = useContext(GlobalContext);
    function change() {
        let results = Array.from(document.querySelectorAll('.result > div'));
        let checkboxes = Array.from(document.querySelectorAll('.checkbox label'));
        // Hide all results
        results.forEach(function(result) {
          result.style.display = 'none';
        });
        checkboxes.forEach(function(checkb) {
          checkb.classList.remove('filterChecked');
        });
        // Filter results to only those that meet ALL requirements:
        Array.from(document.querySelectorAll('.filter input[rel]:checked'), function(input) {
            const attrib = input.getAttribute('rel');
            input.parentElement.classList.add('filterChecked');
            results = results.filter(function(result) {
                return result.classList.contains(attrib);
            });
            return results;
        });
        // Show those filtered results:
        results.forEach(function(result) {
            result.style.display = 'flex';
        });
    }
    // change();
    return(
        <section className="collections">
            <h2>Nos collections<span className="subtitle">Découvrez toutes nos collections</span></h2>
             <div class="filter">
                <div class="checkbox">
                    <label class="filterChecked"><input type="radio" name='check' rel="card" onClick={change} checked/>Tout</label>
                </div>
                <div class="checkbox">
                    <label><input type="radio" name='check' rel="homme" onClick={change}/>Homme</label>
                </div>
                <div class="checkbox">
                    <label><input type="radio" name='check' rel="femme" onClick={change}/>Femme</label>
                </div>
                <div class="checkbox">
                    <label><input type="radio" name='check' rel="enfant" onClick={change}/>Enfant</label>
                </div>
            </div>
            <div class="result">
                {products.map((el, k) => {
                    return (
                        <div className={`card ${el.collection}`} key={k} data-lightbox="mygallery" href={el.image}>
                            <div className="img-content">
                                <img src={el.image} alt={el.image} />
                            </div>
                            <div className="info">
                                <span className="title">{el.name}</span>
                                <span className="price">{el.price} €</span>
                                <a className="seemore" href={`/article/${el.id}`}>Voir l'article <i class="fa-solid fa-eye-open"></i></a>  
                            </div>
                        </div>
                    );
                })}
                {/* {products.map((item, key)=>{
                    return (
                        <div class={`item-picture${item.collection}`} id={key} data-lightbox="mygallery" href={item.image}>
                            <img src={item.image} alt=""/>
                            <a className="seemore" href={`/article/${item.id}`}>Voir l'article <i class="fa-solid fa-eye-open"></i></a> 
                        </div>
                    )
                })} */}
                {/* <div class="item-picture gallery-1" data-lightbox="mygallery" href="../images/1.jpg"><img src="../images/1.jpg" alt=""/></div>
                <div class="item-picture gallery-1" data-lightbox="mygallery" href="../images/7.jpg"><img src="../images/7.jpg" alt=""/></div>
                <div class="item-picture gallery-2" data-lightbox="mygallery" href="../images/2.jpg"><img src="../images/2.jpg" alt=""/></div>
                <div class="item-picture gallery-2" data-lightbox="mygallery" href="../images/8.jpg"><img src="../images/8.jpg" alt=""/></div>
                <div class="item-picture gallery-3" data-lightbox="mygallery" href="../images/3.jpg"><img src="../images/3.jpg" alt=""/></div>
                <div class="item-picture gallery-3" data-lightbox="mygallery" href="../images/13.jpg"><img src="../images/13.jpg" alt=""/></div> */}
            </div>
        </section>
    )
}