import {AppRegistry} from 'react-native';
import App from './src/App';
import i18n from './languages/i18n';
import { Provider as PaperProvider } from 'react-native-paper';
import {name as appName} from './app.json';

export default function Main() {
    return (
      <PaperProvider>
        <App />
      </PaperProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
