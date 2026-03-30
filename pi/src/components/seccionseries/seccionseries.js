import React from 'react';
import Card from '../card/card';

function SeccionSeries(props){
    return(
        <>
            <h2 className="alert alert-warning">{props.titulo}</h2>

            <section className="row cards" id={props.id}>
                <Card
                    claseCard="single-card-tv"
                    image="https://image.tmdb.org/t/p/w500/9mYeRoWguq5etbwJRdF8BXFKiF.jpg"
                    titulo="The Terminal List: Dark Wolf"
                    descripcion="Before The Terminal List, Navy SEAL Ben Edwards finds himself entangled in the black operations side of the CIA."
                    link="serie.html"
                    claseFavorito="btn alert-warning"
                    favorito="♥️"
                />

                <Card
                    claseCard="single-card-tv"
                    image="https://image.tmdb.org/t/p/w500/yueXS3q8BtoWekcHOATFHicLl3e.jpg"
                    titulo="Alien: Earth"
                    descripcion="When the mysterious deep space research vessel USCSS Maginot crash-lands on Earth, Wendy and a ragtag group of tactical soldiers make a fateful discovery."
                    link="serie.html"
                    claseFavorito="btn alert-warning"
                    favorito="♥️"
                />

                <Card
                    claseCard="single-card-tv"
                    image="https://image.tmdb.org/t/p/w500/yb4F1Oocq8GfQt6iIuAgYEBokhG.jpg"
                    titulo="Peacemaker"
                    descripcion="The continuing story of Peacemaker, a vainglorious superhero/supervillain who believes in peace at any cost."
                    link="serie.html"
                    claseFavorito="btn alert-warning"
                    favorito="♥️"
                />

                <Card
                    claseCard="single-card-tv"
                    image="https://image.tmdb.org/t/p/w500/6TPGDrU9MyWbn2TpggJphVAVXiq.jpg"
                    titulo="Upload"
                    descripcion="In 2033, people who are near death can be uploaded into virtual reality hotels run by tech firms."
                    link="serie.html"
                    claseFavorito="btn alert-warning"
                    favorito="🩶"
                />
            </section>
        </>
    )
}

export default SeccionSeries;