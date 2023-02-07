import { onAuthStateChanged } from 'firebase/auth';
import { ref } from 'vue';
import { auth } from '../firebase/config';

// let error=ref('');
let userDetails = ref(auth.currentUser);
onAuthStateChanged(auth, user => {
	userDetails.value = user;
});
let getUser = () => {
	return { userDetails };
};
export default getUser;
