import axios, { AxiosResponse } from 'axios';


const ApiCall = async (url: string) => {
    const api: AxiosResponse<any> = await axios.get(url);


    console.log(api, 'api');

}

export default ApiCall;