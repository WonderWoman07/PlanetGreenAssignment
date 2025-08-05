# Planet Green Solutions - React Frontend Challenge

A fully functional React authentication application with Login, Register, and Dashboard pages that integrates with PocketBase backend.

## 🚀 Features

### Authentication Flow
- **Login Page**: Authenticate existing users with email and password
- **Register Page**: Create new accounts with full validation
- **Route Protection**: Dashboard only accessible to authenticated users
- **Session Persistence**: Users stay logged in across page reloads

### UI/UX Features
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional design matching the provided wireframes
- **Form Validation**: Real-time validation with clear error messages
- **Loading States**: Visual feedback during authentication processes
- **Toast Notifications**: Success/error feedback for user actions

### Technical Features
- **PocketBase Integration**: Full integration with the provided backend
- **React Router**: Client-side routing with protected routes
- **Local Storage**: Persistent authentication state
- **Tailwind CSS**: Modern styling framework
- **Component Architecture**: Reusable, clean component structure

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd planetgreenassignment
   ```

2. **Install dependencies**
   ```bash
   npm install --force
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

The application is pre-configured to connect to the provided PocketBase instance:
- **Backend URL**: `https://pb.devpgs.app/_/`
- **Authentication**: Uses PocketBase's built-in authentication system

## 📱 Pages

### Login Page (`/login`)
- Email and password authentication
- Remember me functionality
- Link to registration page
- Error handling for invalid credentials

### Register Page (`/register`)
- Full name, username, email, and password fields
- Password confirmation validation
- Terms & Conditions modal
- Auto-login after successful registration

### Dashboard Page (`/dashboard`)
- Protected route (requires authentication)
- User welcome message with email display
- Sidebar navigation with icons
- Header with search and action buttons
- Placeholder cards for future content
- Logout functionality

## 🔐 Authentication Flow

1. **Registration**: Users can create new accounts with validation
2. **Login**: Existing users authenticate with email/password
3. **Session Management**: Authentication state persists across page reloads
4. **Route Protection**: Unauthenticated users are redirected to login
5. **Logout**: Clears session and redirects to login page

## 🎨 Design Implementation

The application implements the exact UI designs provided in the challenge:
- **Dark-themed forms** with proper contrast and accessibility
- **Responsive layouts** that work on all screen sizes
- **Modern styling** using Tailwind CSS
- **Consistent branding** with "Demo Panel" logo and styling

## 🧪 Testing

### Test Credentials
The application is configured to work with the provided PocketBase instance. You can test with:
- **Email**: (Use the credentials provided in the challenge)
- **Password**: (Use the credentials provided in the challenge)

### Manual Testing Steps
1. **Registration Flow**:
   - Navigate to `/register`
   - Fill in all required fields
   - Accept terms and conditions
   - Submit and verify auto-login to dashboard

2. **Login Flow**:
   - Navigate to `/login`
   - Enter valid credentials
   - Verify redirect to dashboard

3. **Route Protection**:
   - Try accessing `/dashboard` without authentication
   - Verify redirect to login page

4. **Logout Flow**:
   - Click logout button in dashboard
   - Verify redirect to login page

## 📁 Project Structure

```
src/
├── components/
│   ├── Login.js          # Login page component
│   ├── Register.js       # Registration page component
│   ├── Dashboard.js      # Dashboard page component
│   └── PrivateRoute.js   # Route protection component
├── pocketbase.js         # PocketBase configuration
├── App.js               # Main app component with routing
├── index.js             # App entry point
└── index.css            # Global styles with Tailwind
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Connect your GitHub repository
- **Vercel**: Import your project
- **GitHub Pages**: Use the build folder
- **Any static hosting**: Serve the build folder

## 🔧 Customization

### Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_POCKETBASE_URL=https://pb.devpgs.app
```

### Styling
The application uses Tailwind CSS. Modify `tailwind.config.js` to customize:
- Colors
- Typography
- Spacing
- Breakpoints

## 🐛 Troubleshooting

### Common Issues

1. **Authentication Errors**:
   - Verify PocketBase instance is accessible
   - Check network connectivity
   - Clear browser cache and localStorage

2. **Styling Issues**:
   - Ensure Tailwind CSS is properly installed
   - Check for CSS conflicts
   - Verify build process

3. **Routing Issues**:
   - Ensure React Router is installed
   - Check for conflicting routes
   - Verify component imports

## 📝 Assumptions & Notes

### Technical Assumptions
- PocketBase instance is accessible and properly configured
- User collection exists with required fields (email, password, username, name)
- Authentication endpoints are standard PocketBase endpoints

### Design Assumptions
- Mobile-first responsive design
- Accessibility considerations (ARIA labels, keyboard navigation)
- Modern browser support (ES6+, CSS Grid, Flexbox)

### Future Enhancements
- Add form validation libraries (Formik, React Hook Form)
- Implement toast notifications (react-toastify)
- Add loading spinners and animations
- Implement error boundaries
- Add unit tests with Jest and React Testing Library

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Ensure PocketBase instance is running
4. Clear browser cache and try again

## 📄 License

This project is created for the Planet Green Solutions React Frontend Challenge.

---

**Built with ❤️ using React, Tailwind CSS, and PocketBase**
