const url = "https://course-api.com/react-tours-project";
import Tours from "./components/Tours";

const App = () => {
  return (
    <div>
      <Tours url={url} />
    </div>
  );
};
export default App;
