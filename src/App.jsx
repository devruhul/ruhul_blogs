import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import routes from "./router/routes";
import { Provider } from "react-redux";
function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
