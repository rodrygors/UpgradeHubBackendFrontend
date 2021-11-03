# UpgradeHubBackendFrontend

## Final project- Front and Backend

# Backend:

## Team:

- Ana Catarina Simões
- Rodrigo Silva
- Danilson Pinto

# Mandatory Tasks:

## Relationships between tables:
- @ManyToMany →  A product can be on n invoices.
- @OneToMany →  An invoice can have only one owner.
- @ManyToMany → A product can be on n invoices.

## Mandatory endpoints

- PostMapping to create a product
- GetMapping to retrieve all products.
- GetMapping to retrieve a product by id.
- GetMapping to retrieves the user invoice by id.
- PostMapping to add products and associate an invoice to the user
- GetMapping to get user
- PutMapping to update user

## Extras:

 - Create an Endpoint to delete users
 - create an Endpoint to delete Invoices
 - create an Endpoint to delete Products
 - create an endpoint to search for the 5 highest bills
 - create an endpoint to  search for cheaper products. 
 
# FrontEnd 

## Team:

 - João Cardoso
 - Rafael Costa
 - Larissa Oliveira
 
# Mandatory tasks finished:

- Login → Initial windows - without login you cannot make requests or navigate because you lack Token. 
- Create Invoice → Form that allows you to add several products and attack the NewInvoice endpoint.
- View my invoices → List of created invoices.
- Invoice detail → when you click on a list item it takes you to the invoice detail.
- View my data → user data.
- Modify user → from "View my data" allows you to modify the user's data.

## React Features

- Use of hooks(useState and useEffect)
- Axios for API's
- API integration with backend (get, post, put and delete requests)
- Routing with react-router-dom
- Mapping lists
- React Events (onClick,onSubmit, onChange)
- Responsive Css

# How to run this project
## → Install docker
- Go to https://www.docker.com/products/docker-desktop
- Download and install Docker Desktop
- Follow this link's instructions to enable virtualization https://docs.microsoft.com/pt-pt/windows/wsl/install-manual

## → Create Docker image of the backend aplication
- Open your terminal on ../backend
- run ```docker build -t project .```

## → Run the docker compose file to run the backend application
- Open your terminal on ../backend/src/main/resources
- run ```docker compose up```

## → Install npm
- Go to https://phoenixnap.com/kb/install-node-js-npm-on-windows
- Download and install npm

## → Download depedencies
- Open your terminal on ../frontend
- run ```npm i```

## → Start the frontend application
- Open your terminal on ../frontend
- run ```npm start```
