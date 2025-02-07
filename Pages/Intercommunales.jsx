import carteGlobale from "../Images/carteglobale.png"
import Namur from "../Images/intercommunaleNamur.jpg"
import Mons from "../Images/intercommunaleMons_Borinage.png"
import Luxembourg from "../Images/intercommunaleLuxembourg.jpg"
import BW from "../Images/intercommunaleBW.jpg"
import Liege from "../Images/intercommunaleLiege.jpg"
import Picardie from "../Images/intercommunalePicardie_SudHainaut.jpg"
import Charleroi from "../Images/intercommunaleCharleroi.jpg"


const Intercommunales = () => {
    return (
        <div className="Intercommunales">
            <h1 style={styles.h1}>LES INTERCOMMUNALES </h1>
            <main className="main">
                <p style={styles.p}>Ici, vous trouverez les différentes Intercommunales de Belgique!<br/>
                    Cliquez sur une intercommunale et vous serez directement transferé sur le site!
                </p>
                <div>
                    <img style={styles.img1} src={carteGlobale}/>

                    <a href="https://www.bep-environnement.be">
                        <img style={styles.img2} src={Namur}/>
                    </a>

                    <a href="https://www.hygea.be">
                        <img style={styles.img} src={Mons}/>
                    </a>

                    <a href="https://www.Idelux.be">
                        <img style={styles.img} src={Luxembourg}/>
                    </a>

                    <a href="https://www.inbw.be">
                        <img style={styles.img} src={BW}/>
                    </a>

                    <a href="https://www.intradel.be">
                        <img style={styles.img3} src={Liege}/>
                    </a>

                    <a href="https://www.ipalle.be">
                    <img style={styles.img} src={Picardie}/>
                    </a>

                    <a href="https://www.tibi.be">
                    <img style={styles.img} src={Charleroi}/>
                    </a>
                </div>
            </main>
        </div>
    )
}
const styles = {
    h1: {
        textAlign: 'center',
        fontSize: '30px',
        color: 'white',
    },

    p: {
        color: 'black',
        fontSize: '30px',
        textAlign: 'center',
        },
    img1: {
        width: '90%',
        height: '90%',
            },
    img:{
        width: '20%',
        height: '20%'
    },
    img2:{
        width: '10%',
        height: '10%',
        margin: "10px"
    },
    img3:{
        width: '10%',
        height: '10%',
        margin: "20px"
    }
}
export default Intercommunales;