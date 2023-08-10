import { Outlet } from 'react-router-dom'

import { MainNav } from './MainNav'
import { UserNav } from './UserNav'

const BaseLayout = () => {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default BaseLayout
