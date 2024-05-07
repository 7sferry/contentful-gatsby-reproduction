/************************
 * Made by [MR Ferry™]  *
 * on Mei 2024          *
 ************************/

import React from "react"

const App = ({serverData}: any) => {
    let meanings = serverData.meanings;

    return (
        <div className="app">
            <h1>
                this is a dictionary
            </h1>
            <small>
                {meanings ? `${serverData.word} means:` : `invalid word`}
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

export async function getServerData(context: any) {
    let param = context.params.word;
    let r = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + param)
    let dict = await r.json();

    let props = r.status !== 200 ? {} : {word: dict[0].word, meanings: dict[0].meanings};
    return {
        status: 200, // The HTTP status code that should be returned
        props: props, // Will be passed to the page component as "serverData" prop
        headers: {}, // HTTP response headers for this page
    }
}

export default App