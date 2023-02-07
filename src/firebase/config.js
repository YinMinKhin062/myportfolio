import 'firebase/firestore';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyCwFcU8NTtSP-6lJB8Law1AB5_eBg5mW0g',
	authDomain: 'myportfolio-ac6a8.firebaseapp.com',
	projectId: 'myportfolio-ac6a8',
	storageBucket: 'myportfolio-ac6a8.appspot.com',
	messagingSenderId: '969986771155',
	appId: '1:969986771155:web:253e82dd2dd3b67c946c26',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
