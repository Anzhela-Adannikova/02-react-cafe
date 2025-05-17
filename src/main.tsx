// import { StrictMode } from 'react'
// import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById("root")!).render(
//   <div>
//     <h1>Welcome to React</h1>
//     <p>
//       This is JSX — it looks like HTML, but it's not quite the same. It has its
//       own rules!
//     </p>
//   </div>
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );
// src/main.tsx

import { createRoot } from "react-dom/client";
import App from "./components/App/App";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
