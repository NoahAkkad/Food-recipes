# Food-Recipe

Food-Recipe Food is a platform that allows food lovers to share their favorite recipes with the world. It is built using **Next.js** and stores data locally in **SQLite**. Users can browse, explore, and share food recipes without the need to log in or provide any personal information.


## Features
- Share food recipes publicly with no registration required.
- Explore a variety of dishes shared by other foodies.
- Minimalist and modern UI for an enjoyable browsing experience.
- Data stored in **SQLite**, making it easy to manage and scale.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

You need to have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (Version 14 or higher)
- [NPM](https://www.npmjs.com/get-npm) (Node Package Manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NoahAkkad/Food-recipes
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Food-Recipe
   ```

3. **Install dependencies:**

   Run the following command to install the necessary packages:

   ```bash
   npm install
   ```

4. **Run the development server:**

   Start the Next.js development server by running:

   ```bash
   npm run dev
   ```

5. **Access the application:**

   Open your browser and go to:

   ```bash
   http://localhost:3000
   ```

   Now you should be able to see the Food-Recipe Food application up and running.

### SQLite Database

Food-Recipe Food uses **SQLite** to store recipe data locally. No external database setup is required, making it a lightweight and fast solution for development.

## Key Components

1. **NavBar:** Contains the navigation links to explore meals and join the community.
2. **RecipeForm:** A form to allow users to add new recipes.
3. **RecipeList:** Displays a list of all shared recipes.
4. **ExploreMeals:** Showcases various food dishes.


## How it works

1. **Browsing Recipes:** Anyone can browse the available recipes without logging in or creating an account.
2. **Sharing Recipes:** Users can share their favorite dishes through a simple form, which automatically gets added to the public recipe list.
3. **Database Storage:** All data is stored locally in an SQLite database, making the app easy to deploy and use on smaller scales.

## Why Food-Recipe Food?

Food-Recipe Food allows food lovers to share their passion for recipes with the world, connect with other enthusiasts, and discover new dishes. The app offers:

- Simple and intuitive UI.
- Hassle-free recipe sharing without sign-ups or logins.
- Lightweight and fast, powered by **Next.js** and **SQLite**.

## Future Enhancements

- Adding user authentication to enable recipe ownership and edits.
- Implementing a rating system for recipes.
- Integrating search functionality for easier recipe browsing.
- Expanding database to include larger-scale SQL options like PostgreSQL.

## Contributing

Contributions are what make the open-source community such an amazing place to be! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

- **Author:** Noah Akkad
- **Project Link:** [https://github.com/NoahAkkad/Food-recipes](https://github.com/NoahAkkad/Food-recipes)
```