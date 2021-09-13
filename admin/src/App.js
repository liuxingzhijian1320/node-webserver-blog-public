import './App.scss';
// import { Provider } from 'react-redux';
import Router from './router/index';
import history from './assets/scripts/history';

function App() {
  return (
    // store={store}
    // <Provider>
    <Router history={history} />
    // </Provider>
  );
}

export default App;
