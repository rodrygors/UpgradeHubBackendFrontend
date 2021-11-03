# UpgradeHubBackendFrontend

# Final project- Front and Backend

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
 - create an endpoint to for cheaper products. 
 
# FrontEnd 

## Team:

 - João Cardoso
 - Rafael Costa
 - Larissa Oliveira
 
# Mandatory Tasks:

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

# Docker commands

## →  Docker file
- mvn clear
- mvn install

## → Docker compose
-
