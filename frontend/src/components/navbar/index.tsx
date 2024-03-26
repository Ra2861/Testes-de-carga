import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <div className="bg-[#41456F] w-56 h-screen">
      <div className="flex flex-row justify-center">
        <div className="bg-[#EEEEEE] w-16 h-16 rounded-full mt-16 flex justify-center items-center">
          <div className="">
            <img alt="" src="../src/assets/briefcase.svg"></img>
          </div>
        </div>
      </div>

      <div className="text-white space-y-5 ">
        <div className="justify-left flex flex-row pt-16 ml-8 text-gray-500">
          <img className="pr-4" alt="" src="../src/assets/trello.svg"></img>
          Dashboard
        </div>

        <div
          onClick={() => navigate('/home/search')}
          className={`justify-left flex flex-row ml-8 cursor-pointer hover:bg-gray-700 ${location.pathname === '/home/search' ? 'text-[#05CD78]' : ''}`}
        >
          <img className="pr-4" alt="" src="../src/assets/list.svg"></img>
          Pesquisa
        </div>

        <div className="justify-left flex flex-row ml-8  text-gray-500">
          <img
            className="pr-4"
            alt=""
            src="../src/assets/message-square.svg"
          ></img>
          Interações
        </div>

        <div
          onClick={() => navigate('/home/client')}
          className={`justify-left flex flex-row ml-8 cursor-pointer hover:bg-gray-700 ${location.pathname === '/home/client' ? 'text-[#05CD78]' : ''}`}
        >
          <img className="pr-4" alt="" src="../src/assets/users.svg"></img>
          Clientes
        </div>

        <div className="justify-left flex flex-row pt-28 ml-8 text-gray-500">
          <img
            className="pr-4 mb-5"
            alt=""
            src="../src/assets/settings.svg"
          ></img>
          Configurações
        </div>

        <div className="flex justify-center">
          <img className="pr-4" alt="" src="../src/assets/logo.png"></img>
        </div>
      </div>
    </div>
  )
}

export default Navbar
