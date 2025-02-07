import Recyclage from "../Images/siglerecyclage.png";

const Home = () => {
    return (
        <div className="Home">
        <h1 style={styles.h1}>PAGE PRINCIPALE </h1>
            <main className="main">
                <p style={styles.p}>Bonjour à tous! Je vous propose de vous aider dans le tri de vous déchets
                    ménagers. <br/>
                    Pour chaque déchets, vous trouverez la poubelle correspondante dans votre Région mais également par
                    rapport à votre Intercommunale.<br/>
                </p>
                <img style={styles.img} src={Recyclage} alt="Recyclage"/>
            </main>
        </div>

    )
};
const styles = {
    h1: {
        textAlign: 'center',
        fontSize: '30px',
        color:"white",
    },

    p:{
       color: 'black',
       fontSize: '30px',
       textAlign: 'center',
    },

    img:{
        alignItems: "center",
        width:"50%",
        padding: '55px 300px',
        borderRadius: '10px',



    }
}
export default Home;