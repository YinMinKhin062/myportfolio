import { signOut } from 'firebase/auth';
import { ref } from 'vue';
import { auth } from '../firebase/config';

let error = ref('');
let logoutAcc = async () => {
	try {
		await signOut(auth);
		console.log('logout');
	} catch (e) {
		error.value = e.message;
		console.log(e.message);
	}
};
let logoutfromAcc = () => {
	return { error, logoutAcc };
};

export default logoutfromAcc;
