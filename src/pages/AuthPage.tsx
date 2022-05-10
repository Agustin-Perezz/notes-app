import { AuthComponent } from "../components/auth"

import wave from '../assets/icons/svg.png'

export const AuthPage = () => {
  return (
    <div className="container">
      <AuthComponent />
      <img className="wave" src={ wave} alt="" />
    </div>
  )
}
