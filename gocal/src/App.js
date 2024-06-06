import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Docs from './pages/Course'
import History from './pages/History'
import Settings from './pages/Settings'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/history' element={<History />} />
                    <Route path='/Docs' element={<Docs />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;