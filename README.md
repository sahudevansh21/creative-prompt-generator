# Creative Prompt Generator

This is a Next.js 14 App Router website designed to help writers and artists overcome creative blocks by generating unique and inspiring prompts. Users can select categories like genre, setting, character traits, or objects to create tailored prompts, combine elements from varied internal lists, and save their favorite prompts locally.

## Features

*   **Dynamic Prompt Generation**: Generate endless creative prompts based on selected criteria.
*   **Customizable Parameters**: Choose from various genres, settings, characters, and objects.
*   **Local Storage**: Save your favorite prompts directly in your browser for future access.
*   **Stunning UI**: Modern dark theme with vibrant gradients and glassmorphic elements.
*   **Responsive Design**: Works great on desktops, tablets, and mobile devices.

## Setup and Run

To get this project up and running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd creative-prompt-generator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4.  **Build for production:**
    ```bash
    npm run build
    # or
    yarn build
    ```
    This command compiles the application for production deployment.

5.  **Start the production server:**
    ```bash
    npm run start
    # or
    yarn start
    ```
    This runs the built application in production mode.

## Project Structure

*   `app/`: The Next.js 14 App Router directory.
    *   `layout.js`: Root layout for the application, including navigation.
    *   `page.js`: Home page content.
    *   `generate/page.js`: Page for generating new prompts (client component).
    *   `saved/page.js`: Page for viewing and managing saved prompts (client component).
    *   `globals.css`: Global styles for the entire application.
*   `public/`: Static assets.
*   `package.json`: Project dependencies and scripts.
*   `next.config.js`: Next.js configuration.
*   `.gitignore`: Specifies intentionally untracked files to ignore.

## Technologies Used

*   **Next.js 14**: React framework for production.
*   **React 18**: JavaScript library for building user interfaces.
*   **Client-side JavaScript**: For interactive components and local storage management.
*   **CSS3**: Styling with a focus on modern UI/UX principles (glassmorphism, gradients).
