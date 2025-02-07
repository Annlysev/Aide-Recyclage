import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Regions from "../Pages/Regions.jsx";
import Intercommunales from "../Pages/Intercommunales.jsx";
import {useState} from "react";
import Dechets from "../Pages/Dechets.jsx";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => setIsOpen(true);

    const handleCloseMenu = () => setIsOpen(false);

    return (
        <div style={styles.body}>
            <Header/>

            <section>
                {!isOpen && <button onClick={handleOpenMenu}>Ouvrir le Menu</button>}

                {isOpen && (
                    <Menu closeMenu={handleCloseMenu}/>
                )}
            </section>
            <div style={styles.container}>
                <Routes>
                        <Route path='' element={<Home/>}/>
                        <Route path='Dechet' element={<Dechets/>}/>
                        <Route path='Regions' element={<Regions/>}/>/
                        <Route path='Intercommunales' element={<Intercommunales/>}/>
                </Routes>
            </div>
        </div>
    )
};
const styles = {
    body: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        padding: '1em',
        fontSize: '0.5rem',
        margin: 0,


    },
    container: {
        flex: '1 1 auto',
        display: 'flex',
    },
    header: {
        background: 'green',
        margin: '.2em',
        padding: '1em',
        borderRadius: '10px',
        textAlign: 'center',
    },
    nav: {
        background: '#ccccff',
        margin: '.5em',
        padding: '.1em',
        borderRadius: '.1px',
        textAlign: 'center',
    },
    article: {
        background: '#dddd88',
        margin: '.2em',
        padding: '1em',
        borderRadius: '10px',
    },
    aside: {
        background: '#ccccff',
        margin: '.1em',
        textAlign: 'center',
        flex: 3
    }
};

export default App
