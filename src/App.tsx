import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from 'shared/Header/Header'
import { Home } from 'pages/Home/Home'
import { MonthStatics } from 'pages/MonthStatics/MonthStatics'
import { Popup } from 'shared/Header/Popup/Popup'

function App() {
	return (
		<div className='global__conainer'>
		
			<div className='container'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='month-statistics' element={<MonthStatics />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
