# TaxiPlus Quick Start Guide

Get your TaxiPlus platform running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works)
- Git

## Step 1: Install Dependencies

```bash
npm install
```

This installs:
- Nuxt.js 4.x
- Tailwind CSS
- Supabase client
- VueUse utilities
- Lucide icons

## Step 2: Set Up Supabase

### Create a Project
1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in project details
4. Wait for setup to complete (~2 minutes)

### Get Your Credentials
1. Go to Project Settings → API
2. Copy your:
   - Project URL
   - Anon/Public key

### Create Database Tables

Go to SQL Editor in Supabase and run:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table
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

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE driver_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE rides ENABLE ROW LEVEL SECURITY;

-- Basic policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
```

## Step 3: Configure Environment

```bash
cp .env.example .env
```

Edit `.env`:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 4: Run Development Server

```bash
npm run dev
```

Visit: `http://localhost:3000`

## Step 5: Test the Platform

### Test Passenger Flow
1. Go to `/auth/signup`
2. Create a passenger account
3. Verify email (check Supabase Auth)
4. Login at `/auth/login`
5. Access dashboard at `/dashboard`
6. Try booking a ride at `/dashboard/ride`

### Test Driver Flow
1. Go to `/auth/driver-signup`
2. Fill in driver details
3. Application submitted (pending verification)
4. Login at `/auth/driver-login`
5. Access driver dashboard at `/driver/dashboard`

### Test Admin Panel
1. Go to `/admin`
2. View platform metrics
3. Manage users and rides

## Common Issues

### "Invalid API key"
- Check your `.env` file
- Ensure SUPABASE_URL and SUPABASE_ANON_KEY are correct
- Restart dev server after changing `.env`

### "Table does not exist"
- Run the SQL commands in Supabase SQL Editor
- Check table names match exactly

### "Authentication error"
- Verify email confirmation is enabled in Supabase
- Check Auth settings in Supabase dashboard

### Port already in use
```bash
# Use different port
npm run dev -- --port 3001
```

## Next Steps

### Enable Real-time Features
1. Go to Database → Replication in Supabase
2. Enable real-time for `rides` table
3. Rides will update live in dashboards

### Add Map Integration
- Get Google Maps API key or Mapbox token
- Add to environment variables
- Integrate in ride booking page

### Set Up Email Templates
1. Go to Authentication → Email Templates
2. Customize signup, reset password emails
3. Add your branding

### Deploy to Production
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Deploy to:
- **Vercel**: Connect GitHub repo, auto-deploy
- **Netlify**: `npm run generate`, deploy `.output/public`
- **Your server**: Build and serve `.output/public`

## Development Tips

### Hot Reload
Changes auto-reload. If stuck:
```bash
# Clear cache
rm -rf .nuxt node_modules/.cache
npm run dev
```

### View Logs
- Browser console for frontend errors
- Terminal for server errors
- Supabase logs for database issues

### Test Responsiveness
- Open DevTools (F12)
- Toggle device toolbar
- Test mobile, tablet, desktop views

## Project Structure

```
taxiplus-website/
├── pages/              # Routes (file-based)
│   ├── index.vue      # Landing page
│   ├── auth/          # Authentication pages
│   ├── dashboard/     # Passenger dashboard
│   ├── driver/        # Driver pages
│   └── admin/         # Admin panel
├── components/        # Reusable components
├── layouts/           # Page layouts
├── composables/       # Vue composables (useAuth)
├── middleware/        # Route guards
└── assets/css/        # Global styles
```

## Support

- **Documentation**: See README.md
- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Nuxt Docs**: [nuxt.com/docs](https://nuxt.com/docs)

---

**You're ready to build!** 🚀

The platform is fully functional with authentication, dashboards, and real-time capabilities. Customize and extend as needed for your TaxiPlus vision.
