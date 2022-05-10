import { useMutation, useQueryClient, useQuery, QueryCache } from 'react-query';
import { addNote, getNotes, updateNote, getNote } from '../actions/notes';
import { NoteProp } from '../models/Note';

const KEY = 'notes';

export const useNotes = () => {
  return useQuery( [KEY], getNotes );
}

export const useNote = ( noteId: string ) => {
  return useQuery( [KEY, noteId], () => getNote( noteId ));
}

export const useMutateNote = ( id?: string ) => {
  
  const queryClient = useQueryClient();

  if ( !id ) {
    return useMutation( addNote , {
      onSuccess: () => queryClient.invalidateQueries( [KEY] ),
      onMutate: ( newNote ) => {
        console.log( newNote)
        queryClient.setQueryData( [KEY], (prevNotes: NoteProp[] | undefined) => prevNotes!.concat( newNote ) );
      }
    });
  } else {
    return useMutation( updateNote , {
      onSuccess: () => queryClient.invalidateQueries( [KEY] ),
      onMutate: ( newNote ) => {
        const oldNotes: NoteProp[] | undefined = queryClient.getQueryData([KEY]);
        const notesUpdated = oldNotes!.map(( oldNote ) => {
          if ( oldNote.id === id ) { return newNote } 
          else { return oldNote }
        });
        queryClient.setQueryData([KEY], notesUpdated);
      }
    })
  }
}
  