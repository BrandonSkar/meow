import {loadTwitchConfig, twitch} from "./loadTwitchConfig";

let twitchConfig = {};
loadTwitchConfig()
    .then((config) => {
        if(config instanceof Object && !Array.isArray(config)) {
            twitchConfig = config
        }
    })

function saveTwitchConfig() {
    twitch.configuration.set("broadcaster", "1", JSON.stringify(twitchConfig))
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('submitBtn').addEventListener('click', async function () {
        const kartId = document.getElementById('kartIdInput').value;
        twitchConfig.kartId = kartId;
        saveTwitchConfig()
        data = (await fetchMk64(kartId)).data
        document.getElementById('fail').innerHTML = "";
        document.getElementById('success').innerHTML = "";
        if (JSON.stringify(data.nonsc) === '{}' && JSON.stringify(data.sc) === '{}'){
            document.getElementById('fail').innerHTML = "No data found";
        } else {
            document.getElementById('success').innerHTML = `Data found for ${data.nonsc?.name ?? data.sc?.name}`;
        }
    });

    const imageContainers = document.querySelectorAll('.image-container');
    const defaultImage = document.getElementById('banner');
    let selectedImage = "banner"

    imageContainers.forEach(container => {
        container.addEventListener('click', () => {
            imageContainers.forEach(item => item.classList.remove('selected'));
            defaultImage.classList.remove('selected');
            container.classList.add('selected');
            selectedImage = container.id;
            sendImageId(selectedImage);
        });
    });

    if (defaultImage) {
        defaultImage.addEventListener('click', () => {
            defaultImage.classList.add('selected')
            imageContainers.forEach(item => item.classList.remove('selected'));
            selectedImage = "banner";
            sendImageId(selectedImage);
        });
    }

    function sendImageId(imageId) {
        twitchConfig.imageId = imageId;
        saveTwitchConfig();
    }
})

const fetchMk64 = async (kartId) => {
    if (kartId) {
        mk64LastCall = Date.now();
        const url = `https://7poyfivi22.execute-api.us-east-2.amazonaws.com/default/mk64-ranks?kartId=${kartId}`;
        return await fetch(url)
            .then((res) => res.json());
    }
};
