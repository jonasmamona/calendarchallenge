import "@fontsource/open-sans";
import { ReminderCalendar } from "./presentation/pages/reminderCalendar/reminderCalendar.component";
import { Provider } from "react-redux";
import {store} from "./application/store";

function App() {
  return (
    <Provider store={store}>
      <ReminderCalendar />
    </Provider>
  );
}

export default App;
