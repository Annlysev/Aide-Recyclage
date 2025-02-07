import Wallonie from "../Images/drapeau_wallonie.png"
import Bruxelles from "../Images/Belgium_brussels_iris.svg"
import Flandres from "../Images/VlagvanVlaanderen.svg"


const Regions = () => {

    return (
        <div className="Regions">
            <h1 style={styles.h1}>LES REGIONS</h1>
            <main style={styles.main} className="main">
                <div style={styles.div1}>
                    <img style={styles.img} src={Wallonie}
                         alt="Région Wallonne" />
                    <a style={styles.p1} href="https://www.wallonie.be"><br/>https://www.wallonie.be</a>
                </div>
                <div style={styles.div1}>
                    <img style={styles.img} src={Bruxelles}
                         alt="Région Bruxelloise"/>
                    <a style={styles.p1} href="https://environnement.brussels"><br/>https://environnement.brussels </a>
                </div>
                <div style={styles.div1}>
                    <img style={styles.img} src={Flandres}
                         alt="Region Flamande"/>
                    <a style={styles.p1} href="https://www.vlaanderen.be"><br/>https://www.vlaanderen.be</a>
                </div>
            </main>
        </div>
    )}

const styles = {
    div1:{
        padding: '20px',
    },

    h1: {
        textAlign: 'center',
        fontSize: '30px',
        color: 'white',
    },
    main: {
        textAlign: 'center',
    },

    p: {
        color: '#a01111',
        fontSize: '20px',
    },
    img:{
        width: '20%',
        height: '20%',
        fontSize: '20px',
    },
    p1:{
        fontSize: '30px',
        }
}

export default Regions;