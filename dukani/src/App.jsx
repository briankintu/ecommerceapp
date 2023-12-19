import {FrappeProvider} from 'frappe-react-sdk'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BecomeSeller from './pages/Become'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs/Blog'
import Blogu from './pages/Blogu'
import AllProductPage from './pages/AllProductPage'
import BidhaPage from './pages/Bidhaa'
function App() {
	





	return (

		// <FrappeProvider socketPort={import.meta.env.VITE_SOCKET_PORT ?? ''} tokenParams={
		// 	useFrappeAuth 

		// }>
		<FrappeProvider socketPort={import.meta.env.VITE_SOCKET_PORT ?? '' } > 

			<BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
				<Routes>
					<Route path='/' element={< Home />} />
					<Route path='/become-seller' element={< BecomeSeller />} />
					<Route path='/ingia' element={< Login />} />
					<Route path='/jiunge' element={< Signup />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/contact-info' element={<Contact />} />
					<Route path='/blogs' element={<Blogs />} />
					<Route path='/blogu' element={<Blogu />} />
					<Route path='/products' element={<AllProductPage />} />
					<Route path='/bidhaa' element={<BidhaPage />} />
					

					



				</Routes>

			</BrowserRouter>

		</FrappeProvider>

	)
}

export default App
