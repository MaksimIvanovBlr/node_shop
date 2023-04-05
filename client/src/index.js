import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/Userstore';
import DeviceStore from './store/DeviceStore';



export const Context = createContext(null)
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Context.Provider value = {{
        user: new UserStore(),
        device: new DeviceStore()
    }} >
        <App />
    </Context.Provider>
)