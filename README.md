# Harsha Kolla - Portfolio

A modern, responsive portfolio website built with React showcasing my experience in AI, Data Science, and Software Engineering.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Chatbot** - AI-powered assistant for visitor interactions
- **Contact Form** - Integrated with FormSubmit.co for easy communication
- **AOS Animations** - Smooth scroll animations for better user experience
- **SEO Optimized** - Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Frontend:** React 18, JavaScript (ES6+)
- **Styling:** CSS3 with custom animations and responsive design
- **Animations:** AOS (Animate On Scroll)
- **Icons:** Font Awesome
- **Fonts:** Inter (Google Fonts)
- **Form Handling:** FormSubmit.co
- **Build Tool:** Create React App

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components
│   │   ├── Navbar.js     # Navigation bar
│   │   └── Footer.js     # Footer component
│   ├── sections/         # Main page sections
│   │   ├── Hero.js       # Hero/landing section
│   │   ├── Experience.js # Work experience timeline
│   │   ├── Projects.js   # Projects showcase
│   │   ├── Education.js  # Education history
│   │   └── Contact.js    # Contact form and info
│   └── ui/              # UI components
│       └── Chatbot.js    # Interactive chatbot
├── assets/
│   └── images/
│       ├── profile/      # Profile and chatbot images
│       ├── projects/     # Project screenshots
│       ├── backgrounds/  # Background images
│       └── logos/        # University and company logos
├── styles/
│   └── style.css        # All CSS styles
├── App.js               # Main application component
└── index.js            # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshakolla18/harshakolla18.github.io.git
   cd harshakolla18.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📝 Customization

### Updating Content

- **Personal Info:** Edit components in `src/components/sections/`
- **Styling:** Modify `src/styles/style.css`
- **Images:** Replace files in `src/assets/images/`
- **Resume:** Update `public/Resume/Resume.pdf`

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.js`
3. Add corresponding styles to `src/styles/style.css`

## 🎨 Design System

### Colors
- Primary: `#003366` (Navy Blue)
- Secondary: `#818cf8` (Purple)
- Background: `#1a1a2e` to `#16213e` (Gradient)
- Text: `#ffffff` (White)

### Typography
- Font Family: Inter
- Weights: 400, 500, 600, 700

### Animations
- AOS (Animate On Scroll) for section transitions
- CSS transitions for hover effects
- Smooth scrolling navigation

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🔧 Configuration

### Form Submission
The contact form uses FormSubmit.co. To change the email:
1. Update the fetch URL in `src/components/sections/Contact.js`
2. Or modify the form action in the component

### Chatbot
The chatbot is currently in demo mode. To integrate with a real AI service:
1. Modify the `getBotResponse` function in `src/components/ui/Chatbot.js`
2. Add your AI API integration

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contact

- **Email:** harshakolla90@gmail.com
- **LinkedIn:** [Harsha Kolla](https://www.linkedin.com/in/harsha-kolla-357a211a8/)
- **GitHub:** [harshakolla18](https://github.com/harshakolla18)

---

Built with ❤️ by Harsha Kolla 