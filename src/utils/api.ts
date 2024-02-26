type NameProperties = {
  common: string;
  nativeName: object;
  official: string;
};

export type Country = {
  name: NameProperties;
};

function isBasicData(obj: Country): obj is Country {
  return "name" in obj;
}

const fetchApiList = async (
  countryCode: string = "PL"
): Promise<Country[] | undefined> => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/alpha/" + countryCode
    );
    if (response.ok) {
      const countries = await response.json();
      console.log("COUTNRIES API", countries);
      return countries.map(
        (country: Country) =>
          isBasicData(country) && { name: country.name }
      );
    } else {
      throw new Error("WRONG RESPONSE");
    }
  } catch (error) {
    console.error(error);
    throw new Error("FAILED TO FETCH");
  }
};

export { fetchApiList };
