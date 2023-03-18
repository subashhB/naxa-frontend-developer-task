const BASE_URL = "https://admin.naxa.com.np/api/services";

const fetchApi = async() =>{
    const response = await fetch(`${BASE_URL}`);
    if(!response.ok){
        throw new Error('Something went wrong')
    }

    const data = await response.json();
    return data;
}

export default fetchApi;