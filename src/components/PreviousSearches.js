import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function PreviousSearches(){
    const searches = ['Escabeche', 'Pritong Talong', 'Adobo', 'juice', 'Menodo', 'salad', 'ice cream', 'Chicken Curry', 'Fried Chicken', 'soup'] 

    return (
        <div className="previous-searches section">
            <h2>Best Seller Menu</h2>
            <div className="previous-searches-container">
                { searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {search}
                </div>)) }
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search ..." />
                <button className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}