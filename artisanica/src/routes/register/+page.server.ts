import { redirect, fail } from '@sveltejs/kit';
import { type LoginResponse } from "$lib"
import ky from "ky";


export const actions = {
	register: async ({ request }) => {
        try {
            const data = await request.formData();
            const username = data.get("username");
            const password = data.get("password")
            
    
            const response:LoginResponse = await ky.post('http://localhost:3000/api/v1/register', {json: {"email": username, "password": password}}).json();
            console.log("response: ", response)
            if (response.status === 'OK' && response.user && response.user.id) {
                return { success: true };
            }
        } catch (e) {
            return fail(400, { message: 'Registration failed, try again later.' });
        }
	}
};

