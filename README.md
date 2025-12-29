# DevPortfolioHub - Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Express.js. Features a beautiful UI with contact form functionality that sends emails directly to your Gmail inbox.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with animations
- **Contact Form**: Direct email delivery to your Gmail inbox
- **Skills Section**: Animated skill bars and technology showcase
- **Portfolio Gallery**: Project showcase with descriptions
- **Experience Timeline**: Professional experience display
- **Dark/Light Theme**: Theme switching capability
- **Mobile Responsive**: Works perfectly on all devices

## 🛠️ Tech Stack

### Frontend

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hook Form** with Zod validation
- **Radix UI** components
- **Lucide React** icons

### Backend

- **Express.js** with TypeScript
- **Web3Forms** for email delivery
- **Drizzle ORM** for database operations
- **Zod** for data validation

## 📧 Contact Form

The contact form is fully functional and sends emails directly to your Gmail inbox using Web3Forms service.

### How it works:

1. User fills out the contact form
2. Form data is sent to the server
3. Server forwards the email via Web3Forms
4. You receive the email in your Gmail inbox (`sroopesh242@gmail.com`)

### Email Format:

```
Subject: Contact Form: [User's Subject]

From: [User Name] ([User Email])

Subject: [User's Subject]

Message:
[User's Message]
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd DevPortfolioHub-1
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

## 📁 Project Structure

```
DevPortfolioHub-1/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── hooks/         # Custom React hooks
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Database operations
├── shared/               # Shared types and schemas
└── public/              # Static assets
```

## 🎨 Customization

### Personal Information

Update your personal information in:

- `client/src/pages/Home.tsx` - Main content, skills, experience
- `client/src/components/Portfolio.tsx` - Portfolio projects

### Styling

- Modify `client/src/index.css` for global styles
- Update Tailwind classes in components for custom styling
- Theme colors can be customized in `tailwind.config.ts`

### Contact Form

The contact form is configured to send emails to `sroopesh242@gmail.com`. To change this:

1. Update the email address in `server/routes.ts`
2. Update the Web3Forms configuration if needed

## 📧 Email Configuration

The contact form uses Web3Forms service for reliable email delivery:

- **Service**: Web3Forms
- **API Key**: Configured in `server/routes.ts`
- **Recipient**: `sroopesh242@gmail.com`
- **Features**: Spam protection, delivery tracking

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=production
```

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Optimized images and lazy loading
- **Bundle Optimization**: Tree shaking and minification
- **Fast Loading**: Optimized bundle size and loading times

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type checking

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Zod for runtime validation

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact:

- Email: sroopesh242@gmail.com
- GitHub: [Your GitHub Profile]

---

**Built with ❤️ by Roopesh S**
