import { actions } from "../data";
import ActionList from "./ActionList";
import Filter from "./Filter";

function App() {
  return (
    <section>
      <Filter type={"action"} values={actions} />
      <ActionList />
    </section>
  );
}

export default App;
