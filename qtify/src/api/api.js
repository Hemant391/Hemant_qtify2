import axios from 'axios';

export const endpoint= "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums=async()=>{
    try{
        const response= await axios.get(`${endpoint}/albums/top`)
        // console.log(response)
        return response.data;
    }catch(e){
        console.log(e)
    }
}

export const fetchNewAlbums =async()=>{
    try{
        const resp=await axios.get(`${endpoint}/albums/new`);
        return resp.data;
    }catch(e){
        console.log(e)
    }
}

export const fetchSongs =async ()=>{
    try{
        const resp=await axios.get (`${endpoint}/songs`);
        // console.log(resp)
        return resp.data;
    }catch(e){
        console.log(e)
    }
};
export const fetchFilters =async ()=>{
    try{
        const resp=await axios.get (`${endpoint}/genres`);
        // console.log(resp)
        return resp.data;
    }catch(e){
        console.log(e)
    }
}