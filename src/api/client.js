import axios from "axios";

const client = axios.create();

function lookupData(response) {
    return response.data;
}

function checkStatus(response) {
    // Todo: just rely on the axios catch: not sure if this works at all (copied from the old client)
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
}

export function loadProject(projectName, cb) {
    return client.get(`https://acidjunk.github.io/drill-gui/${projectName}.json`).then(checkStatus).then(lookupData).then(cb);
}
