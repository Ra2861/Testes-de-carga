import Navbar from '@/components/navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'

export default function Content() {
  return (
    <div className="flex">
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
        <Toaster />
      </div>
    </div>
  )
}
