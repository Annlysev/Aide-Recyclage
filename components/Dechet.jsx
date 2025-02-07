import { useState, useEffect } from "react";


const Dechet = ({category, infosDechets= [], infoCollecte }) => {

    const [dechets, setDechets] = useState([]);

    useEffect(() => {
        const result = infosDechets.filter(dechet => dechet.categorie === category);
        setDechets(prev => result);
        }, [category]);
    console.log(dechets);

    useEffect(() => {
        const result = infosDechets.filter(dechet => dechet.infocollecte === infoCollecte);
        setDechets(prev => result);
    }, [infoCollecte]);
    console.log(dechets);

return (
    <div>
        <h1 style={styles.h1}> Guide de tri des déchets</h1>

        {dechets && dechets.length > 0 ?(
        <table>
           <thead>
           <tr style={styles.tr}>
               {/*<th>ID</th>*/}
               <th>Dechets</th>
               <th>Catégorie</th>
               <th>InfoCollecte</th>
           </tr>
           </thead>
           <tbody>
           {dechets.map((item) => (
               <tr key={item.id}>
                   {/*<td>{item.id}</td>*/}
                   <td style={styles.td}>{item.dechet}</td>
                   <td style={styles.td}>{item.categorie}</td>
                   <td style={styles.td}>{item.infocollecte}</td>
               </tr>
           ))}
           </tbody>
        </table>
            ) : (
                <p>Aucun déchet trouvé</p>
)}
    </div>
)}

const styles = {
    h1:{
        fontSize: '5rem',
        color:"darkgreen",
        textAlign: 'center',
    },
    tr: {
        padding: '1em',
        color: 'green',
    },
    td:{
        padding: '1em',
        fontSize: '2rem',
        textAlign: 'left',
    }
}
export default Dechet;