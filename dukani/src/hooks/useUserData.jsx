import Cookies from 'js-cookie'

export const useUserData = () => {
    const name = Cookies.get('user_id') ?? ''
    const full_name = Cookies.get('full_name') ?? ''
    const user_image = Cookies.get('user_image') ?? ''



    return {
        name,
        full_name,
        user_image,

    }



}