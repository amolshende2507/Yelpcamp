# Yelpcamp
# Campground (YelpCamp Clone)

A Node.js web app inspired by Colt Steele’s *YelpCamp* project. It lets users register, create campgrounds, add images, and review others’ posts.

---

## 🚀 Features

- Account registration, login, and authentication via **Passport.js**
- Full CRUD for campgrounds: create, edit, and delete
- Add a review (once per user per campground), edit or delete reviews
- User profiles show user info, their campgrounds, and reviews
- Search campgrounds by name or location
- Sort by rating, number of reviews, price, etc.
- Upload images via Cloudinary
- Integrate Mapbox for map display

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB + Mongoose  
- **Authentication**: Passport.js  
- **Templating**: EJS  
- **Storage**: Cloudinary for images  
- **Maps**: Mapbox API  
- **Styling**: Bootstrap

---

## 📦 Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables in a .env file:

env
Copy
Edit
DB_URL=<your MongoDB URI>
CLOUDINARY_CLOUD_NAME=<cloud name>
CLOUDINARY_KEY=<API key>
CLOUDINARY_SECRET=<secret>
MAPBOX_TOKEN=<Mapbox access token>
SECRET=<session secret>
Start MongoDB (locally or via Atlas). Then run:

bash
Copy
Edit
npm start
Visit the app at http://localhost:3000.

⚙️ Usage
Register or log in to create or manage campgrounds.

Add campgrounds with title, location, image, and description.

Submit or manage reviews on campground pages.

Navigate via search or sort options.
