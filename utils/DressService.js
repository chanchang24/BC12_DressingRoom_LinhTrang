export default class DressService {
    fetchData = () => {
        return axios({
            url: 'https://60eec015eb4c0a0017bf45ee.mockapi.io/vdr',
            method: 'GET'
        })
    }
}