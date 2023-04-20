import daLogo from "../../assets/comenta.png";
import "./Landing.css";

export default function Landing() {
    return (
        <>
            <div className='landing-content-container'>
                <div className='page-presentation'>
                    <img className='daetsisi-logo' src={daLogo}></img>
                    <h1 className='title-landing'>COMENTA</h1>
                    <h1>Plataforma de Quejas y Sugerencias a la Delegación de Alumnos de la ETSISI</h1>
                </div>
                <p className='title accented description'>
                    ¿Qué es?
                </p>
                <p className="description">
                    Día a día, en la Delegación de Alumnos de la escuela nos esforzamos mucho por mejorar la vida de los estudiantes de la ETSISI.
                    Para ello, necesitamos saber si en algún momento podríamos mejorar algo, o si por el contrario teneis alguna sugerencia de algo
                    que podríamos hacer desde la Delegación para mejorar la vida en la escuela. Por eso, hemos creado esta plataforma para que podáis
                    hacernos llegar vuestras quejas y sugerencias.
                </p>
                <p className="accented description">
                    ¡Gracias por vuestra colaboración!
                </p>
            </div>
            <div className="arrows-container">
                <div className="arrow-left">
                    <a href="/queja">&lt; Queja</a>
                </div>
                <div className="arrow-right">
                    <a href="/sugerencia">Sugerencia &gt;</a>
                </div>
            </div>
        </>
    )
}