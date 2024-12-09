import {useState} from 'react'
import './App.css'

function App() {
    const [name, setName] = useState('')
    const [isNameVisible, setIsNameVisible] = useState(false)

        const handleNameSubmit = () => {
        // Check if the input is empty
        if (name.trim() === '') {
            alert("Don't QA test me. Enter your name.");
            return;
        }

        // Show the name display
        setIsNameVisible(true);
    };

    const handleInputChange = (event) => {
        let name_temp = event.target.value;
        setName(name_temp.charAt(0).toUpperCase() + name_temp.slice(1));
    };
    return (
        <>
            <span className="star">&#9733;</span>

            <h1 className="star_header">
                Fun
            </h1>
            <h1 className="tree_top">
                Lovin
            </h1>
            <h1 className="tree_middle">
                Family
            </h1>
            <h1 className="tree_bottom">
                Secret Santa
            </h1>
            <div>
                {/* create an input field and submit button */}
                <input id="ss_name"
                       className="name_input"
                       type="text"
                       placeholder="Enter your name..."
                       value={name}
                       onChange={handleInputChange}/>
            </div>

            <button className="name_submit" onClick={handleNameSubmit}>Submit</button>

            {/* display the name conditionally */}
            {isNameVisible && <h2 id="name_display">Hello {name}</h2>}
        </>
    )
}

export default App
