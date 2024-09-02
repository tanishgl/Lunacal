import Dashboard from "./Components/Dashboard/Dashboard";
import Divider from "./Components/Divider";
import Gallery from "./Components/Gallery/Gallery";

const App = () => {
  return (
    <div className="w-max ml-auto sm:mr-1 lg:mr-4 flex flex-col items-center gap-4 sm:mt-12 lg:mt-16 mb-16">
      <Dashboard></Dashboard>
      <Divider></Divider>
      <Gallery></Gallery>
      <Divider></Divider>
    </div>
  );
};

export default App;
