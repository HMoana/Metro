# Metro NZ Property Listing App

## Dockerized MERN Project

---

### **Overview**

- Week 1: Will be setting up the infrastructure for UX Designer's application to run using docker containers, docker compose and MongoDB

- Week 2: Creating the application based on the version of prototype design received from UX Designers at the end of Week 1.

---

### **About our projects**

### _Metro Re-design_

(a) A redesigned home page at <https://metronz.co.nz/>, taking the customers feedback into consideration

- Metro Home page by Jin Zhang

(b) A redesigned search function and features page of property listings, using the company’s third party web page at <https://apply.tpsportal.co.nz/tps6175?> as a reference.

- Metro search listing page by Ricardo Diaz Rodriguez

(c) A complete redesign building upon the property listings page. This additional listing information page provides the user with more detailed information about the selected property(s). Where they have the options to enquire about the property, book a viewing of the property or make an application for the property.

- Metro listing information page by Heni Kimura

### **Purpose**

The purpose of this project is to assimilate a working environment, adopting an agile mindset and putting into practice. Collaborating as a development team to deliver the re-designed prototype.

### **Built with:**

- [React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo-react&logoColor=026e00 "React")
- [React-url](https://react.dev/ "Reacturl")
- [Javascript](https://img.shields.io/badge/Javascript-20232A?style=for-the-badge&logo-javascript&logoColor=026e00 "Javascript")
- [Javascript-url](https://www.javascript.com/ "Javascripturl")
- [CSS](https://img.shields.io/badge/CSS-20232A?style=for-the-badge&logo-css&logoColor=026e00 "CSS")
- [CSS-url](https://www.w3schools.com/css/ "CSSurl")

---

### **Getting started:**

### _Prerequisites -_

#### _The software needed to install -_

- _Dependencies:_

- React

  ```sh
  npx create-react-app .
  ```

- React Router Dom

  ```sh
  npm i react-router-dom
  ```

- Axios

  ```sh
  npm i axios
  ```

---

### **Project structure and installation:**

1. Root directory 

   ```sh
   Metro
   ```

2. Clone the Metro repo 

   ```sh
   git clone https://github.com/HMoana/Metro.git
   ```

3. Install NPM packages for separate client and server directories

   ```sh
   npm install
   ```  

---

### **MongoDB instructions:**

- Install and open _Mongo Compass_ on your local machine
- Create database name _bookstore_ and collection name _books_
- Use the _listingData.json file_ and insert document into database
- Use the connection string to connection to your database

---

### **Docker instructions:**

- Install and open _docker desktop_ on your local machine
- Open integrated terminal on _server directory_
- In the terminal use command _'docker-compose up --build'_ this will build, run & compose the docker containers
- After some time the terminal will show _mongo output & listening to the server port_
- In _docker desktop_ both mongo and server containers should appear as _'running'_
- Open _postman_ and test endpoints using the _listingData.json file_
- To stop docker containers use command _'docker-compose stop'_

---

### **Client instructions:**

- Open another integrated terminal on _client directory_ and use command _'npm start'_

---

### **Features:**

- React app using javascript and css
- Using axios to fetch data from dockerized server and mongo containers

---

### **Future improvements:**

- Improve code smells and use partner reviews
- Attempt to dockerize client directory

---

### **Contributors & our Contacts:**

_Developers:_

- Heni Kimura - <henik@missionreadyhq.com>
- Jin Zhang - <jinzh235@gmail.com>
- Ricardo Diaz Rodriguez <diiaz2910@gmail.com>

_UX Designers:_

- Aneesha Baidwan - <aneeshab@missionreadyhq.com>
- Myint Aung - <myint@missionreadyhq.com>

### **Project Link:**

- [Github repository](https://github.com/HMoana/Metro.git "Github repository")

### **License:**

Distributed under the MIT License. See LICENSE.txt for more information.
