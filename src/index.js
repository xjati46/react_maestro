import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Auth from './components/auth';
import { CookiesProvider } from 'react-cookie';
import PelatihAdmin from './components/pelatih_admin';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function Router() {

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Route exact path='/' component={Auth} />
        <Route exact path='/admin' component={App} />
        <Route exact path='/admin/dash' component={PelatihAdmin} />
      </BrowserRouter>
    </React.StrictMode>
  )
};

ReactDOM.render(<Router/>, document.getElementById('root'));

serviceWorker.unregister();