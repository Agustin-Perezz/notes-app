import { NoteProp } from '../../models/Note';

export const Note = ({
  title,
  description
}: NoteProp ) => {
  return (
    <div>
      <h4> { title } </h4>
      <p>
        { description }
      </p>
    </div>
  )
}
