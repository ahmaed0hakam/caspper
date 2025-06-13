# Caspper - Creative Digital Solutions

A modern, responsive website for Caspper, showcasing creative digital solutions and services. Built with Vue 3, TypeScript, and Vite.

## 🚀 Features

- Modern, responsive design
- Smooth animations and transitions
- Interactive UI components
- Contact form integration with Google Forms
- Social media integration
- Optimized image loading and performance

## 🛠️ Tech Stack

- **Framework**: Vue 3 with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS with Scoped Components
- **Animations**: GSAP (GreenSock Animation Platform)
- **Form Handling**: Custom Google Forms Integration

## 📦 Project Structure

```
src/
├── assets/
│   ├── images/
│   │   ├── social-images/
│   │   └── ...
│   ├── base.css
│   └── main.css
├── components/
│   ├── sections/
│   │   ├── HomeSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ServicesSection.vue
│   │   └── ContactSection.vue
│   ├── Header.vue
│   └── BaseButton.vue
├── utils/
│   ├── animations.ts
│   └── navigation.ts
└── App.vue
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd caspper
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
VITE_GOOGLE_FORM_URL=your_google_form_url
VITE_GOOGLE_FORM_NAME_ID=your_name_field_id
VITE_GOOGLE_FORM_EMAIL_ID=your_email_field_id
VITE_GOOGLE_FORM_MESSAGE_ID=your_message_field_id
```

4. Start the development server:
```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🎨 Sections

1. **Home Section**
   - Hero section with animated illustrations
   - Social media links
   - Call-to-action buttons

2. **About Section**
   - Company description
   - Mission statement
   - Animated illustrations

3. **Services Section**
   - Web & App Development
   - Digital Marketing
   - Outsourcing & IT Support
   - Graphic Design

4. **Contact Section**
   - Contact form
   - Google Forms integration
   - Success/Error handling

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop
- Tablet
- Mobile devices

## 🎯 Performance Optimizations

- Optimized image loading
- Lazy loading of components
- Efficient animations
- Proper asset bundling

## 🔧 Development

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## 📄 License

[Your License]

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

[Your Contact Information]
