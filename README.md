# Harshavardhan K – Developer Portfolio

A modern, responsive portfolio website to showcase my projects, skills, and experience as a creative developer and designer. Built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui, this portfolio highlights my work in full-stack development, cloud technologies, and data analytics.

## ✨ Features

- **Beautiful Landing Page:** Eye-catching hero section with animated backgrounds and social links.
- **About Me:** Personal journey, skills, and interests.
- **Featured Projects:** Interactive cards showcasing recent work, each with tech stack and GitHub links.
- **Skills Section:** Overview of technical proficiencies.
- **Contact Form:** Direct email functionality powered by a Node.js/Express backend (with Nodemailer).
- **Responsive Design:** Fully optimized for all devices.
- **Modern UI:** Built with shadcn/ui and Tailwind CSS for a clean, accessible interface.
- **Dark Mode:** (If enabled in your UI library/theme)

## 🚀 Demo

> _Add a link to your live site here, or a screenshot!_

![Portfolio Screenshot](public/Kadali_Harshavardhan.jpg)

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, shadcn/ui, Radix UI
- **Backend:** Node.js, Express, Nodemailer (for contact form)
- **Other:** React Router, React Hook Form, Zod, Lucide Icons, and more

## 📁 Folder Structure

```
My_portfolio/
  ├── public/                # Static assets (images, favicon, etc.)
  ├── src/
  │   ├── components/        # UI and page components
  │   ├── hooks/             # Custom React hooks
  │   ├── lib/               # Utility functions
  │   ├── pages/             # Page-level components (Index, NotFound)
  │   ├── App.tsx            # Main app component
  │   └── main.tsx           # Entry point
  ├── contact-backend/       # Express backend for contact form
  ├── tailwind.config.ts     # Tailwind CSS configuration
  ├── package.json           # Project metadata and scripts
  └── ...                    # Other config and lock files
```

## 🏁 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kadaliharsha/your-portfolio-repo.git
   cd Portfolio/My_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the frontend:**
   ```bash
   npm run dev
   ```

4. **Start the backend (for contact form):**
   ```bash
   cd contact-backend
   npm install
   npm start
   ```
   > _Configure your email credentials in `contact-backend/index.js` before using the contact form._

5. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## 🧩 Customization

- Update your personal info, social links, and project data in the respective components in `src/components/`.
- Replace images in `public/` as needed.
- Tweak styles via `tailwind.config.ts` and component classes.

## 📬 Contact

- **Email:** kadali.hrv@gmail.com
- **LinkedIn:** [kadaliharsha](https://www.linkedin.com/in/kadaliharsha/)
- **GitHub:** [Kadaliharsha](https://github.com/Kadaliharsha)

## 📄 License

This project is open source and available under the [MIT License](LICENSE). 