const BASEURL = 'http://localhost:3000';
const HEADERS = {
    'Content-Type': 'application/json',
};

// Función auxiliar para verificar si la respuesta es exitosa
const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
};

// Get data
const getData = async (ENDPOINT) => {
    return fetch(`${BASEURL}/${ENDPOINT}`)
        .then(checkResponse)
        .then(response => response.json())
        .catch(error => console.error('Error al obtener la información:', error));
};

// Create Data
const postData = async (ENDPOINT, data) => {
    return fetch(`${BASEURL}/${ENDPOINT}`, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify(data),
    })
        .then(checkResponse)
        .then(response => response.json())
        .catch(error => console.error('Error al crear el registro:', error));
}

//Update data
const putData = async (ENDPOINT, id, data) => {
    return fetch(`${BASEURL}/${ENDPOINT}/${id}`, {
        method: "PUT",
        headers: HEADERS,
        body: JSON.stringify(data),
    })
        .then(checkResponse)
        .then(response => response.json())
        .catch(error => console.error('Error al actualizar el registro:', error));
}

//Delete data
const deleteData = async (ENDPOINT, id) => {
    return fetch(`${BASEURL}/${ENDPOINT}/${id}`, { 
        method: 'DELETE' 
    })
        .then(checkResponse)
        .then(response => response.json())
        .catch(error => console.error('Error al eliminar el registro:', error));
}

export {
    getData,
    postData,
    putData,
    deleteData
}