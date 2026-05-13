# TaxiPlus - Modern Urban Mobility Platform

A world-class, futuristic web platform for TaxiPlus, Ethiopia's premier urban mobility startup. Built with Nuxt.js, Tailwind CSS, and Supabase.

## 🚀 Features

### For Passengers
- **Instant Booking** - Request rides in seconds with real-time driver matching
- **Live Tracking** - Track your driver's location in real-time
- **Upfront Pricing** - Know exactly what you'll pay before you ride
- **Cashless Payments** - Seamless mobile money and card payments
- **Ride History** - Access all your past trips and receipts
- **Saved Places** - Quick access to frequently visited locations
- **Safety Features** - Share trip details, emergency button, 24/7 support

### For Drivers
- **Flexible Schedule** - Drive whenever you want
- **Real-time Requests** - Instant ride notifications
- **Earnings Dashboard** - Track your income and performance
- **Navigation Ready** - Integrated route guidance
- **Weekly Payouts** - Fast, reliable payments
- **Driver Support** - 24/7 assistance and resources

### For Admins
- **Platform Overview** - Real-time metrics and analytics
- **User Management** - Manage passengers and drivers
- **Ride Monitoring** - Track all platform activity
- **Driver Verification** - Review and approve new drivers
- **Revenue Analytics** - Comprehensive financial insights
- **Support System** - Handle tickets and issues

## 🛠️ Tech Stack

- **Framework**: Nuxt.js 4.x (Vue 3)
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Auth, Database, Real-time)
- **Icons**: Lucide Vue Next
- **Utilities**: VueUse

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd taxiplus-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:
```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run development server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the app.

## 🗄️ Supabase Setup

### 1. Create a Supabase Project
- Go to [supabase.com](https://supabase.com)
- Create a new project
- Copy your project URL and anon key

### 2. Database Schema

Create the following tables in your Supabase project:

```sql
-- Users table (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  full_name TEXT,
  phone TEXT,
  user_type TEXT CHECK (user_type IN ('passenger', 'driver', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Driver profiles
CREATE TABLE driver_profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  vehicle_make TEXT,
  vehicle_model TEXT,
  license_plate TEXT,
  license_number TEXT,
  verification_status TEXT DEFAULT 'pending',
  rating DECIMAL(3,2) DEFAULT 5.0,
  total_trips INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Rides table
CREATE TABLE rides (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  passenger_id UUID REFERENCES auth.users,
  driver_id UUID REFERENCES auth.users,
  pickup_location TEXT,
  dropoff_location TEXT,
  pickup_lat DECIMAL(10,8),
  pickup_lng DECIMAL(11,8),
  dropoff_lat DECIMAL(10,8),
  dropoff_lng DECIMAL(11,8),
  fare DECIMAL(10,2),
  distance DECIMAL(10,2),
  status TEXT DEFAULT 'requested',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE driver_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE rides ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);
```

### 3. Enable Real-time
In your Supabase dashboard:
- Go to Database → Replication
- Enable real-time for `rides` table

## 🎨 Design Philosophy

TaxiPlus combines:
- **Apple's Simplicity** - Clean, intuitive interfaces
- **Linear's Smoothness** - Fluid animations and transitions
- **Stripe's Trust** - Professional, reliable design
- **Uber's Mobility** - Seamless ride-hailing experience

### Brand Colors
- **Primary Blue**: #3b82f6 (primary-600)
- **White**: #ffffff
- **Dark Gray**: #111827 (gray-900)

### Key Principles
- Mobile-first responsive design
- Smooth micro-interactions
- High contrast for readability
- Generous whitespace
- Fast, app-like feel

## 📱 Pages & Routes

### Public Pages
- `/` - Landing page
- `/driver` - Driver recruitment page
- `/auth/login` - Passenger login
- `/auth/signup` - Passenger signup
- `/auth/driver-login` - Driver login
- `/auth/driver-signup` - Driver application
- `/auth/reset-password` - Password reset

### Passenger Dashboard
- `/dashboard` - Overview
- `/dashboard/ride` - Book a ride
- `/dashboard/history` - Ride history
- `/dashboard/payments` - Payment methods
- `/dashboard/settings` - Account settings

### Driver Dashboard
- `/driver/dashboard` - Driver overview and ride requests

### Admin Dashboard
- `/admin` - Platform management

## 🔧 Development

### Project Structure
```
taxiplus-website/
├── app/
│   └── app.vue              # Root component
├── assets/
│   └── css/
│       └── main.css         # Global styles
├── components/              # Reusable components
│   ├── Navbar.vue
│   ├── Footer.vue
│   ├── HeroSection.vue
│   └── ...
├── composables/             # Vue composables
│   └── useAuth.ts
├── layouts/                 # Page layouts
│   ├── default.vue
│   ├── auth.vue
│   └── dashboard.vue
├── middleware/              # Route middleware
│   └── auth.ts
├── pages/                   # File-based routing
│   ├── index.vue
│   ├── auth/
│   ├── dashboard/
│   ├── driver/
│   └── admin/
├── plugins/                 # Nuxt plugins
│   └── supabase.client.ts
├── public/                  # Static assets
├── nuxt.config.ts          # Nuxt configuration
├── tailwind.config.js      # Tailwind configuration
└── package.json
```

### Key Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run generate     # Generate static site
npm run preview      # Preview production build
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Netlify
1. Connect repository
2. Build command: `npm run generate`
3. Publish directory: `.output/public`
4. Add environment variables

## 🔐 Security

- All routes protected with middleware
- Row Level Security enabled in Supabase
- Secure authentication flows
- Environment variables for sensitive data
- HTTPS enforced in production

## 📈 Future Enhancements

- [ ] Real-time map integration (Google Maps/Mapbox)
- [ ] Push notifications
- [ ] In-app chat between driver and passenger
- [ ] Multiple payment gateways
- [ ] Ride scheduling
- [ ] Promo codes and referrals
- [ ] Driver earnings analytics
- [ ] Multi-language support (Amharic, Oromo)
- [ ] PWA capabilities
- [ ] Native mobile apps

## 🤝 Contributing

This is a production project for TaxiPlus. For contributions or issues, please contact the development team.

## 📄 License

Proprietary - © 2026 TaxiPlus. All rights reserved.

## 🌍 Made in Ethiopia

Built with ❤️ for Africa's urban future.

---

**TaxiPlus** - Transportation Without Uncertainty
