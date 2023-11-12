import axios from "@/core/axios";

type loginParam = {
        email:string,
        password:string,
}


interface loginResponseDTO {
    token:string
}

export const login = async (values:loginParam): Promise<loginResponseDTO> =>{
        const {data} = await axios.post('/auth/login' , values)

        return data;
}

export const registration = async (values:loginParam): Promise<loginResponseDTO> =>{
    const {data} = await axios.post('/auth/register' , values)
    console.log(data)
    return data;
}

export const tryIt = ()=> {
    console.log(1111111);
}