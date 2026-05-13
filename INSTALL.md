# TaxiPlus Installation Guide

Complete step-by-step installation guide for the TaxiPlus platform.

## ✅ What You're Installing

A complete, production-ready ride-hailing platform with:
- 🎨 Premium landing page
- 🔐 Full authentication system
- 👤 Passenger dashboard (5 pages)
- 🚗 Driver dashboard
- 👨‍💼 Admin panel
- 📱 Mobile-optimized experience

## 📋 Prerequisites

Before you begin, ensure you have:

### Required
- ✅ **Node.js 18+** - [Download](https://nodejs.org)
- ✅ **npm** (comes with Node.js)
- ✅ **Git** - [Download](https://git-scm.com)
- ✅ **Supabase Account** - [Sign up free](https://supabase.com)

### Optional
- Code editor (VS Code recommended)
- GitHub account (for deployment)

### Check Your Setup
```bash
node --version  # Should be 18.0.0 or higher
npm --version   # Should be 8.0.0 or higher
git --version   # Any recent version
```

## 🚀 Installation Steps

### Step 1: Install Dependencies (2 minutes)

```bash
# Install all required packages
npm install
```

This installs:
- Nuxt.js 4.x (Vue 3 framework)
- Tailwind CSS (styling)
- Supabase client (backend)
- VueUse (utilities)
- Lucide icons

**Expected output:**
```
added 500+ packages in 45s
```

### Step 2: Set Up Supabase (5 minutes)

#### 2.1 Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in:
   - **Name**: TaxiPlus
   - **Database Password**: (save this!)
   - **Region**: Choose closest to Ethiopia
4. Click "Create new project"
5. Wait ~2 minutes for setup

#### 2.2 Get Your Credentials

1. Go to **Project Settings** (gear icon)
2. Click **API** in sidebar
3. Copy:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (long string starting with `eyJ...`)

#### 2.3 Set Up Database

1. Go to **SQL Editor** in Supabase
2. Click **New Query**
3. Paste this SQL:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table (extends auth.users)
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

-- Policies for profiles
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Policies for driver_profiles
CREATE POLICY "Drivers can view own profile" ON driver_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Drivers can update own profile" ON driver_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Drivers can insert own profile" ON driver_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Policies for rides
CREATE POLICY "Users can view own rides" ON rides
  FOR SELECT USING (
    auth.uid() = passenger_id OR 
    auth.uid() = driver_id
  );

CREATE POLICY "Passengers can create rides" ON rides
  FOR INSERT WITH CHECK (auth.uid() = passenger_id);

CREATE POLICY "Drivers can update rides" ON rides
  FOR UPDATE USING (auth.uid() = driver_id);
```

4. Click **Run** (or press F5)
5. You should see "Success. No rows returned"

#### 2.4 Enable Real-time (Optional)

1. Go to **Database** → **Replication**
2. Find `rides` table
3. Toggle it **ON**
4. This enables live ride updates

### Step 3: Configure Environment (1 minute)

```bash
# Create environment file
cp .env.example .env
```

Edit `.env` file and add your Supabase credentials:

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Important:** Replace with YOUR actual values from Step 2.2

### Step 4: Start Development Server (30 seconds)

```bash
npm run dev
```

**Expected output:**
```
Nuxt 4.4.5 with Nitro 2.9.7
  > Local:    http://localhost:3000/
  > Network:  use --host to expose

✔ Nuxt DevTools is enabled
```

### Step 5: Test the Platform (5 minutes)

Open your browser to `http://localhost:3000`

#### Test Landing Page
- ✅ Should see beautiful hero section
- ✅ Smooth animations
- ✅ All sections load
- ✅ Navigation works

#### Test Passenger Signup
1. Click "Get Started"
2. Fill in signup form
3. Submit
4. Check email for verification (Supabase sends it)
5. Click verification link
6. Login at `/auth/login`
7. Access dashboard at `/dashboard`

#### Test Driver Signup
1. Go to `/driver`
2. Click "Start Driving"
3. Fill in driver application
4. Submit
5. Login at `/auth/driver-login`
6. Access driver dashboard

#### Test Admin Panel
1. Go to `/admin`
2. View platform overview
3. Check metrics display

## ✅ Verification Checklist

After installation, verify:

### Frontend
- [ ] Landing page loads
- [ ] Animations work smoothly
- [ ] Navigation functions
- [ ] Forms are styled correctly
- [ ] Mobile view works

### Authentication
- [ ] Can create passenger account
- [ ] Can login as passenger
- [ ] Can create driver account
- [ ] Can login as driver
- [ ] Password reset works

### Dashboards
- [ ] Passenger dashboard loads
- [ ] Can access all 5 passenger pages
- [ ] Driver dashboard loads
- [ ] Admin panel loads
- [ ] Mobile navigation works

### Database
- [ ] Tables created in Supabase
- [ ] Can see auth.users table
- [ ] Policies are active
- [ ] Real-time enabled (optional)

## 🐛 Troubleshooting

### "Cannot find module"
```bash
# Clear cache and reinstall
rm -rf node_modules .nuxt
npm install
```

### "Invalid API key"
- Check `.env` file exists
- Verify SUPABASE_URL is correct
- Verify SUPABASE_ANON_KEY is correct
- Restart dev server: `Ctrl+C` then `npm run dev`

### "Table does not exist"
- Go to Supabase SQL Editor
- Run the SQL from Step 2.3 again
- Check for any error messages

### "Port 3000 already in use"
```bash
# Use different port
npm run dev -- --port 3001
```

### Email verification not working
1. Go to Supabase → Authentication → Settings
2. Check "Enable email confirmations" is ON
3. Check email templates are configured
4. For development, you can disable email confirmation

### Styles not loading
```bash
# Rebuild Tailwind
npm run dev
# Hard refresh browser: Ctrl+Shift+R
```

## 📱 Mobile Testing

### Test on Real Device
1. Find your computer's IP address
2. Run: `npm run dev -- --host`
3. On phone, visit: `http://YOUR-IP:3000`

### Test Responsive Design
1. Open DevTools (F12)
2. Click device toolbar icon
3. Test different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1440px

## 🎨 Customization

### Change Brand Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Change these values
        600: '#your-color',
        700: '#your-darker-color',
      }
    }
  }
}
```

### Update Logo

Replace in components:
```vue
<!-- Find this in Navbar.vue, Footer.vue, etc. -->
<span class="text-white font-bold text-xl">T+</span>
<!-- Replace with your logo -->
```

### Modify Copy

Edit page content directly:
- Landing page: `pages/index.vue` and `components/*Section.vue`
- Auth pages: `pages/auth/*.vue`
- Dashboard: `pages/dashboard/*.vue`

## 📚 Next Steps

### 1. Read Documentation
- `README.md` - Complete overview
- `QUICKSTART.md` - Quick reference
- `FEATURES.md` - Feature details
- `DEPLOYMENT.md` - Deploy to production

### 2. Explore the Code
```
pages/          # All routes
components/     # Reusable UI
layouts/        # Page templates
composables/    # Shared logic
```

### 3. Add Features
- Integrate maps (Google Maps/Mapbox)
- Add payment gateway
- Enable push notifications
- Add SMS verification

### 4. Deploy
See `DEPLOYMENT.md` for:
- Vercel deployment (easiest)
- Netlify deployment
- Custom server setup
- Docker deployment

## 🎯 Success!

If you've completed all steps, you now have:

✅ A fully functional TaxiPlus platform
✅ Working authentication system
✅ Complete passenger dashboard
✅ Driver dashboard
✅ Admin panel
✅ Mobile-optimized experience
✅ Production-ready codebase

## 📞 Getting Help

### Documentation
- This guide (INSTALL.md)
- Quick start (QUICKSTART.md)
- Features (FEATURES.md)
- Deployment (DEPLOYMENT.md)

### External Resources
- [Nuxt.js Docs](https://nuxt.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vue.js Docs](https://vuejs.org)

### Community
- Nuxt Discord
- Supabase Discord
- Vue Forum
- Stack Overflow

## 🎉 You're Ready!

Your TaxiPlus platform is installed and running. Time to:
- Customize the branding
- Add your content
- Integrate APIs
- Deploy to production
- Launch your mobility startup!

---

**Welcome to TaxiPlus** - Transportation Without Uncertainty 🚀
