/************************
 * Made by [MR Ferry™]  *
 * on Mei 2024          *
 ************************/

import React from "react"

const App = ({serverData}: any) => {
    let data = serverData?.data

    return (
        <div className="app">
            <h1>this is cat facts</h1>
            <small>
                {`facts: ${data ?? ''}`}
            </small>
        </div>
    )
}

export async function getServerData() {
    let r = await fetch("https://meowfacts.herokuapp.com/")
    let props = await r.json();
    return {
        status: 200, // The HTTP status code that should be returned
        props: props, // Will be passed to the page component as "serverData" prop
        headers: {}, // HTTP response headers for this page
    }
}

export default App