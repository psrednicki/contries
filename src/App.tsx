import { useEffect, useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import { Country, fetchApiList } from "./utils/api";
import Input from "./components/Input";
import InfoBox from "./components/InfoBox";
import _debounce from "lodash/debounce";
import TextToSpeech from "./pages/TextSpeech";

const App: React.FC = () => {
  const [countires, setCountires] = useState<Country[]>([]);
  const [query, setQuery] = useState<string>();

  useEffect(() => {
    fetchCountries(query);
  }, [query]);

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const debouncedSearch = _debounce(handleChange, 400);

  return (
    <div>
      <Header title="Where in the world" />
      <Content>
        <div className="p-4">
          <Input onChange={debouncedSearch} />
          {!!countires.length && <p className="text-lg">COUNTRIES:</p>}
          {countires.map(InfoBox)}
        </div>
      </Content>
      <TextToSpeech />
    </div>
  );
};

export default App;
