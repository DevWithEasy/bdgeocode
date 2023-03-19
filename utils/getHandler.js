import axios from "axios";

export async function getDistricts(id,setDistricts,setUpazillas,setUnions) {
    const res = await axios.get(`https://bdapi.vercel.app/api/v.1/district/${id}`)
    setDistricts(res.data.data);
    setUpazillas([])
    setUnions([])
}

export async function getUpazillas(id,setUpazillas,setUnions) {
    const res = await axios.get(`https://bdapi.vercel.app/api/v.1/upazilla/${id}`)
    setUpazillas(res.data.data);
    setUnions([])
}

export async function getUnions(id,setUnions) {
    const res = await axios.get(`https://bdapi.vercel.app/api/v.1/union/${id}`)
    setUnions(res.data.data);
}