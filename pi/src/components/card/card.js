import React from 'react';
import './card.css';

function Card(props){
    return(
        <>
            <article className={props.claseCard}>
                <img src={props.image} className="card-img-top" alt={props.titulo}/>
                <div className="cardBody">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <a href={props.link} className="btn btn-primary">Ver más</a>
                    <a href="/" className={props.claseFavorito}>{props.favorito}</a>
                </div>
            </article>
        </>
    )
}

export default Card;