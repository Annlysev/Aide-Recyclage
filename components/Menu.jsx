import {Link} from "react-router-dom";


const Menu = ({closeMenu}) => {
    return (
        <div>
            <div className="Menu">
               <button onClick={closeMenu}>Fermer</button>
                <nav style={styles.article}>
                    <h2 style={styles.h2}>Menu</h2>
                    <ul style={styles.ul}>
                        <li>
                            <Link to=''>Home</Link>
                        </li>
                        <li>
                            <Link to='/Dechet'>Déchets</Link>
                        </li>
                        <li>
                            <Link to='/Regions'>Régions</Link>
                        </li>
                        <li>
                            <Link to='/Intercommunales'>Intercommunales</Link>
                         </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

const styles = {
    article: {
        backgroundColor: '#7fffd4',
        margin: '0.5' +
            'em',
        padding: '0.5em',
        borderRadius: '10px',
    },
    h2:{
        textAlign:"center",
        fontSize: '2rem',
    },
    ul:{
        textAlign:"left",
        fontSize: '2rem',
    },

};

export default Menu;