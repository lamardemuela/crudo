# Crudo

## [See the App!](https://crudo-app.netlify.app/)

![App Logo](./src/assets/images/logo-crudo.png)

## Description

**NOTE -** Crudo is an app that helps users plan their daily meals, allowing them to manage both dishes and meal plans.
#### [Client Repo here](https://github.com/lamardemuela/crudo)
#### [Server Repo here](https://github.com/MDasier/backendCrudo)

## Technologies, Libraries & APIs used

**NOTE -** List here all technologies used in the project like HTML, CSS, Javascript, React, axios, Bootstrap, etc.
**Technologies**
- HTML
- CSS
- Javascript
- React
- React-router-dom
- Node
- Axios
- JSON Server

**Libreries**
- React Bootstrap

## Backlog Functionalities

- Drag and drop feature for creating Food Plannings

# Client Structure

## User Stories
All the actions a user can do in the app:

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and all my favourite food plannings and individual dishes.
- **Food Planning list** - As a user I want to see all Food Plannings available so that I can choose which ones is my fav. Also I can see Food Plannings details, see their dishes and make differents actions as delete or edit them.
- **Food Planning Create** - As a user I want to create a Food Planning.
- **Food Planning Edit** - As a user I want to edit a Food Planning.
- **Dishes list** - As a user I want to see all dishes available so that I can choose which ones is my fav. Also I can see dishes details, see Food Plannings where a dish appears and make differents actions as edit it.
- **Dish Create** - As a user I want to create a Dish.
- **Dish Edit** - As a user I want to edit a Dish.
- **About** - As a user, I want to see what this project is about and who developed it.

## Client Routes

## React Router Routes (React App)
| Path                      | Page            | Components        | Behavior                                                      |
| ------------------------- | ----------------| ----------------  |  ------------------------------------------------------------  |
| `/`                       | Home            |                   | Home page: shows all Food Planings and Dishes that an user has marked as favourite.                                                     |
| `/food-planning-list`                 | Food Plannings List          | FoodPlanningList, FoodPlanningCard, SearchFoodPlanning                  | Shows all Food Plannings |
| `/dishes-list`                  | Dishes List           | DishesList, DishCard, SearchDish                  | Shows all Dishes  |
| `/edit-food-planning/:foodPlanningId`                | Edit Food Planning Details         | EditFoodPlanning       | Navigate to Food Planing list after edit a Food Planing details             |
| `/edit-dish/:dishId`             | Edit Dish Details        | EditDish | Navigate to Dishes list after edit a Dish details                                    |
| `/add-food-planning`             | Add a Food Planning       | AddFoodPlanning                  | Navigate to Food Planing list after create a Food Planing details                                    |
| `/add-dish`       | Add a Dish   | AddDish          | Navigate to Dishes list after create a Dish                                    |
| `/food-planning-details/:foodPlanningId`       | Food Planning Details   | FoodPlanningDetails, DishCard          | Shows details of a Food Planning                                    |
| `/dish-details/:dishId`       | Dish Details   | DishDetails, FoodPlanningCard          | Shows details of a Dish                                    |
| `/preparation/:dishId`       | Preparation   | Preparation          | Shows the step by step preparation  of a dish                                  |
| `/about`       | About   |           | Shows info about Crudo App and its developers                                    |
| `*`       | 404 Not Found   | NotFound          | Shows info when an user goes to a page that doesn’t exist                                     |
| `/error`       | 500 Error   | Error         | Shows info when there is an error server                                   |

## Other Components

- MainNavbar
- Footer
  
## Links

### Collaborators

[Asier Mimbrero](https://github.com/MDasier)

[Águeda Muela](https://github.com/lamardemuela)

### Project

[Repository Link Client](https://github.com/lamardemuela/crudo)

[Repository Link Server](https://github.com/MDasier/backendCrudo)

[Deploy Link](https://crudo-app.netlify.app/)


### Slides

[Slides Link](https://docs.google.com/presentation/d/1weBkMpfeYKZYzdPg3ZVGxyuLKoQWflLImDKvt7n9f4Y/edit?usp=sharing)