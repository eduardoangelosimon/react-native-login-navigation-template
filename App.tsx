import React, {type PropsWithChildren} from 'react';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import { RootNavigation } from './src/routes';

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
