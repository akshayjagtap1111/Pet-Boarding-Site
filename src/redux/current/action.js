export const SET_CURRENT_PET="SET_CURRENT_PET";

export const SET_CURRENT_PLACE="SET_CURRENT_PLACE";


export const set_current_pet =(payload)=>{
    return{
        type:SET_CURRENT_PET,
        payload
    }

}


export const set_current_place =(payload)=>{
    return{
        type:SET_CURRENT_PLACE,
        payload
    }
}