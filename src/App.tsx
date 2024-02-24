import Content from "./components/Content";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div>
      <Header title="Where in the world" />
      <Content>
        <p className="text-lg">This is the content of my app.</p>
      </Content>
    </div>
  );
}

export default App;
