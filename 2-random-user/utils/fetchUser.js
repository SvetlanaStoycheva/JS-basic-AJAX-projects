const URL = 'https://randomuser.me/api/';

async function getUser() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const result = data.results[0];

    const {
      dob: { age },
      email,
      login: { username },
      location,
      name,
      phone,
      picture: { large },
    } = result;
    const { first, last } = name;
    const fullName = `${first} ${last}`;
    const { city, country } = location;
    const address = `${city}, ${country}`;
    return {
      age,
      email,
      address,
      name: fullName,
      phone,
      image: large,
      username,
    };
    // displayData(result);
  } catch (error) {
    return error;
  }
}
export default getUser;
