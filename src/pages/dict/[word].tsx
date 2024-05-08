/************************
 * Made by [MR Ferry™]  *
 * on Mei 2024          *
 ************************/

import React, {useEffect, useState} from "react"

const App = (context: any) => {
    console.log(JSON.stringify(context))
    let param = context?.params?.word ?? context?.query?.word;
    const [meanings, setMeanings] = useState([])

    async function getMeanings() {
        let r = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + param)
        return await r.json();
    }

    useEffect(() => {
        getMeanings()
            .then(dict => {
                setMeanings(dict[0].meanings)
            });
    }, []);

    return (
        <div className="app">
            <h1>
                this is a dictionary
            </h1>
            <small>
                {meanings ? `${param} means:` : `invalid word`}
            </small>
            <ul>
                {meanings && meanings.map((m: any) => m.definitions[0]).map((meaning: any) => {
                    return (<li key={meaning.definition}>
                        {`${meaning.definition}`}
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default App