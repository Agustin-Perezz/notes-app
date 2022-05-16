import toast from 'react-hot-toast';

import { useMutation, useQueryClient, useQuery } from 'react-query';
import { addNote, getNotes, updateNote, getNote, deleteNote } from '../actions/notes';
import { NoteProp } from '../models/Note';

const KEY = 'notes';

export const useNotes = () => {
  return useQuery( [KEY], getNotes );
}

export const useNote = ( noteId: string ) => {
  return useQuery( [KEY, noteId], () => getNote( noteId ) );
}

export const useMutateNote = ( id?: string ) => {
  
  const queryClient = useQueryClient();

  if ( !id ) {
    return useMutation( addNote , {
      onSuccess: () => {
        toast.success('Successfully created!', { style: { border: '0.5px solid #5AB75B'}})
        queryClient.invalidateQueries( [KEY] )
      },
      onMutate: ( newNote ) => {
        queryClient.setQueryData( [KEY], (prevNotes: NoteProp[] | undefined) => prevNotes!.concat( newNote ) );
      }
    });
  } else {
    return useMutation( updateNote , {
      onSuccess: () => {
        toast.success('Successfully updated!', { style: { border: '0.5px solid #4067DB'}})
        queryClient.invalidateQueries( [KEY] )
      },
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

export const useDeleteNote = () => {

  const queryClient = useQueryClient();
  return useMutation( deleteNote , {
    onSuccess: () => {
      toast.success('Successfully eliminated!', { style: { border: '0.5px solid #F37A7A'}});
      queryClient.invalidateQueries( [KEY ])
    },
    onMutate: ( noteId ) => {
      const currentNotes: NoteProp[] | undefined = queryClient.getQueryData([KEY]);
      const leakedNotes = currentNotes?.filter( note => note.id !== noteId );
      queryClient.setQueryData([KEY], leakedNotes);
    }
  })

}
  