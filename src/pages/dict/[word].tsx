/************************
 * Made by [MR Ferry™]  *
 * on Mei 2024          *
 ************************/

/**
 * using csr param routes
 */
import React, {useEffect, useState} from "react"

const App = (context: any) => {
    let param = context?.params?.word ?? context?.query?.word;
    const [meanings, setMeanings] = useState([])

    async function getMeanings() {
        let r = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + param)
        return r.status === 200 ? r.json() : [];
    }

    useEffect(() => {
        getMeanings()
            .then(dict => {
                if (!dict || dict.length === 0) {
                    return
                }
                setMeanings(dict[0].meanings)
            });
    }, []);

    return (
        <div className="app">
            <h1>
                this is a dictionary
            </h1>
            <small>
                {param && meanings.length > 1 && `${param} means: ${meanings.length > 1 ? '' : `invalid word`}`}
            </small>
            <ul>
                {meanings.length > 1 && meanings.map((m: any) => m.definitions[0]).map((meaning: any) => {
                    return (<li key={meaning.definition}>
                        {`${meaning.definition}`}
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default App