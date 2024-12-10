import {useState} from 'react'
import './App.css'
import secret_santa_list from '/scripts/secret_santa_list.json'

function App() {
    const [name, setName] = useState('')
    const [isNameVisible, setIsNameVisible] = useState(false)
    const [displayText, setDisplayText] = useState('')

    const handleNameSubmit = () => {
        // Check if the input is empty
        if (name.trim() === '' || name.match(/[^a-zA-Z]/) ) {
            alert("Don't QA test me. Enter your name.");
            return;
        }

        // Show the name display
        setIsNameVisible(true);

        // Check if the name is in the secret santa list
        if (secret_santa_list[name.toLowerCase()]) {
            let ss_name = secret_santa_list[name.toLowerCase()];
            setDisplayText(`You are the Secret Santa for ${ss_name.charAt(0).toUpperCase() + ss_name.slice(1)}.`);
        } else {
            setDisplayText(`${name} is not in the Secret Santa list. Please contact Arjun.`);
        }
    };

    const handleInputChange = (event) => {
        let name_temp = event.target.value;
        setName((name_temp.charAt(0).toUpperCase() + name_temp.slice(1).trim()));
    };
    return (
        <>
            <span className="star">&#9733;</span>

            <h1 className="star_header">
                F<span className="star_header_middle">u</span>n
            </h1>
            <h1 className="tree_top">
                Lo<span className="tree_top_middle">v</span>in
            </h1>
            <h1 className="tree_middle">
                <span className="tree_middle_left">F</span>am<span className="tree_middle_right">i</span>ly
            </h1>
            <h1 className="tree_bottom">
                S<span className="tree_bottom_left">e</span>cret Sant<span className="tree_bottom_right">a</span>
            </h1>
            <div>
                <input id="ss_name"
                       className="name_input"
                       type="text"
                       placeholder="Enter your name..."
                       value={name}
                       onChange={handleInputChange}/>
            </div>

            <button className="name_submit" onClick={handleNameSubmit}>Submit</button>

            {/* display the name conditionally */}
            {isNameVisible && <div>
                <h2 id="name_display"><span>🎅</span>   {displayText}    <span>🎅</span></h2>
            </div>}
        </>
    )
}

export default App
