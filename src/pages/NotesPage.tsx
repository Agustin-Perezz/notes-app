import { ListNotes, NavBar } from "../components/notes"


export const NotesPage = () => {
  return (
    <div>
      <NavBar />
      <ListNotes />
      <button> add note </button>
      <footer> develop by banana agustin </footer>
    </div>
  )
}
