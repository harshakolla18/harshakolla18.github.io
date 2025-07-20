# Firebase Backend Setup for Portfolio

This guide will help you set up Firebase as the backend for your React portfolio application.

## 🚀 Firebase Setup Steps

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "harsha-portfolio")
4. Choose whether to enable Google Analytics (recommended)
5. Click "Create project"

### 2. Enable Firebase Services

#### Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location (choose closest to your users)
5. Click "Done"

#### Storage
1. Go to "Storage" in Firebase Console
2. Click "Get started"
3. Choose "Start in test mode"
4. Select the same location as Firestore
5. Click "Done"

#### Authentication (Optional)
1. Go to "Authentication" in Firebase Console
2. Click "Get started"
3. Enable the sign-in methods you want (Email/Password, Google, etc.)

### 3. Get Firebase Configuration

1. In Firebase Console, click the gear icon ⚙️ next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>)
5. Register your app with a nickname (e.g., "portfolio-web")
6. Copy the configuration object

### 4. Update Firebase Configuration

Replace the placeholder values in `src/firebase/config.js` with your actual Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

### 5. Set Up Firestore Security Rules

In Firebase Console → Firestore Database → Rules, update the rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all documents
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null; // Only authenticated users can write
    }
    
    // Specific rules for messages collection
    match /messages/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 6. Set Up Storage Security Rules

In Firebase Console → Storage → Rules, update the rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null; // Only authenticated users can upload
    }
  }
}
```

## 🔧 Troubleshooting: "Failed to Send!" Error

If you're getting a "Failed to Send!" error after implementing Google authentication, follow these steps:

### 1. Check Firestore Security Rules
Make sure your Firestore rules allow authenticated users to write to the messages collection:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 2. Enable Google Authentication
1. Go to Firebase Console → Authentication → Sign-in method
2. Enable "Google" provider
3. Add your authorized domains (localhost for development)

### 3. Check Browser Console
Open browser developer tools and check for any error messages in the console when submitting the form.

### 4. Test Firestore Connection
You can test if Firestore is working by manually creating a document in the Firebase Console.

## 📊 Database Structure

Here's the recommended Firestore collections structure:

### Messages Collection (for contact form)
```javascript
{
  id: "auto-generated",
  name: "User Name",
  email: "user@example.com",
  subject: "Message Subject",
  message: "Message content",
  userId: "firebase-auth-user-id",
  userEmail: "google-user-email",
  timestamp: "2024-01-01T00:00:00.000Z",
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Projects Collection
```javascript
{
  id: "auto-generated",
  title: "Project Name",
  description: "Project description",
  technologies: ["React", "Firebase", "Node.js"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  imageUrl: "https://...",
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Experiences Collection
```javascript
{
  id: "auto-generated",
  company: "Company Name",
  position: "Job Title",
  startDate: "2023-01",
  endDate: "2023-12", // or null for current
  description: "Job description",
  technologies: ["React", "Node.js"],
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Education Collection
```javascript
{
  id: "auto-generated",
  institution: "University Name",
  degree: "Bachelor's in Computer Science",
  graduationDate: "2023-05",
  gpa: "3.8",
  description: "Additional details",
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Skills Collection
```javascript
{
  id: "auto-generated",
  name: "React",
  category: "Frontend",
  proficiency: 90, // 0-100
  createdAt: timestamp,
  updatedAt: timestamp
}
```

## 🔧 Usage Examples

### Using Firebase Hooks in Components

```javascript
import { useProjects, useExperiences } from '../hooks/useFirebase';

const MyComponent = () => {
  const { projects, loading, error } = useProjects();
  const { experiences } = useExperiences();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>{project.title}</div>
      ))}
    </div>
  );
};
```

### Manual Firebase Operations

```javascript
import { createDocument, updateDocument, deleteDocument } from '../firebase/firestore';
import { uploadImage } from '../firebase/storage';

// Create a new project
const newProject = await createDocument('projects', {
  title: 'My Project',
  description: 'Project description',
  technologies: ['React', 'Firebase']
});

// Upload an image
const imageUrl = await uploadImage(file, 'projects');

// Update a project
await updateDocument('projects', projectId, {
  title: 'Updated Title'
});

// Delete a project
await deleteDocument('projects', projectId);
```

## 🚀 Deployment

### Option 1: GitHub Pages (Recommended for Portfolio)
```bash
npm run deploy
```

### Option 2: Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

## 🔒 Security Considerations

1. **Environment Variables**: Store Firebase config in environment variables for production
2. **Security Rules**: Implement proper Firestore and Storage security rules
3. **Authentication**: Add user authentication for admin features
4. **Rate Limiting**: Consider implementing rate limiting for public APIs

## 📝 Environment Variables

Create a `.env` file in your project root:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

Then update `src/firebase/config.js`:

```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
```

## 🎯 Next Steps

1. Set up your Firebase project following the steps above
2. Update the configuration in `src/firebase/config.js`
3. Test the Firebase integration using the example component
4. Integrate Firebase into your existing portfolio components
5. Deploy your application

## 📚 Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Storage Documentation](https://firebase.google.com/docs/storage)
- [React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks) 