import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';

let error = ref(null);
let accountRes = async (email, password) => {
	try {
		let res = await signInWithEmailAndPassword(auth, email, password);
		return res;
	} catch (e) {
		error.value = e.code;
		console.log(e.message);
	}
};

let signInAccount = () => {
	return { error, accountRes };
};
export default signInAccount;
