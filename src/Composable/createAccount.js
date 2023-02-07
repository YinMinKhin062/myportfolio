import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref } from 'vue';

let error = ref(null);
let newAccount = async (name, email, password) => {
	try {
		let res = await createUserWithEmailAndPassword(auth, email, password);
		updateProfile(auth.currentUser, { displayName: name });
		return res;
	} catch (e) {
		error.value = e.code;
		console.log(e.message);
	}
};

let createAccount = () => {
	return { error, newAccount };
};
export default createAccount;
