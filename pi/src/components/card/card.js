import React from 'react';
import './card.css';

function Card(){
    return(
        <>
            <h2 className="alert alert-primary"></h2>
            <section className="row cards" id="movies">
                <article className="single-card-movie">
                    <img src="{image}" className="card-img-top"
                        alt="..."/>
                    <div className="cardBody">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <a href="movie.html" className="btn btn-primary"></a>
                        <a href="" className="btn alert-primary"></a>
                    </div>
                </article>
            </section>
        </>
    )
}
export default Card;