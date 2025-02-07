import {useEffect, useState} from "react";
import {fetchGuideDeTri} from "../../Service/API.jsx";
import Dechet from "../Dechet.jsx";



const MenuDechet =() => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [infosDechets, setInfosDechets] = useState([]);
  const [selectedInfoCollect, setSelectedInfoCollect] = useState("");
  const [infoCollect, setInfoCollect] = useState([]);


  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleInfoCollectChange = (event) => {
    setSelectedInfoCollect(event.target.value);
  };

  const getInfos = async () => {
    try {
      setIsLoading(true);
      const data = await fetchGuideDeTri(100);
      if (data) {
        setInfosDechets(data.results);
        if (selectedOption === 'Categorie') {
          const categorySet = new Set(data.results.map(category => category.categorie));
          // Transformation du Set en tableau via Array.from()
          const cats = Array.from(categorySet);
          setCategory(prev => cats)
        }
        if (selectedOption === 'InfoCollecte') {
          const infoCollectSet = new Set(data.results.map(infoCollect => infoCollect.infocollecte));
          const infoColl = Array.from(infoCollectSet);
          setInfoCollect(prev => infoColl)
        }
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getInfos()
  }, [selectedOption]);

  return (
      <>
        <div className="Menu">
          <h2>Menu</h2>
          <select onChange={handleChange} value={selectedOption}>
            <option value="" disabled>-- Sélectionnez une option --</option>
            <option value="Categorie">Categories</option>
            <option value="InfoCollecte">Info Collecte</option>
          </select>

          <div className="content">
            {selectedOption === "Categorie" && category && (
                <div className="section">
                  <select onChange={handleCategoryChange} value={selectedCategory}>
                    <option value="" disabled>-- Sélectionnez une option --</option>
                    {category.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
            )}
          </div>

          <div className="content">
            {selectedOption === "InfoCollecte" && infoCollect && (
                <div className="section">
                  <select onChange={handleInfoCollectChange} value={selectedInfoCollect}>
                    <option value="" disabled>-- Sélectionnez une option --</option>
                    {infoCollect.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
            )}
          </div>

        </div>
        <Dechet
            category={selectedCategory}
            infoCollecte={selectedInfoCollect}
            infosDechets={infosDechets}/>
      </>
  )
}

export default MenuDechet;
