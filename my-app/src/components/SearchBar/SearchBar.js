// import css
import { useState } from 'react';
export default function SearchBar(props) {
    const [searchQuery, setSearchQuery] = useState('');
    // event handler
    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You asked "${searchQuery}"`);
        console.log(`You asked "${searchQuery}"`);
    };
    return (
        <form onSubmit={handleSubmit} className="search-form">
            <label htmlFor="search-input" className="search-label">
                Ask Fermy: 
                <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={handleChange}
                className="search-input"
                />
            </label>
            <br></br>
            <button type="submit" className="search-button">Estimate</button>
        </form>
        
    );
}