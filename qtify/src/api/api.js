import axios from 'axios';

export const endpoint= "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums=async ()=>{
    try{
        const response=axios.get(`${endpoint}/albums/top`)
        return response.data;
    }catch(e){
        console.log(e)
    }
}

export const fetchNewAlbums =async()=>{
    try{
        const resp=await axios.get(`${endpoint}/albums/top`);
        return resp.data;
    }catch(e){
        console.log(e)
    }
}

export const fetchSongs =async ()=>{
    try{
        const resp=await axios.get (`${endpoint}/songs`);
        return resp.data;
    }catch(e){
        console.log(e)
    }
};
export const fetchFilters =async ()=>{
    try{
        const resp=await axios.get (`${endpoint}/genres`);
        return resp.data;
    }catch(e){
        console.log(e)
    }
}