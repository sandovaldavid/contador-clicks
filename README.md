# Click Counter App 🔢

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black)
![React](https://img.shields.io/badge/React-18-blue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple yet elegant click counter application built with Next.js and React. This project demonstrates the use of React hooks, component composition, and CSS styling in a Next.js application.

![Devsolution Logo](public/Images/DEVSOLUTION-Logo-2.png)

## 📋 Features

- Interactive click counter
- Responsive design
- Clean and modern UI
- Reset functionality
- Component-based architecture

## 🚀 Demo

[Live Demo](https://contador-clicks.devprojects.tech/) *(Add your deployed application URL)*

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|------------|---------|----------|
| Next.js | 14.2.5 | Frontend Framework |
| React | 18 | UI Library |
| CSS Modules | - | Styling |

## 💻 Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/sandovaldavid/contador-clicks.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

``` note
src/
├── app/                 # App router and layout files
├── Components/          # React components
│   ├── Button.jsx      # Reusable button component
│   └── Counter.jsx     # Counter display component
└── Styles/             # CSS styles
    ├── Button.css
    └── Counter.css
```

## 🔧 Usage

The app consists of two main interactive elements:

- **Click Button**: Increments the counter by 1
- **Reset Button**: Resets the counter to 0

## 📝 Component Documentation

### Button Component

```jsx
<Button 
  text="String"           // Button text
  isClickButton={boolean} // Determines button style
  clickFunction={func}    // Click handler function
/>
```

### Counter Component

```jsx
<Counter 
  clicknum={number} // Number to display
/>
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts development server |
| `npm run build` | Builds the application |
| `npm start` | Starts production server |
| `npm run lint` | Runs linter |

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details

---

### 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)

---

*Built with ❤️ by Devsolution*
