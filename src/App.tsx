import * as React from 'react';
import logo from './tr85logo.png';
import './App.css';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Store } from 'redux';
import { History } from 'history';
import { ThemeProvider } from 'emotion-theming';//https://github.com/emotion-js/emotion/tree/master/packages/emotion-theming

import Routes from './routes'
import { ApplicationState } from './store'
import LayoutContainer from './containers/LayoutContainer'
import * as themes from './styles/theme'

// Any additional component props go here.
interface MainProps {
  store: Store<ApplicationState>
  history: History
}

const App : React.FunctionComponent<MainProps> = ({store, history}) => {
  return(
    <Provider store={store}>
      <ConnectedRouter history={history}>
    	    <LayoutContainer>
            {({theme}) => (
                <ThemeProvider theme={themes[theme]}>
                  <Routes />
                </ThemeProvider>

              )}
          </LayoutContainer>
      </ConnectedRouter>

    </Provider>    
  );
}


/* const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to the blueprint</p>        
      </header>
    </div>
  );
}
*/
export default App; 
