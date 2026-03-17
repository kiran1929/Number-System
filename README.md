# Number System Conversion

A simple and interactive web application to convert numbers between different number systems (binary, octal, decimal, and hexadecimal).

## Features

- **Multiple Number System Support**: Convert between:
  - Binary (Base 2)
  - Octal (Base 8)
  - Decimal (Base 10)
  - Hexadecimal (Base 16)

- **User-Friendly Interface**: Clean and intuitive UI built with Bootstrap
- **Real-time Conversion**: Instant conversion results
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Live Demo

Visit the deployed application: [Number System Conversion](https://number-system-kiran1929.vercel.app)

## Technologies Used

- **HTML5**: Markup structure
- **CSS3**: Styling and layout
- **JavaScript**: Core conversion logic
- **Bootstrap 5**: Responsive UI framework
- **Vercel**: Deployment platform

## Project Structure

```
.
├── src/
│   ├── index.html          # Main HTML file
│   ├── script.js           # JavaScript conversion logic
│   └── style.css           # Custom styles
├── public/
│   ├── documents/          # Documentation files
│   ├── images/             # Image assets
│   └── videos/             # Video assets
├── package.json            # Project dependencies
├── vercel.json             # Vercel deployment config
└── README.md               # This file
```

## How to Use

1. **Enter a Number**: Input the number you want to convert in the input field
2. **Select Source Base**: Choose the number system of your input number (From)
3. **Select Target Base**: Choose the number system for the output (To)
4. **Click Convert**: Click the "Convert" button to see the result

## Installation & Setup

### Prerequisites
- Node.js and npm installed on your system

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/kiran1929/Number-System.git
   cd Number-System
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Open the project in your browser:
   - Simply open `src/index.html` in your browser, or
   - Use a local server (e.g., Live Server extension in VS Code)

## Supported Conversions

| From/To | Binary | Octal | Decimal | Hexadecimal |
|---------|--------|-------|---------|-------------|
| Binary | - | ✓ | ✓ | ✓ |
| Octal | ✓ | - | ✓ | ✓ |
| Decimal | ✓ | ✓ | - | ✓ |
| Hexadecimal | ✓ | ✓ | ✓ | - |

## Examples

- **Decimal to Binary**: 10 → 1010
- **Binary to Hexadecimal**: 1111 → F
- **Decimal to Octal**: 64 → 100
- **Hexadecimal to Decimal**: FF → 255

## Deployment

This project is deployed on Vercel. To deploy your own version:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push

## Future Enhancements

- [ ] Support for more number systems (Base 3, Base 5, etc.)
- [ ] Decimal point handling
- [ ] Calculation history
- [ ] Dark mode
- [ ] Copy to clipboard functionality
- [ ] Unit tests

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

**Kirandeep Gudepu**
- GitHub: [@kiran1929](https://github.com/kiran1929)
- Email: gudepukirandeep@gmail.com

## Support

If you encounter any issues or have suggestions, please open an issue on GitHub.

---

Made with ❤️ for learning and sharing knowledge about number systems.
