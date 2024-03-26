import { useAuth0 } from '@auth0/auth0-react'
import track from '../../assets/track_logo.png'
import { useNavigate } from 'react-router-dom'

import './style.scss'

const Login = () => {
  const { isLoading, error, loginWithRedirect, isAuthenticated } = useAuth0()

  const navigate = useNavigate()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isAuthenticated) {
    navigate('/home/search')
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  return (
    <div className="total">
      <div className="login-container">
        <div className="right">
          <h1 className="text1">Seja bem vindo ao sistema da Track</h1>
          <h2 className="text2">Realize o login!</h2>
        </div>
        <div className="left">
          <div className="img">
            <img src={track} alt="Logo" className="logo" />
          </div>
          <h1>Clique para realizar o login</h1>
          <button className="button" onClick={() => loginWithRedirect()}>
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
