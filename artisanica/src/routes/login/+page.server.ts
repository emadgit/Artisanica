import { redirect, fail } from '@sveltejs/kit';
import { type LoginResponse } from "$lib"
import ky from "ky";


export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const username = data.get("username");
		const password = data.get("password")

		const response:LoginResponse = await ky.post('http://localhost:3000/api/v1/login', {json: {"email": username, "password": password}}).json();
		if (response.status === "OK" && response.user && response.user.id) {
			return redirect(303, "/portal")
		}
		return fail(400, { message: 'Invalid login' });
	}
};

