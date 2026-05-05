# Project Images Setup Guide

## 📸 How to Add Your 6 Project Images

### Step 1: Prepare Your Images

You have 6 project images. Name them as follows:
- `1.jpg` or `1.png` - For Ongoing Project 1
- `2.jpg` or `2.png` - For Ongoing Project 2
- `3.jpg` or `3.png` - For Ongoing Project 3
- `4.jpg` or `4.png` - For Completed Project 1
- `5.jpg` or `5.png` - For Completed Project 2
- `6.jpg` or `6.png` - For Completed Project 3

### Step 2: Upload Images

Place all 6 images in this folder:
```
DigambaraConstructions/public/images/
```

Your folder structure should look like:
```
public/
  images/
    Logo.png
    youtube_banner.png
    1.jpg  ← Your image
    2.jpg  ← Your image
    3.jpg  ← Your image
    4.jpg  ← Your image
    5.jpg  ← Your image
    6.jpg  ← Your image
```

### Step 3: Update Project Details

#### For Ongoing Projects (Images 1, 2, 3)

Open file: `src/app/pages/OngoingProjects.tsx`

Update these fields for each project:

```typescript
{
  id: 1,
  name: "Project Name 1",           // ← UPDATE: Add real project name
  location: "Location 1",            // ← UPDATE: Add real location
  client: "Client Name 1",           // ← UPDATE: Add real client name
  startDate: "Start Date",           // ← UPDATE: e.g., "Jan 2024"
  expectedCompletion: "Expected Date", // ← UPDATE: e.g., "Dec 2025"
  progress: 75,                      // ← UPDATE: Progress percentage (0-100)
  area: "Area sq ft",                // ← UPDATE: e.g., "50,000 sq ft"
  description: "Project description", // ← UPDATE: Add description
  image: "/images/1.jpg"             // ← Already set (change to .png if needed)
}
```

#### For Completed Projects (Images 4, 5, 6)

Open file: `src/app/pages/CompletedProjects.tsx`

Update these fields for each project:

```typescript
{
  id: 1,
  name: "Project Name 4",            // ← UPDATE: Add real project name
  location: "Location 4",            // ← UPDATE: Add real location
  completionDate: "Completion Date", // ← UPDATE: e.g., "Dec 2024"
  area: "Area sq ft",                // ← UPDATE: e.g., "45,000 sq ft"
  units: "Units/Type",               // ← UPDATE: e.g., "120 Apartments"
  description: "Project description", // ← UPDATE: Add description
  features: ["Feature 1", "Feature 2"], // ← UPDATE: Add features
  image: "/images/4.jpg"             // ← Already set (change to .png if needed)
}
```

---

## 📋 Quick Reference: What to Update

### Ongoing Projects (3 projects using images 1, 2, 3)

| Field | Example | Your Value |
|-------|---------|------------|
| name | "Luxury Residential Complex" | _____________ |
| location | "Beed, Maharashtra" | _____________ |
| client | "ABC Developers Pvt Ltd" | _____________ |
| startDate | "Jan 2024" | _____________ |
| expectedCompletion | "Dec 2025" | _____________ |
| progress | 75 | _____________ |
| area | "50,000 sq ft" | _____________ |
| description | "Premium residential complex..." | _____________ |

### Completed Projects (3 projects using images 4, 5, 6)

| Field | Example | Your Value |
|-------|---------|------------|
| name | "Green Valley Apartments" | _____________ |
| location | "Beed, Maharashtra" | _____________ |
| completionDate | "Dec 2024" | _____________ |
| area | "45,000 sq ft" | _____________ |
| units | "120 Apartments" | _____________ |
| description | "Eco-friendly residential..." | _____________ |
| features | ["Solar Power", "Clubhouse"] | _____________ |

---

## 🎯 Current Setup

### Ongoing Projects Page:
- **Project 1** → Uses `/images/1.jpg`
- **Project 2** → Uses `/images/2.jpg`
- **Project 3** → Uses `/images/3.jpg`

### Completed Projects Page:
- **Project 1** → Uses `/images/4.jpg`
- **Project 2** → Uses `/images/5.jpg`
- **Project 3** → Uses `/images/6.jpg`

---

## ✅ Checklist

- [ ] Rename your 6 images to: 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg
- [ ] Upload all images to `public/images/` folder
- [ ] Update project names in `OngoingProjects.tsx`
- [ ] Update client names in `OngoingProjects.tsx`
- [ ] Update locations in both files
- [ ] Update dates in both files
- [ ] Update descriptions in both files
- [ ] Update features in `CompletedProjects.tsx`
- [ ] Test the website: `npm run dev`
- [ ] Verify all images display correctly

---

## 💡 Tips

1. **Image Format**: Use `.jpg` or `.png` format
2. **Image Size**: Recommended size: 1200x800 pixels or similar aspect ratio
3. **Image Quality**: Use high-quality images but compress them for web (under 500KB each)
4. **Backup**: Keep original images in a separate folder before renaming

---

## 🚀 After Adding Images

Once you've added the images and updated the details:

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Check both pages:
   - http://localhost:5173/projects/ongoing
   - http://localhost:5173/projects/completed

3. Verify:
   - All images load correctly
   - All text displays properly
   - No broken images

---

**Ready to add your project details? Just let me know the information and I'll update the files for you!** 📝
