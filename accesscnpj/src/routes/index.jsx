import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import DownloadEmpresas from '../pages/empresasDownload'

export default function RouterApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/download_empresas' element={<DownloadEmpresas />} />
            </Routes>
        </BrowserRouter>
    )
}