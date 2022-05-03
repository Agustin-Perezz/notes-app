import { useMutation, useQueryClient, useQuery } from 'react-query';
import { addNote, getNotes } from '../actions/notes';

const KEY = 'notes';

export const useMutateNote = ( id: string ) => {
  
  const queryClient = useQueryClient();
  // if ( !id ) next(); es un addnote
  return useMutation( addNote , {
    onSuccess: () => {
      queryClient.invalidateQueries( [KEY] );
    }
  });
  // else es un uptade estonces retornamos lso mismo pero con update note y diferente logica obvio

}

export const useNotes = () => {
  return useQuery( [KEY], getNotes );
}
  