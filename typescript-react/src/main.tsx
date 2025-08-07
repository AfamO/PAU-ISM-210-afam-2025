import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './Test.ts'
import AfamComponent from './AfamComponent.tsx'
//import Editor from './Editor.tsx'
import TextWriter, {Timer} from './Editor.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <AfamComponent/>
    <TextWriter/>
    <Timer/>
  </StrictMode>,
)
