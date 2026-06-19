# Deployment Guide - cPanel

This guide will help you deploy the Snehal Printers website to your cPanel hosting.

## 📋 Prerequisites

- GitHub repository with this code
- cPanel hosting with FTP access
- GitHub account with Actions enabled

## 🔐 Step 1: Get cPanel FTP Credentials

1. Log in to your cPanel account
2. Go to **FTP Accounts** or **FTP File Manager**
3. Create or note down your FTP credentials:
   - **FTP Server**: `ftp.yourdomain.com` or `yourdomain.com`
   - **FTP Username**: Your cPanel username or FTP account
   - **FTP Password**: Your FTP password
   - **FTP Port**: Usually `21` (or `22` for SFTP)

## 🔑 Step 2: Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add the following:

### Required Secrets:

| Secret Name | Description | Example |
|------------|-------------|---------|
| `FTP_SERVER` | Your FTP server address | `ftp.snehalprinters.in` |
| `FTP_USERNAME` | Your FTP username | `username@domain.com` |
| `FTP_PASSWORD` | Your FTP password | `your-ftp-password` |
| `FTP_PORT` | FTP port (optional, default: 21) | `21` |

### How to Add Secrets:

```
1. Click "New repository secret"
2. Enter Name: FTP_SERVER
3. Enter Value: ftp.yourdomain.com
4. Click "Add secret"
5. Repeat for FTP_USERNAME, FTP_PASSWORD, and FTP_PORT
```

## 🚀 Step 3: Deploy

### Option A: Automatic Deployment (Recommended)

The deployment happens automatically when you push to the main branch:

```bash
git add .
git commit -m "Deploy to production"
git push origin main
```

GitHub Actions will:
1. Build the project
2. **Clear old files from cPanel** (notification step)
3. Deploy new files to cPanel automatically
4. Send you a notification

**Note**: The workflow includes a reminder to clear old files. For a completely clean deployment, manually delete all files in `public_html/` via cPanel File Manager before the first deployment.

### Option B: Manual Deployment

If you prefer to deploy manually:

```bash
# 1. Build the project locally
npm run build

# 2. Upload the contents of the 'dist' folder to cPanel
# Use cPanel File Manager or FTP client (FileZilla, WinSCP, etc.)
# Upload to: public_html/ directory
```

## 📁 Step 4: Configure cPanel

### Important Settings:

1. **Upload Location**: `public_html/` (or your desired subdirectory)
2. **File Permissions**: 
   - Directories: `755`
   - Files: `644`
3. **Index File**: Ensure `index.html` is in the root

### cPanel File Manager Steps:

1. Log in to cPanel
2. Open **File Manager**
3. Navigate to `public_html`
4. Delete old files (except keep backups if needed)
5. Upload all files from `dist/` folder
6. Ensure `index.html` is present

## 🔍 Step 5: Verify Deployment

1. Visit your domain: `https://yourdomain.com`
2. Check if the site loads correctly
3. Test all sections:
   - Navigation
   - Contact form
   - Images
   - Dark mode toggle
   - Chat widget

## 🛠️ Troubleshooting

### Issue: Site shows blank page
**Solution**: Check browser console for errors. Ensure all files uploaded correctly.

### Issue: Images not loading
**Solution**: Verify images are in the correct path. Check file permissions.

### Issue: 404 errors
**Solution**: Ensure `.htaccess` file is uploaded (if using React Router).

### Issue: FTP connection fails
**Solution**: 
- Verify FTP credentials
- Check if FTP port is correct (21 or 22)
- Ensure FTP is enabled in cPanel

## 📊 GitHub Actions Workflow

The workflow (`.github/workflows/deploy.yml`) does the following:

1. **Triggers**: On push to main/master or PR
2. **Build**: Installs dependencies and builds the project
3. **Deploy**: Uploads `dist/` folder to cPanel via FTP
4. **Excludes**: Source files, node_modules, config files

### Workflow Status:

Check deployment status:
1. Go to your GitHub repository
2. Click **Actions** tab
3. View the latest workflow run
4. Check for any errors

## 🔄 Continuous Deployment

Every time you push to the main branch:
1. GitHub Actions automatically builds the project
2. Deploys to cPanel
3. Your site updates within 2-3 minutes

## 📝 Environment Variables (Optional)

If you need to add environment variables:

1. Create `.env` file in the root:
   ```env
   VITE_APP_TITLE=Snehal Printers
   VITE_CONTACT_EMAIL=info@snehalprinters.in
   ```

2. Add to `.gitignore`:
   ```
   .env
   .env.local
   ```

3. Use in code:
   ```javascript
   const title = import.meta.env.VITE_APP_TITLE
   ```

## 🎯 Quick Deployment Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] cPanel FTP credentials ready
- [ ] GitHub secrets added (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD)
- [ ] First deployment triggered
- [ ] Site accessible at domain
- [ ] All features working correctly

## 📞 Support

If you encounter issues:
1. Check GitHub Actions logs
2. Verify FTP credentials
3. Check cPanel file permissions
4. Review browser console for errors

---

**Deployment Method**: GitHub Actions → FTP → cPanel  
**Build Tool**: Vite  
**Deployment Time**: ~2-3 minutes