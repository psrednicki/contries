import { useState, useEffect } from "react";
import Content from "../components/Content";
import InfoBox from "../components/InfoBox";
import Input from "../components/Input";
import { Country, fetchApiList } from "../utils/api";

const Coutries: React.FC = () => {
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

  return (
    <Content>
      <div className="p-4">
        <Input onChange={handleChange} />
        {countires.map(InfoBox)}
      </div>
    </Content>
  );
};

export default Coutries;
