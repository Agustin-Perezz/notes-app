import { useMutation, useQueryClient, useQuery } from 'react-query';
import { addNote, getNotes } from '../actions/notes';

const KEY = 'notes';

export const useMutateNote = () => {
  
  const queryClient = useQueryClient();
  return useMutation( addNote , {
    onSuccess: () => {
      queryClient.invalidateQueries( [KEY] );
    }
  });

}

export const useNotes = () => {
  return useQuery( [KEY], getNotes );
}
