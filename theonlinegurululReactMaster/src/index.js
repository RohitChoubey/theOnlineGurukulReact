import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister()



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { AuthProvider } from './context/AuthProvider';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           <Route path="/*" element={<App />} />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// reportWebVitals();
  