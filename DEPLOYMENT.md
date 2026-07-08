# 🚀 Deployment Guide - Praveen's Portfolio

Complete instructions for deploying your portfolio to different platforms.

---

## ⚡ FASTEST OPTION: Vercel (Recommended)

**Time**: 2 minutes | **Cost**: Free | **Best for**: Next.js apps

### Step 1: Prepare Your Code
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio commit"
```

### Step 2: Push to GitHub
```bash
# Create new repository on github.com
# Then run:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Choose your portfolio repo
5. Click "Deploy"
6. **Done!** Your site is live in 30 seconds

### Step 4: Get Your Live URL
- Vercel automatically generates: `your-portfolio.vercel.app`
- Or connect custom domain in project settings

### Environment Variables (Optional)
In Vercel Dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_EMAIL = your.email@example.com
NEXT_PUBLIC_LINKEDIN = https://linkedin.com/in/yourprofile
NEXT_PUBLIC_GITHUB = https://github.com/yourprofile
```

---

## 🌐 Netlify (Alternative)

**Time**: 3 minutes | **Cost**: Free | **Good alternative to Vercel**

### Step 1: Build Locally
```bash
npm run build
```

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repo
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click "Deploy site"

### Step 3: Custom Domain
- In Netlify dashboard → Domain settings
- Add your custom domain
- Follow DNS instructions

---

## 🔧 Manual Deployment (Any Server)

**Requirements**: Node.js 16+ on your server

### Step 1: Build
```bash
npm install
npm run build
```

### Step 2: Install PM2 (Process Manager)
```bash
npm install -g pm2
```

### Step 3: Start Server
```bash
pm2 start "npm start" --name "portfolio"
pm2 startup
pm2 save
```

### Step 4: Configure Nginx/Apache
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 5: SSL Certificate (Free)
```bash
# Using Certbot
sudo certbot certonly --standalone -d your-domain.com
# Update nginx config to use SSL
```

---

## 📱 GitHub Pages (Static Export)

**Cost**: Free | **Limitation**: No server-side features

### Step 1: Update next.config.js
```javascript
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
};
module.exports = nextConfig;
```

### Step 2: Build
```bash
npm run build
```

### Step 3: Deploy
```bash
cd out
git init
git add .
git commit -m "Deploy"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

### Step 4: Access
- Visit: `https://YOUR_USERNAME.github.io`

---

## 🌍 Custom Domain Setup

### For Vercel
1. Go to project settings → Domains
2. Click "Add"
3. Enter your domain (e.g., `praveen.dev`)
4. Follow DNS instructions
5. Point DNS to: Vercel's nameservers

### For Netlify
1. Settings → Domain management
2. Click "Add custom domain"
3. Verify domain ownership
4. Update DNS records

### DNS Records to Add
```
Type: A
Name: @
Value: Vercel IP (given by Vercel)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## ✅ Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads quickly
- [ ] No console errors (F12)
- [ ] Mobile looks good
- [ ] All links work
- [ ] Contact links functional
- [ ] Projects display correctly
- [ ] Animations smooth
- [ ] Images load properly
- [ ] SEO meta tags present
- [ ] Share on social works

---

## 🔍 Testing Before Deploy

### Local Testing
```bash
npm run build
npm start
# Visit http://localhost:3000
```

### Production Build Test
```bash
npm run build
# Check that no errors appear
# Check .next folder created
```

### Mobile Testing
- Use Chrome DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Test on actual phone if possible

---

## 🚀 Performance Optimization

### Already Included
✓ Image optimization
✓ Code splitting
✓ CSS minification
✓ Cache headers
✓ Gzip compression

### Verify Performance
1. Go to [PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter your live URL
3. Should see 90+ scores

---

## 📊 Monitor Your Site

### Vercel Analytics (Free)
```bash
# Automatically enabled on Vercel
# View in: Project → Analytics
```

### Google Analytics (Optional)
1. Create Google Analytics account
2. Get tracking ID
3. Add to environment variables
4. Code automatically integrated

### Uptime Monitoring (Free)
- [UptimeRobot](https://uptimerobot.com) - Free monitoring
- [StatusCake](https://www.statuscake.com) - Free alerts

---

## 🆘 Troubleshooting

### Issue: Build fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Issue: Port 3000 in use
```bash
npm run dev -- -p 3001
```

### Issue: Slow performance
- Check file sizes: `npm run build` outputs sizes
- Use [WebPageTest](https://www.webpagetest.org/)
- Enable caching in Vercel

### Issue: 404 on deployment
- Ensure all imports are correct
- Check that page.tsx is in correct directory
- Verify no typos in file names

---

## 🎯 Next Steps After Deploy

1. **Share**: Send portfolio link to recruiters
2. **Update**: Keep projects and stats current
3. **Monitor**: Check analytics monthly
4. **Iterate**: Add new projects as you complete work
5. **Collect Feedback**: Ask mentors for input

---

## 📞 Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Stack Overflow**: Tag `nextjs` `vercel`
- **GitHub Discussions**: Issues & community help

---

**Your portfolio is production-ready!** 🎉

Choose your platform above and deploy in minutes.

Good luck! 💪
