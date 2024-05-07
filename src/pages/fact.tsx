/************************
 * Made by [MR Ferry™]  *
 * on Mei 2024          *
 ************************/

import React, {useEffect, useState} from "react"

const App = () => {
    const [fact, setFact] = useState<any>({});
    useEffect(() => {
        getFact()
            .then(f => {
                setFact(f)
            })
    }, []);

    return (
        <div className="app">
            <h1>this is cat facts</h1>
            <small>
                {`facts: ${fact?.data ?? ''}`}
            </small>
        </div>
    )
}

async function getFact() {
    let r = await fetch("https://meowfacts.herokuapp.com/")
    return await r.json();
}

export default App