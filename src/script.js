import axios from 'axios';


const script = {
    actions:{
        async  fetchData() {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                return response.data;
            } catch (error) {
                console.error(error,'ERROR');
            }
        },
        async  fetchGoodById(payload) {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/' + payload);
                return response.data;
            } catch (error) {
                console.error(error,'ERROR');
            }
        }
    }
}
export default script
