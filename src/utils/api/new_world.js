const { request, gql } = require('graphql-request');

async function craftsApi(queryParam = "") {
    if (queryParam !== "") {
        queryParam = "(" + queryParam + ")";
    }
    const query = gql`{ 
        crafts ${queryParam}{ 
            name
        }
    }`;

    try {
        const data = await request('http://localhost:3001/api', query);
        console.log(data);
        return data;
    } catch (err) {
        console.log(err)
    }
}

async function craftApi(name) {
    
    const query = gql`{ 
        craft (name: "${name}"){ 
            name,
            tier,
            ingredients {
                name,
                quantity
            },
            level,
            station {
                name,
                level
            }
        }
    }`;

    try {
        const data = await request('http://localhost:3001/api', query);
        return data;
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    craftsApi,
    craftApi
}