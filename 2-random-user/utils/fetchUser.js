const URL = 'https://randomuser.me/api/';

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const person = data.results[0];
  console.log(person);

  const {
    email,
    phone,
    picture: { large: personImg },
    login: { username },
    name: { first: firstName, last: lastName },
    dob: { age },
    location: {
      street: { name: streetName, number: streetNumber },
    },
  } = person;

  //the properties names that we return should match the data-lable in the html
  return {
    email,
    phone,
    personImg,
    username,
    name: `${firstName} ${lastName}`,
    street: `${streetNumber} ${streetName}`,
    age,
  };
};

export default getUser;
