import React from 'react'
import ReactDOM from 'react-dom/client'

import { NotesApp } from './NotesApp';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NotesApp />
  </React.StrictMode>
)
