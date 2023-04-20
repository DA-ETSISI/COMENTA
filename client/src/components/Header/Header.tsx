import './Header.css'
import daLogo from '../../assets/comenta.png'
import twitterLogo from '../../assets/twitter.png'
import instagramLogo from '../../assets/instagram.png'
import telegramLogo from '../../assets/telegram.png'
import webLogo from '../../assets/web.png'

export default function Header() {
    return (
        <div className='header-container'>
            <img className='comenta-logo' src={daLogo}></img>

            <div className='header-text'>
                <p id='delegacion'>Delegación de Alumnos de la ETSISI</p>
                <p id='title'>COMENTA</p>
            </div>

            <div className='rrss-section'>
                <a href='https://t.me/forodaetsisi'>
                    <img className='rrss-logo' src={telegramLogo} />
                </a>
                <a href='https://twitter.com/daetsisi'>
                    <img className='rrss-logo' src={twitterLogo} />
                </a>
                <a href='https://instagram.com/daetsisi'>
                    <img className='rrss-logo' src={instagramLogo} />
                </a>
                <a href='https://daetsisi.es'>
                    <img className='rrss-logo' src={webLogo} />
                </a>
            </div>
        </div>
    )
}