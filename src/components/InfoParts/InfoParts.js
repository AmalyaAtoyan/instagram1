import IMAGES from '../../images'
import './InfoParts.css'


function InfoParts() {
    return(
        <div>
            <div className="infoPart4">
                <p className="logInfo">Don't have an account?</p>
                <a className="signPart">Sign up</a>
            </div>
            <div className="infoPart5">
                <p className="logInfo">Get the app.</p>
            </div>
            <div className="infoPart6">
                <img src={IMAGES.loginPart2} alt='linktoappstore'/>
            </div>
        </div>
    )
}

export default InfoParts