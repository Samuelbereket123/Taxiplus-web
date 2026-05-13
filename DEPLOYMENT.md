# TaxiPlus Deployment Guide

Complete guide to deploying your TaxiPlus platform to production.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Instant rollbacks
- Preview deployments
- Perfect for Nuxt.js

**Steps:**

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial TaxiPlus platform"
git branch -M main
git remote add origin your-repo-url
git push -u origin main
```

2. **Deploy to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel auto-detects Nuxt.js

3. **Add Environment Variables**
In Vercel dashboard:
```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

4. **Deploy**
- Click "Deploy"
- Wait ~2 minutes
- Your site is live! 🎉

**Custom Domain:**
- Go to Project Settings → Domains
- Add your domain (e.g., taxiplus.et)
- Update DNS records as shown
- HTTPS auto-configured

### Option 2: Netlify

**Steps:**

1. **Build Configuration**
Create `netlify.toml`:
```toml
[build]
  command = "npm run generate"
  publish = ".output/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. **Deploy**
- Go to [netlify.com](https://netlify.com)
- New site from Git
- Connect repository
- Add environment variables
- Deploy

### Option 3: Your Own Server

**Requirements:**
- Node.js 18+
- PM2 or similar process manager
- Nginx (recommended)
- SSL certificate

**Steps:**

1. **Build the Application**
```bash
npm run build
```

2. **Transfer Files**
```bash
# Upload .output directory to server
scp -r .output user@your-server:/var/www/taxiplus
```

3. **Install PM2**
```bash
npm install -g pm2
```

4. **Start Application**
```bash
cd /var/www/taxiplus
pm2 start .output/server/index.mjs --name taxiplus
pm2 save
pm2 startup
```

5. **Configure Nginx**
```nginx
server {
    listen 80;
    server_name taxiplus.et;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. **SSL with Let's Encrypt**
```bash
sudo certbot --nginx -d taxiplus.et
```

### Option 4: Docker

**Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
```

**Build and Run:**
```bash
docker build -t taxiplus .
docker run -p 3000:3000 \
  -e SUPABASE_URL=your-url \
  -e SUPABASE_ANON_KEY=your-key \
  taxiplus
```

**Docker Compose:**
```yaml
version: '3.8'
services:
  taxiplus:
    build: .
    ports:
      - "3000:3000"
    environment:
      - SUPABASE_URL=${SUPABASE_URL}
      - SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY}
    restart: unless-stopped
```

## 🔐 Environment Variables

### Required Variables
```env
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Optional Variables
```env
# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Maps
GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# Payments
STRIPE_PUBLIC_KEY=pk_live_XXXXXXXXXXXXXXXXXXXXXXXX

# Monitoring
SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
```

## 🔍 Pre-Deployment Checklist

### Code
- [ ] All environment variables set
- [ ] No console.logs in production
- [ ] Error handling implemented
- [ ] Loading states added
- [ ] Forms validated

### Security
- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] CORS configured
- [ ] Rate limiting enabled
- [ ] SQL injection prevented

### Performance
- [ ] Images optimized
- [ ] Code minified
- [ ] Lazy loading implemented
- [ ] CDN configured
- [ ] Caching enabled

### SEO
- [ ] Meta tags added
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Open Graph tags
- [ ] Schema markup

### Testing
- [ ] All pages load
- [ ] Forms submit correctly
- [ ] Authentication works
- [ ] Mobile responsive
- [ ] Cross-browser tested

## 📊 Post-Deployment

### 1. Verify Deployment
```bash
# Check if site is live
curl -I https://your-domain.com

# Test API endpoints
curl https://your-domain.com/api/health
```

### 2. Set Up Monitoring

**Vercel Analytics:**
- Automatically enabled
- View in Vercel dashboard

**Google Analytics:**
```javascript
// Add to nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX',
          async: true
        }
      ]
    }
  }
})
```

**Sentry (Error Tracking):**
```bash
npm install @sentry/vue
```

### 3. Set Up Backups

**Supabase:**
- Automatic daily backups
- Point-in-time recovery
- Download backups manually

**Code:**
- GitHub repository
- Automated backups
- Version control

### 4. Configure CDN

**Cloudflare (Free):**
- Add site to Cloudflare
- Update nameservers
- Enable caching
- Configure SSL

### 5. Set Up Alerts

**Uptime Monitoring:**
- UptimeRobot (free)
- Pingdom
- StatusCake

**Error Alerts:**
- Sentry notifications
- Email alerts
- Slack integration

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🌍 Multi-Region Deployment

### Vercel Edge Network
- Automatic global distribution
- 70+ edge locations
- No configuration needed

### Custom Setup
```javascript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel-edge'
  }
})
```

## 📱 Mobile App Deployment

### PWA Configuration

Create `public/manifest.json`:
```json
{
  "name": "TaxiPlus",
  "short_name": "TaxiPlus",
  "description": "Transportation Without Uncertainty",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Service Worker
```javascript
// Add to nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'TaxiPlus',
      short_name: 'TaxiPlus',
      theme_color: '#3b82f6'
    }
  }
})
```

## 🔧 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .nuxt node_modules/.cache
npm install
npm run build
```

### Environment Variables Not Working
- Check variable names (case-sensitive)
- Restart dev server after changes
- Verify in deployment platform

### 404 Errors
- Check routing configuration
- Verify file names match routes
- Check middleware

### Slow Performance
- Enable caching
- Optimize images
- Use CDN
- Enable compression

## 📈 Scaling

### Database (Supabase)
- Upgrade plan as needed
- Enable connection pooling
- Add read replicas
- Optimize queries

### Application
- Enable caching
- Use CDN
- Horizontal scaling
- Load balancing

### Monitoring
- Track response times
- Monitor error rates
- Watch database load
- Check memory usage

## 🎯 Launch Checklist

### Pre-Launch
- [ ] All features tested
- [ ] Security audit completed
- [ ] Performance optimized
- [ ] Backups configured
- [ ] Monitoring set up
- [ ] Domain configured
- [ ] SSL enabled
- [ ] Analytics installed

### Launch Day
- [ ] Deploy to production
- [ ] Verify all pages load
- [ ] Test critical flows
- [ ] Monitor error rates
- [ ] Check performance
- [ ] Announce launch

### Post-Launch
- [ ] Monitor metrics
- [ ] Gather feedback
- [ ] Fix critical bugs
- [ ] Optimize performance
- [ ] Plan next features

## 📞 Support

### Deployment Issues
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [netlify.com/support](https://netlify.com/support)
- Supabase: [supabase.com/support](https://supabase.com/support)

### Community
- Nuxt Discord
- Vue Forum
- Stack Overflow

---

**Ready to Launch!** 🚀

Your TaxiPlus platform is production-ready. Choose your deployment method and go live!
