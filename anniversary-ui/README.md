# 💕 Anniversary UI - Getting Started Guide

## Project Structure
```
anniversary-ui/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── images/             # Your photos folder
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   └── photo6.jpg
├── audio/              # Optional: Add background music here
└── README.md           # This file
```

## Quick Start (3 Simple Steps)

### Step 1: Set Your Anniversary Date
Open `script.js` and find this line (near the top):
```javascript
const ANNIVERSARY_DATE = new Date('2022-08-13'); // Change this!
```

Replace `'2022-08-13'` with your actual anniversary date in **YYYY-MM-DD** format.

Example:
```javascript
const ANNIVERSARY_DATE = new Date('2020-06-15');
```

### Step 2: Add Your Photos
1. Find 6 of your best photos together (or however many you like)
2. Rename them to: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
3. Copy them into the `images/` folder
4. The UI will automatically display them!

**Photo Tips:**
- Use JPG or PNG format
- Recommended size: 1200x800px or larger
- The gallery will automatically resize them

### Step 3: Customize the Message
Open `index.html` and find the message section (around line 60):
```html
<p>
    Every moment with you is a treasure. Thank you for all the love, laughter, 
    and memories we've shared. Here's to many more adventures together! 💝
</p>
```

Replace this with your personal message!

## Features Included

✨ **Countdown Timer** - Shows years, days, hours, minutes together
📸 **Photo Gallery** - Grid display of all your photos
🎬 **Slideshow** - Auto-rotating featured photos with manual controls
💕 **Floating Hearts** - Animated background with floating hearts
💖 **Love Meter** - Animated infinite love meter
✨ **Smooth Animations** - Modern fade-in and slide effects
📱 **Responsive Design** - Works on mobile, tablet, and desktop
⌨️ **Keyboard Controls** - Use arrow keys to navigate slideshow

## How to Open & View

### Option 1: Direct File Open (Easiest)
1. Right-click `index.html` in VS Code
2. Select "Open with Live Server" (if you have Live Server extension)
3. Or simply double-click `index.html` to open in your browser

### Option 2: Use VS Code Live Server Extension
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html` → "Open with Live Server"
3. Page will auto-refresh when you save changes

### Option 3: Manual (No extensions needed)
1. Open `index.html` in any web browser
2. Changes will show after you refresh (F5)

## Customization Tips

### Change Colors
Open `styles.css` and look for color values like `#ff69b4` (hot pink):
```css
.title {
    color: #ff69b4;  /* Change this to your favorite color */
}
```

Popular colors:
- `#ff1493` - Deep Pink
- `#c71585` - Medium Violet Red
- `#ff6b9d` - Coral Pink
- `#ffd700` - Gold
- `#87ceeb` - Sky Blue

### Change Fonts
In `styles.css`, modify the font-family:
```css
body {
    font-family: 'Georgia', serif;  /* Try different fonts */
}
```

### Add Background Music (Optional)
1. Add an MP3 file to the `audio/` folder
2. Add this code to `index.html` before `</body>`:
```html
<audio id="bgMusic" autoplay loop muted>
    <source src="audio/your-song.mp3" type="audio/mpeg">
</audio>
```
Note: Most browsers require `muted` attribute to auto-play

### Change Animation Speed
In `styles.css`, look for lines like `animation: float 6s ease-in infinite;`
- Change `6s` to make it faster or slower
- Example: `3s` = faster, `10s` = slower

## Keyboard Shortcuts
- **Left Arrow** (←) - Previous photo in slideshow
- **Right Arrow** (→) - Next photo in slideshow
- **Manual Controls** - Click the ❮ and ❯ buttons

## Browser Compatibility
- ✅ Chrome/Edge (Best)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## Troubleshooting

**Photos not showing?**
- Check that files are named `photo1.jpg`, `photo2.jpg`, etc.
- Ensure they're in the `images/` folder
- Try reloading the page (F5)

**Countdown showing wrong time?**
- Check that you set the correct date in `script.js`
- Format must be: `'YYYY-MM-DD'`

**Animations not working?**
- Try a different browser
- Clear browser cache (Ctrl+Shift+Delete)

**Page looks different on mobile?**
- That's normal! It's responsive. Try resizing your browser window.

## Share Your Anniversary UI

Once you're done:
1. **Share the folder** - Give the entire `anniversary-ui` folder to your girlfriend
2. **Share link** - If hosted online, share the URL
3. **Make it special** - Open it on an anniversary date, Valentine's Day, or anytime! 💕

## Next Steps to Make It Even More Special

1. **Add more photos** - Create `photo7.jpg`, `photo8.jpg`, etc.
2. **Customize colors** - Pick colors that match your theme
3. **Personal touches** - Add more messages or sections
4. **Add music** - Follow the audio setup instructions above
5. **Enhance animations** - Modify timing in `styles.css`

## Need Help?

- Check the code comments - they explain how everything works!
- All HTML, CSS, and JavaScript are well-documented
- Search for `CHANGE THIS` comments in the files for customization points

---

**Made with 💕 for the one you love!**

Have fun creating something special! 🌹✨
