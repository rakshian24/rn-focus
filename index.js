import { AppRegistry } from 'react-native';
import App from './src/App';
import i18n from './languages/i18n';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./src/reducers"

const store = createStore(rootReducer);

export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
