import Header from "./components/Header";
import TextToSpeech from "./components/TextSpeech";
import Coutries from "./pages/Coutries";

// const router = createRouter({
//   routeTree,
//   defaultPreload: "intent",
//   defaultPreloadStaleTime: 0,
// });

const App: React.FC = () => {
  return (
    <div>
      <Header title="Where in the world" />
      <Coutries />
      <TextToSpeech />
    </div>
  );
};

export default App;
