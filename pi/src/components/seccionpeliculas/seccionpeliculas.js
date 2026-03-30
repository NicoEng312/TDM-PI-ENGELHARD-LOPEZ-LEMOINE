import React from 'react';
import Card from '../card/card';

function SeccionPeliculas(props){
    return(
        <>
            <h2 className="alert alert-primary">{props.titulo}</h2>

            <section className="row cards" id={props.id}>
                <Card
                    claseCard="single-card-movie"
                    image="https://image.tmdb.org/t/p/w500/tzrJulItjttxzoX0t3B2My46TS7.jpg"
                    titulo="The Thursday Murder Club"
                    descripcion="A group of senior sleuths passionate about solving cold cases get plunged into a real-life murder mystery in this comic crime caper."
                    link="movie.html"
                    claseFavorito="btn alert-primary"
                    favorito="🩶"
                />

                <Card
                    claseCard="single-card-movie"
                    image="https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg"
                    titulo="F1"
                    descripcion="Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory."
                    link="movie.html"
                    claseFavorito="btn alert-primary"
                    favorito="♥️"
                />

                <Card
                    claseCard="single-card-movie"
                    image="https://image.tmdb.org/t/p/w500/A06yXys3hrCWu8xiNoHCFLTG5SH.jpg"
                    titulo="I Know What You Did Last Summer"
                    descripcion="When five friends inadvertently cause a deadly car accident, they cover up their involvement and make a pact to keep it a secret rather than face the consequences."
                    link="movie.html"
                    claseFavorito="btn alert-primary"
                    favorito="♥️"
                />

                <Card
                    claseCard="single-card-movie"
                    image="https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg"
                    titulo="Superman"
                    descripcion="Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent."
                    link="movie.html"
                    claseFavorito="btn alert-primary"
                    favorito="♥️"
                />
            </section>
        </>
    )
}

export default SeccionPeliculas;