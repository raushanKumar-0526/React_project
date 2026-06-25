import './App.css'
import Login from './component/login';
import Prifile from './component/Prifile';
import UserContextProvider from './context/userContextProvider';

function App() {

	

	return (
	<UserContextProvider>
		<h2>Login to your Account</h2>
		<Login />
		<Prifile />
	</UserContextProvider>
	)
}

export default App
