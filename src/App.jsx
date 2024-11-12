import React, { Profiler } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './layouts/Homepage/Index';
import Home from './features/Homepage/Pages/Home';
import Products from './features/Products/Pages/Products';
import ProductDetails from './features/Products/Pages/ProductDetails';
import LoginPage from './features/Auth/Pages/Login';
import Register from './features/Auth/Pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorFallback from './features/Components/ErrorFallback';
import DashboardLayout from './layouts/UserDashboard/Index';
import Dashboard from './features/UserDashboard/Pages/Dashboard';
import Profile from './features/UserDashboard/Pages/Profile';
import Orders from './features/UserDashboard/Pages/Orders';
import Settings from './features/UserDashboard/Pages/Settings';
import 'primereact/resources/primereact.min.css';
import Cart from './features/Cart/Pages/Cart';
import AboutUs from './features/Common Pages/Pages/AboutUs';
import ContactUs from './features/Common Pages/Pages/ContactUs';

function App() {

	return (

		<BrowserRouter>
			<ToastContainer closeOnClick />
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<Routes>
					<Route path='/' element={<Index />}>
						<Route index element={<Home />} />
						<Route path='/products' element={<Products />} />
						<Route path='/product/details/:id' element={<ProductDetails />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<Register />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/about-us' element={<AboutUs />} />
						<Route path='/contact-us' element={<ContactUs />} />
					</Route>
					<Route path='dashboard' element={<DashboardLayout />}>
						<Route index element={<Dashboard />} />
						<Route path='profile' element={<Profile />} />
						<Route path='orders' element={<Orders />} />
						<Route path='settings' element={<Settings />} />
					</Route>
				</Routes>
			</ErrorBoundary>
		</BrowserRouter>

	);
}

export default App;
