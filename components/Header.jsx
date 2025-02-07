// import SearchBar from "./SearchBar.jsx";
// import {useState} from "react";

const Header = () => {
    // const [handleSearch] = useState()

    return (
        <header style={styles.header}>
            <h1 style={styles.h1}>AIDE AU RECYCLAGE</h1>
            {/*<SearchBar label="" onSearch={handleSearch}></SearchBar>*/}
        </header>
);
};
const styles = {
    container: {
        flex: '1 1 auto',
        display: 'flex',
    },
    header: {
        background: 'blue',
        margin: '.2em',
        padding: '1em',
        borderRadius: '10px',
        textAlign: 'center',
    },
    nav: {
        background: '#a01111',
        margin: '.5em',
        padding: '.1em',
        borderRadius: '.1px',
        textAlign: 'center',
    },
    article: {
        background: '#ccc',
        margin: '.2em',
        padding: '1em',
        borderRadius: '10px',
    },
    aside: {
        background: '#13b42e',
        margin: '.1em',
        textAlign: 'center',
        flex: 3
    },
    h1:{
        fontSize: '3em',
        color: 'white',
    }
};

export default Header;

