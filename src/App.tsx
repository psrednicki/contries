import { useEffect, useRef, useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import { Country, fetchApiList } from "./utils/api";
import Input from "./components/Input";
import InfoBox from "./components/InfoBox";

const App: React.FC = () => {
  const isFirstMounted = useRef(true);

  const [countires, setCountires] = useState<Country[]>([]);
  const [query, setQuery] = useState<string>();

  const fetchCountries = async (x?: string | undefined) => {
    try {
      const results = await fetchApiList(x);
      if (results) {
        setCountires(results);
      } else {
        setCountires([]);
      }
    } catch (error) {
      setCountires([]);
    }
  };

  useEffect(() => {
    if (isFirstMounted) {
      isFirstMounted.current = false;
    }
    fetchCountries();
  }, []);

  useEffect(() => {
    console.log("QUER", query);
    fetchCountries(query);
  }, [query]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <Header title="Where in the world" />
      <Content>
        <div className="p-4">
          <Input onChange={handleChange} />
          <p className="text-lg">This is the content of my app.</p>
          {countires.map(InfoBox)}
        </div>
      </Content>
    </div>
  );
};

export default App;
