import './Header.css'
import daLogo from '../../assets/comenta.png'
import twitterLogo from '../../assets/twitter.png'
import instagramLogo from '../../assets/instagram.png'
import telegramLogo from '../../assets/telegram.png'

export default function Header() {
    return (
        <div className='header-container'>
            <img className='comenta-logo' src={daLogo}></img>
            
            <div className='header-text'>
                <p id='delegacion'>Delegación de Alumnos de la ETSISI</p>
                <p id='title'>COMENTA</p>
            </div>

            <div className='rrss-section'>
                <img className='rrss-logo' src={telegramLogo}></img>
                <img className='rrss-logo' src={twitterLogo}></img>
                <img className='rrss-logo' src={instagramLogo}></img>
            </div>
        </div>
    )
}