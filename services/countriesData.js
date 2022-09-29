const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJjYWxsZXN0YW5seUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJfOTNadHV5SWRxSkhrcHhQYWNSUzJrR0ZLNC1IZG9VV0ZOTnYxZGdPSzN1MTRmOU9TTi15YmlGV0ltTURpQmYwaTBVIn0sImV4cCI6MTY2NDUxMzAxNX0.5wTmOl3EIWRMUN9tya4mpVafRX30Zy-ORqb860okAqk"
  );
  myHeaders.append("Accept", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };


export const getCountryData = async () => {
  try {
    const response = await fetch("https://www.universal-tutorial.com/api/countries", requestOptions);
    const data = await response.json();
    return data.map(el=> {
        const name = el.country_name
        const short = el.country_short_name
        const phone = el.country_phone_code
        return {
            name,
            short,
            phone,
        }
    })

  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getStatesData = async (country) => {
  try {
    const response = await fetch(`https://www.universal-tutorial.com/api/states/${country}`, requestOptions);
    return await response.json();

  } catch (error) {
    console.log(error);
    return [];
  }
}

export const getCitiesData = async (state) => {
  try {
    const response = await fetch(`https://www.universal-tutorial.com/api/cities/${state}`, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.log(error);
    return [];
  }
}

