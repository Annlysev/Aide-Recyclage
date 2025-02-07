import Dechet from "../src/components/Dechet.jsx";
import MenuDechet from "../src/components/menuDechets/MenuDechet.jsx";

const Dechets = () => {
    return (
        <div>
             <main style={styles.main}>
                 <MenuDechet/>
                 {/*<Dechet />*/}

            </main>

        </div>
    )
}
const styles = {
    main:{
        color: 'black',
        fontSize: '30px',
        textAlign: 'center',
    }
}
export default Dechets;