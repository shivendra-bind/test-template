import { BrowserRouter, Route, Routes } from 'react-router-dom'

import BaseLayout from '../layouts/Base'
import DashboardLayout from '../layouts/Dashboard/DashboardLayout'
import { AboutPage, NoMatchPage } from '../pages'
import { DashboardPage } from '../pages/dashboard'
import { HomePage } from '../pages/home'

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </BrowserRouter>
  )
}
