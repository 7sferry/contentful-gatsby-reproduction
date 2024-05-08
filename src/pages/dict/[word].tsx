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
    const [meanings, setMeanings] = useState<any[]>([])

    async function getMeanings() {
        let r = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + param)
        // return await r.json()
        return r.status === 200 ? r.json() : [];
    }

    useEffect(() => {
        getMeanings()
            .then((dict: any[]) => {
                if (!dict || dict.length === 0) {
                    return
                }
                setMeanings(dict[0].meanings)
            });
    }, []);
    console.log(meanings)

    return (
        <div className="app">
            <h1>
                this is a dictionary
            </h1>
            <small>
                {meanings.length > 0 ? `${param} means:` : `invalid words`}
            </small>
            <ul>
                {meanings.length > 0 && meanings[0]?.definitions.map((meaning: any) => {
                    return (<li key={meaning.definition}>
                        {`${meaning.definition}`}
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default App