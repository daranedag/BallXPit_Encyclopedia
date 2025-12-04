# Quick Start Guide

## ✅ Setup Complete!

Your Ball x Pit Encyclopedia frontend is now ready to use!

## 🚀 Running the Application

The development server is currently running at:
- **Local**: http://localhost:5173/
- **Network**: Use `--host` flag to expose on network

### Available Commands:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📋 Next Steps

### 1. Configure Backend API URL

Update your `.env` file with your actual backend URL:

```env
VITE_API_BASE_URL=https://your-actual-backend.onrender.com/api
VITE_API_TIMEOUT=10000
```

### 2. Add Game Assets

Place your game images in the following directories:
- `public/assets/images/items/` - Item images
- `public/assets/images/balls/` - Ball images
- `public/assets/images/enemies/` - Enemy images

Image naming convention:
- Use descriptive names or IDs that match your database
- Example: `fireball.png`, `item-001.png`, `enemy-slime.png`

### 3. Test Backend Connection

Once your backend API is ready:
1. Update the `.env` file with the correct API URL
2. Restart the dev server (`npm run dev`)
3. Navigate to http://localhost:5173/items (or balls/enemies)
4. Check browser console for any API errors

### 4. Customize Styling (Optional)

The app uses vanilla CSS with custom styles. You can:
- Modify colors in component CSS files
- Update the gradient in `Home.css`
- Change fonts in `index.css`

### 5. Deploy to Netlify

When ready to deploy:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial Ball x Pit Encyclopedia setup"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Netlify will auto-detect settings from `netlify.toml`

3. **Set Environment Variables**:
   - In Netlify dashboard, go to Site settings → Environment variables
   - Add: `VITE_API_BASE_URL` with your production API URL
   - Add: `VITE_API_TIMEOUT` with `10000`

4. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically deploy on every push to main branch

## 📝 Important Notes

### Backend API Requirements

Your backend should return data in this format:

**Items/Balls/Enemies List:**
```json
[
  {
    "id": 1,
    "name": "Fireball",
    "description": "A powerful fire-based ball...",
    "image": "fireball.png" // or full URL
  }
]
```

**Evolution Response:**
```json
{
  "current": { "id": 1, "name": "Basic Ball" },
  "evolvesTo": { "id": 2, "name": "Advanced Ball" },
  "requirement": "Level 10"
}
```

**Fusion Response:**
```json
{
  "ball1": { "id": 1, "name": "Fire Ball" },
  "ball2": { "id": 2, "name": "Water Ball" },
  "result": { "id": 3, "name": "Steam Ball" }
}
```

### Image Handling

The app supports two image loading strategies:

1. **Local Assets** (Current): Place images in `public/assets/images/`
   - Access via relative paths: `/assets/images/items/item1.png`
   
2. **External URLs**: Backend returns full URLs
   - Example: `https://supabase.co/storage/v1/object/public/items/item1.png`
   - No changes needed, app auto-detects full URLs

### Troubleshooting

**API Connection Issues:**
- Check `.env` file is properly configured
- Verify backend is running and accessible
- Check browser console for CORS errors
- Ensure backend allows requests from your domain

**Images Not Loading:**
- Verify image paths match database entries
- Check placeholder.png exists in `public/assets/images/`
- Inspect network tab for 404 errors

**Build Errors:**
- Run `npm install` to ensure all dependencies are installed
- Clear cache: `rm -rf node_modules package-lock.json` then `npm install`
- Check Node version is 18 or higher

## 🎨 Customization Ideas

### Add Detail Pages
Create detail pages for individual items/balls/enemies:
- Create `ItemDetail.jsx`, `BallDetail.jsx`, `EnemyDetail.jsx`
- Add routes in `App.jsx`
- Display full information, evolution trees, stats, etc.

### Add Evolution Tree Component
Visualize evolution chains:
- Use libraries like `react-flow` or `d3.js`
- Create interactive node-based diagrams

### Add Fusion Chart
Display all fusion combinations:
- Create a matrix or interactive selector
- Show which balls combine to create new ones

### Add Filters
Beyond search, add category filters:
- Filter by type, rarity, level, etc.
- Add dropdown menus or checkboxes

## 🔗 Useful Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [TanStack Query](https://tanstack.com/query/latest)
- [React Router](https://reactrouter.com/)
- [Netlify Documentation](https://docs.netlify.com/)

## 💡 Tips

1. **Development**: Keep the dev server running while coding for hot reload
2. **Testing**: Test on different screen sizes (mobile, tablet, desktop)
3. **Performance**: Use browser DevTools to check load times
4. **SEO**: Add meta tags in `index.html` if needed
5. **Analytics**: Consider adding Google Analytics or similar

---

**Happy coding! 🎮✨**

If you encounter any issues, check the browser console and terminal for error messages.
