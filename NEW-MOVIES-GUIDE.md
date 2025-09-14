# Adding New Movies Guide

## How to Add New Movies to Your Website

### Step 1: Add Movie Images
Place your movie poster images in the `images/` folder with descriptive names like:
- `new-movie-title-2024.jpg`
- `action-movie-poster.webp`
- `drama-film-cover.jpg`

### Step 2: Add Movie Files
Place your movie video files in the `movies/` folder with matching names:
- `new-movie-title-2024.mp4`
- `new-movie-title-2024.mkv`

### Step 3: Update the Movie Database
Add your new movie entries to the `movies` array in `script.js`:

```javascript
{
    id: 16, // Use next available number
    title: "Your Movie Title",
    genre: "action", // action, drama, comedy, horror, scifi, thriller, south indian
    year: 2024,
    rating: 8.5,
    poster: "images/your-movie-poster.jpg", // Path to your image
    description: "Your movie description here"
}
```

### Current Files Structure:
- **Images folder**: Ready for new poster images
- **Movies folder**: Ready for new video files
- **Script.js**: Empty movies array ready for your content

### Supported Formats:
- **Images**: .jpg, .jpeg, .png, .webp
- **Videos**: .mp4, .mkv, .avi, .mov

### Example Entry:
```javascript
{
    id: 16,
    title: "New Action Movie",
    genre: "action",
    year: 2024,
    rating: 9.0,
    poster: "images/new-action-movie-2024.jpg",
    description: "An exciting new action movie with amazing stunts and storyline."
}
```

Your website is now ready for fresh content! Simply follow these steps to add your new movies.