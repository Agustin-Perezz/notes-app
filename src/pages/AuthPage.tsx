import { AuthComponent } from "../components/auth"

export const AuthPage = () => {
  return (
    <div className="container">
      <AuthComponent />
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#334E9B" fillOpacity="1" d="M0,64L48,74.7C96,85,192,107,288,138.7C384,171,480,213,576,240C672,267,768,277,864,261.3C960,245,1056,203,1152,160C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  )
}
