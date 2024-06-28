import React from 'react';
import ReactDOM from 'react-dom/client';
import ViewerPage from "./viewerPage.jsx";
import {loadTwitchConfig} from './loadTwitchConfig.js';

window.addEventListener("DOMContentLoaded", async () => {
    const twitchConfig = await loadTwitchConfig();
    const url = `https://7poyfivi22.execute-api.us-east-2.amazonaws.com/default/mk64-ranks?kartId=${twitchConfig.kartId}`;
    const data = await fetch(url)
        .then((res) => res.json())
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <ViewerPage data={data.data} image={twitchConfig.imageId}/>
        </React.StrictMode>
    )
})