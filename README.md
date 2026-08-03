<div align="center">

# ✈️ GoYatrik

### The modern, AI-powered travel booking platform

Flights • Hotels • Trains • Buses • Tour Packages — all in one place

[![Live Demo](https://img.shields.io/badge/demo-live-2dd4bf?style=for-the-badge)](https://goyatrik-rosy.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](#license)

[Live Demo](https://goyatrik-rosy.vercel.app) · [Report Bug](https://github.com/faizankhan005/goyatrik/issues) · [Request Feature](https://github.com/faizankhan005/goyatrik/issues)

</div>

---

## 📖 About GoYatrik

**GoYatrik** ("Yatrik" — traveler, in Hindi) is a full-stack SaaS travel platform built to make trip planning **easy, affordable, secure, and accessible** through modern technology and thoughtful design. It brings together every leg of a journey — flights, hotels, trains, buses, and curated tour packages — into a single, unified booking experience, with an AI travel assistant layered on top to help travelers plan smarter.

The long-term vision is to become a **globally trusted travel platform**, connecting millions of travelers with unforgettable journeys through automation, AI, and a genuinely great user experience.

> 🚧 **Status:** GoYatrik is an actively developed SaaS product. The frontend experience (search, discovery, booking flows, dashboards) is largely built out; backend services, payments, and AI features are being wired up incrementally — see the [Roadmap](#-roadmap).

---

## ✨ Features

### 🧳 Multi-Modal Booking
- **Flights** — search and compare flights across airlines
- **Hotels** — discover and book premium stays
- **Trains** — search train routes and availability
- **Buses** — book intercity bus tickets
- **Tour Packages** — curated domestic & international tour experiences with detailed itineraries and downloadable brochures

### 🤖 AI-Powered Travel Planning
- Smart, AI-driven trip recommendations powered by OpenAI / LangChain
- Conversational travel assistant to help plan itineraries

### 👤 User Experience
- Secure authentication (sign up / login) via Supabase
- Personal dashboard to track trips and activity
- Booking history and detailed booking views
- Editable user profile

### 🛠️ Admin Experience
- Admin dashboard for managing tours, bookings, and platform content

### 💳 Payments & Media
- Razorpay integration for secure online payments
- Cloudinary-powered image uploads and optimized media delivery

### 🎨 Design
- Fully responsive, animated UI built with Tailwind CSS and Framer Motion
- Polished landing experience: hero, offers, popular tours, testimonials, and a smart search widget

---

## 🖥️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev) |
| **Language** | [TypeScript](https://www.typescriptlang.org) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) + [Framer Motion](https://www.framer.com/motion/) |
| **State Management** | [Zustand](https://zustand-demo.pmnd.rs) |
| **Forms & Validation** | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| **Backend / Auth / DB** | [Supabase](https://supabase.com) (PostgreSQL, Auth, SSR) |
| **AI / Automation** | [OpenAI](https://openai.com), [LangChain](https://www.langchain.com), [Vercel AI SDK](https://sdk.vercel.ai), n8n workflows |
| **Payments** | [Razorpay](https://razorpay.com) |
| **Media** | [Cloudinary](https://cloudinary.com) |
| **Icons** | Lucide React, React Icons |
| **Deployment** | [Vercel](https://vercel.com) |

---

## 📁 Project Structure

```
goyatrik/
├── actions/              # Server actions (auth, booking, tour, upload)
├── app/
│   ├── (admin)/admin/    # Admin dashboard
│   ├── (auth)/           # Login & register
│   ├── (public)/         # Flights, hotels, trains, buses, tours, about, contact
│   └── (user)/           # User dashboard, bookings, profile
├── components/
│   ├── booking/          # Booking form & summary
│   ├── details/          # Tour detail views
│   ├── home/              # Hero, offers, search box, testimonials
│   ├── layout/            # Navbar, footer, mobile menu
│   └── tours/              # Tour cards, filters, grid
├── data/                 # Static/seed data (bookings, etc.)
├── database/             # SQL schema, RLS policies, seed data
├── hooks/                # useAuth, useBooking, useTours
├── lib/                  # Supabase, Cloudinary, OpenAI, Razorpay clients
├── services/             # Service layer (auth, etc.)
├── store/                # Zustand stores
├── types/                # Shared TypeScript types
└── validations/          # Zod schemas
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun
- A [Supabase](https://supabase.com) project
- A [Razorpay](https://razorpay.com) account (for payments)
- A [Cloudinary](https://cloudinary.com) account (for media uploads)
- An [OpenAI](https://platform.openai.com) API key (for AI features)

### Installation

```bash
# Clone the repository
git clone https://github.com/faizankhan005/goyatrik.git
cd goyatrik

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Razorpay
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# OpenAI
OPENAI_API_KEY=your_openai_api_key
```

### Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app running locally.

### Other scripts

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

---

## 🗺️ Roadmap

- [ ] Wire up Supabase database schema, RLS policies & seed data
- [ ] Complete booking, tour, and auth server actions end-to-end
- [ ] Full Razorpay checkout & payment confirmation flow
- [ ] AI Trip Planner — conversational itinerary generation
- [ ] n8n workflow automation for bookings & notifications
- [ ] Admin analytics & tour management CRUD
- [ ] Real-time flight/train/bus data provider integrations
- [ ] Email/SMS booking confirmations

---

## 🌐 Live Demo

👉 **[goyatrik-rosy.vercel.app](https://goyatrik-rosy.vercel.app)**

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Faizan Khan**
Full Stack Developer • AI/ML Engineer — Creator of GoYatrik

- 🌐 Portfolio: [faizankhan005.github.io/Portfolio](https://faizankhan005.github.io/Portfolio/)
- 💻 GitHub: [@faizankhan005](https://github.com/faizankhan005)
- 💼 LinkedIn: [in/faizan05](https://www.linkedin.com/in/faizan05)

---

<div align="center">

Made with ❤️ and ☕ by **Faizan Khan**

</div>
