const express = require("express");
const app = express();
const port = 5000;



const {faker} = require('@faker-js/faker');

const createCompany = () => {
  return (newComapny = {
    _id: faker.string.uuid(),
    name: faker.company.name(),  
    address: {
      bldgNum: faker.location.buildingNumber(),
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    }
  });
};



const createUser = () => {
  return (newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),  
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.string.uuid(),
  });
};
// make sure these lines are above any app.get or app.post code blocks

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/companies/new", (req,res) => {
  res.json(createCompany());
});

app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});

app.get("/api/users/company", (req, res) => {
  res.json([createUser(), createCompany()]);
});


app.listen(port, () => console.log(`Listening on port: ${port}`))
