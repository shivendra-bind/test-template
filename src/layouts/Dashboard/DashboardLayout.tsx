import { Outlet } from 'react-router-dom'

import { Menu } from './Menu'
import Sidebar from './SideBar'

const DashboardLayout = () => {
  return (
    <div className="md:block">
      <Menu />
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
