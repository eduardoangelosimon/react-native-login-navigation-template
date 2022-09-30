import React, {useEffect, type PropsWithChildren} from 'react';
import store from './src/redux';
import { Provider } from 'react-redux';
import { RootNavigation } from './src/routes';

const session = store.getState().authenticated

const App = () => {

  return (
    <>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </>
  );
};

export default App;

