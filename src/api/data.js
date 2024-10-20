import axios from "axios";

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID GNdXEkFJp4rWg8PLVqLgnIltr1AM6_YGx6cFeM2pIg8'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
};

export default searchImages;
