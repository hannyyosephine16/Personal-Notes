import React from 'react';
import { createRoot } from 'react-dom/client';
import Noteapp from './components/Noteapp';

 //styling
import './styles/style.css'

const root = createRoot(document.getElementById('root'));
root.render(<Noteapp/>);