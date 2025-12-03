## ✈️ Airline Management System
A comprehensive **React + Redux** application for managing airline check-in, in-flight services, and administrative operations with full authentication and role-based access control.

---

## 📌 Features

### 🎫 Check-In Module (Staff Access)
- **Flight Selection:** Browse and select from available flights
- **Interactive Seat Map:** 
  - Visual seat layout with real-time status
  - Color-coded indicators (Wheelchair: Blue, Infant: Pink, Checked-in: Green)
  - Click to select/change seats
- **Passenger Management:**
  - Check-in passengers with one click
  - Undo check-in functionality
  - View passenger details (name, seat, special requirements)
- **Advanced Filters:**
  - Filter by wheelchair requirements
  - Filter by infant passengers
  - Filter by check-in status
  - Combined filter support
- **Seat Change:** Reassign passenger seats with validation

### ✈️ In-Flight Services (Staff Access)
- **Meal Management:**
  - View current meal preferences
  - Change meal selections (Vegetarian, Vegan, Gluten-Free, Kosher, Halal, etc.)
  - Display special dietary requirements
- **Ancillary Services:**
  - Add/remove extra baggage
  - Priority boarding management
  - Lounge access control
  - Wi-Fi service provisioning
  - Seat upgrades
  - Travel insurance
- **In-Flight Shopping:**
  - Browse 24 items across 6 categories
  - Categories: Snacks, Beverages, Electronics, Travel Essentials, Cosmetics, Duty-Free
  - Quantity management with +/- controls
  - Real-time cart total calculation
  - Remove items functionality

### 🎛️ Admin Dashboard (Admin-Only Access)
#### Passenger Management Tab
- **CRUD Operations:**
  - Add new passengers with complete details
  - Update existing passenger information
  - Delete passengers
  - Form validation for required fields
- **Passenger Data Fields:**
  - Personal information (name, age, gender)
  - Seat assignment
  - Passport details (number, expiry, country)
  - Address information
  - Date of birth
  - Special requirements (wheelchair, infant)
- **Smart Filtering:**
  - Filter by flight
  - Identify passengers with missing passport details
  - Identify passengers with missing address
  - Identify passengers with missing date of birth

#### Services & Menu Management Tab
- **Ancillary Services Management:**
  - Add/update/delete ancillary services
  - Set service names and prices
  - Manage service catalog
- **Meal Options Management:**
  - Add/update/delete meal options
  - Configure meal types and names
  - Maintain dietary offerings
- **Shop Items Management:**
  - Add/update/delete shop items
  - Set item categories and prices
  - Manage in-flight shopping catalog

### 🔐 Authentication & Authorization
- **Mock Authentication System:**
  - Quick sign-in with mock users (no Firebase setup required)
  - Two mock users: John Doe and Jane Smith
  - User profile display with avatar
  - Session persistence via Redux
- **Role-Based Access Control:**
  - Two roles: Admin and Staff
  - Role selection dialog after login
  - Dynamic navigation based on role
  - Admin-only features protected
  - Switch roles without re-authentication
- **Security Features:**
  - Protected routes
  - Redux state management
  - Role-based component rendering

### 🎨 Non-Functional Features

#### Responsive Design
- **Three Breakpoints:**
  - Small devices (≤600px): Mobile phones
  - Medium devices (601-960px): Tablets
  - Large devices (≥961px): Desktops
- **Responsive Components:**
  - Adaptive layouts using Grid system
  - Flexible typography
  - Touch-friendly controls on mobile
  - Responsive navigation

#### Performance Optimization
- **Lazy Loading:**
  - Code splitting for major components
  - Suspense boundaries with loading indicators
  - Reduced initial bundle size
- **Redux Thunk:**
  - Async authentication actions
  - loginWithGoogle thunk for Google OAuth
  - logoutUser thunk for sign-out
  - Proper loading states

#### Accessibility (WCAG 2.0 Level A)
- **Keyboard Navigation:**
  - Full keyboard accessibility
  - Visible focus indicators (3px blue outline)
  - Skip to main content link
- **Screen Reader Support:**
  - ARIA labels on all interactive elements
  - Semantic HTML structure
  - aria-current for navigation
  - role attributes for custom components
  - aria-live regions for dynamic content
- **Visual Accessibility:**
  - High contrast mode support
  - Reduced motion support
  - Minimum 44x44px touch targets
  - Color contrast compliance
- **Forms:**
  - Associated labels
  - Error announcements
  - Required field indicators

#### SEO Optimization
- **Meta Tags:**
  - Comprehensive description
  - Keywords optimization
  - Open Graph tags for social sharing
  - Twitter card metadata
  - Canonical URL
- **Semantic HTML:**
  - Proper heading hierarchy
  - Descriptive page title
  - Alt text for images
  - Structured content

#### Testing
- **Unit Tests:**
  - Jest + React Testing Library
  - Auth component test suite
  - 9 test cases covering authentication flow
  - Redux state management tests
  - Accessibility tests
- **Test Coverage:**
  - Login screen rendering
  - User profile display
  - Role management
  - Logout functionality
  - Loading states
  - Error handling

#### Code Quality
- **Modern React:**
  - Functional components with hooks
  - React 19.0.0
  - Strict mode enabled
- **State Management:**
  - Redux Toolkit 2.6.1
  - Three feature slices (checkIn, admin, auth)
  - Normalized state structure
  - Async thunk actions
- **Styling:**
  - SCSS/Sass 1.85.1
  - Material-UI 6.4.7
  - Responsive mixins
  - Flex layout utilities
  - Global accessibility styles

---

## 📊 Technology Stack

### Frontend Framework
- **React** 19.0.0 - UI library with hooks and functional components
- **React DOM** 19.0.0 - DOM rendering
- **React Scripts** 5.0.1 - Build tooling

### State Management
- **Redux Toolkit** 2.6.1 - Centralized state management
- **React Redux** 9.2.0 - React bindings for Redux
- **Redux Thunk** - Async action creators (included in Redux Toolkit)

### UI Framework
- **Material-UI (MUI)** 6.4.7 - Component library
- **Material Icons** 6.4.7 - Icon set
- **Emotion** 11.14.0 - CSS-in-JS styling

### Styling
- **SCSS/Sass** 1.85.1 - CSS preprocessor
- Custom responsive breakpoints
- Flex layout utilities
- Accessibility styles (WCAG 2.0)

### Authentication
- **Mock Authentication** - No external setup required
- Role-based access control
- Session management via Redux

### Testing
- **Jest** 27.5.1 - Test runner
- **React Testing Library** 13.4.0 - Component testing
- **User Event** 13.5.0 - User interaction simulation

### Development Tools
- **Web Vitals** 2.1.4 - Performance metrics
- **ESLint** - Code linting
- **Prettier** - Code formatting

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/airline-management.git
cd airline-management
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run Development Server
```sh
npm start
```

The application will open at `http://localhost:3000`

### 5️⃣ Run Tests
```sh
npm test
```

### 6️⃣ Build for Production
```sh
npm run build
```

---

## 🎯 Usage Guide

### Getting Started
1. **Sign In:** Click "Sign in with Google" button (uses mock authentication)
2. **Select User:** Choose from mock users (John Doe or Jane Smith)
3. **Select Role:** Choose Admin or Staff role
4. **Navigate:** Use the navigation bar to access different modules

### Mock Users
- **John Doe** (john.doe@airline.com)
- **Jane Smith** (jane.smith@airline.com)

### Staff Workflow
1. **Check-In Module:**
   - Select a flight from the list
   - View seat map and passenger list
   - Click "Check-In" on a passenger
   - Use filters to find specific passengers
   - Change seats if needed

2. **In-Flight Module:**
   - Select passenger
   - Change meal preferences
   - Add/remove ancillary services
   - Browse and add shop items
   - Review cart total

### Admin Workflow
1. **Passenger Management:**
   - Click "+ Add Passenger" button
   - Fill in passenger details
   - Use filters to find passengers with missing info
   - Edit or delete existing passengers

2. **Services Management:**
   - Navigate to "Services & Menu" tab
   - Manage ancillary services catalog
   - Update meal options
   - Maintain shop items inventory

### Role Switching
- Click on your profile in the navigation bar
- Select different role from dropdown
- Navigation will update based on permissions

---

## 📁 Project Structure

```
casestudy-airline/
├── public/
│   ├── index.html           # SEO-optimized HTML template
│   ├── manifest.json        # PWA manifest
│   └── robots.txt           # Search engine directives
├── src/
│   ├── components/
│   │   ├── AdminDashboard.js    # Admin panel (747 lines)
│   │   ├── Auth.js              # Authentication component (179 lines)
│   │   ├── FlightList.js        # Flight selection component
│   │   ├── InFlight.js          # In-flight services (494 lines)
│   │   ├── SeatMap.js           # Seat map visualization
│   │   └── StaffCheckIn.js      # Check-in interface (509 lines)
│   ├── slices/
│   │   ├── adminSlice.js        # Admin state management
│   │   ├── authSlice.js         # Authentication state + async thunks
│   │   └── checkInSlice.js      # Check-in state management
│   ├── styles/
│   │   ├── Accessibility.scss   # WCAG 2.0 styles
│   │   ├── FlightList.scss      # Flight list styles
│   │   └── SeatMap.scss         # Seat map styles
│   ├── data/
│   │   └── flightData.js        # Mock data (3 flights, 20+ passengers)
│   ├── __tests__/
│   │   ├── Auth.test.js         # Auth component tests (9 test cases)
│   │   └── FlightList.test.js   # Flight list tests
│   ├── App.js                   # Main app with routing & lazy loading
│   ├── App.scss                 # Global responsive styles
│   ├── Store.js                 # Redux store configuration
│   ├── firebaseConfig.js        # Firebase authentication setup
│   └── index.js                 # Application entry point
├── ACCESSIBILITY.md             # Accessibility documentation
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

---

## 🧪 Testing

### Unit Tests
The project includes comprehensive unit tests for the Auth component:

```sh
npm test
```

**Test Coverage:**
- ✅ Login screen rendering
- ✅ User profile display when authenticated
- ✅ Role chip display (Admin/Staff)
- ✅ Role dropdown accessibility
- ✅ Logout functionality
- ✅ Loading state handling
- ✅ Error message display
- ✅ Accessibility features (ARIA labels)

### Manual Testing Checklist

#### Authentication
- [ ] Google sign-in works
- [ ] Role selection dialog appears
- [ ] User profile displays correctly
- [ ] Logout clears session
- [ ] Role switching updates UI

#### Check-In Module
- [ ] Flight selection updates seat map
- [ ] Check-in toggles passenger status
- [ ] Undo check-in works
- [ ] Filters apply correctly
- [ ] Seat change validates input

#### In-Flight Module
- [ ] Meal preferences update
- [ ] Ancillary services add/remove
- [ ] Shop items quantity control
- [ ] Cart total calculates correctly

#### Admin Dashboard
- [ ] Add passenger saves data
- [ ] Edit passenger updates correctly
- [ ] Delete passenger removes record
- [ ] Filters identify missing data
- [ ] Services CRUD operations work

#### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader announces content
- [ ] Skip to main content link works
- [ ] High contrast mode supported

#### Responsive Design
- [ ] Mobile layout (≤600px) adapts
- [ ] Tablet layout (601-960px) displays well
- [ ] Desktop layout (≥961px) optimal
- [ ] Touch targets minimum 44x44px

---

## 🚀 Performance Optimization

### Implemented Optimizations
1. **Code Splitting:**
   - Lazy loading for StaffCheckIn component
   - Lazy loading for InFlight component
   - Lazy loading for AdminDashboard component
   - Suspense boundaries with loading indicators

2. **Redux Optimization:**
   - Normalized state structure
   - Memoized selectors
   - Efficient action dispatching

3. **Bundle Size:**
   - Tree shaking enabled
   - Production builds optimized
   - Material-UI tree shaking

### Lighthouse Targets
- **Performance:** ≥80
- **Accessibility:** ≥80
- **Best Practices:** ≥80
- **SEO:** ≥80

---

## ♿ Accessibility Features

For detailed accessibility documentation, see [ACCESSIBILITY.md](ACCESSIBILITY.md)

**Key Features:**
- WCAG 2.0 Level A compliant
- Keyboard navigation support
- Screen reader optimized
- Focus indicators on all interactive elements
- High contrast mode support
- Reduced motion support
- Semantic HTML structure
- ARIA labels and roles

---

## 📦 Dependencies

### Core Dependencies
```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "redux": "^5.1.0",
  "@reduxjs/toolkit": "^2.6.1",
  "react-redux": "^9.2.0",
  "@mui/material": "^6.4.7",
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.0",
  "firebase": "^11.4.0",
  "sass": "^1.85.1"
}
```

### Dev Dependencies
```json
{
  "@testing-library/react": "^13.4.0",
  "@testing-library/jest-dom": "^5.17.0",
  "@testing-library/user-event": "^13.5.0",
  "react-scripts": "5.0.1"
}
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 📞 Support

For issues, questions, or suggestions, please open an issue in the GitHub repository.

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Material-UI Documentation](https://mui.com/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [WCAG 2.0 Guidelines](https://www.w3.org/WAI/WCAG20/quickref/)

---

**Made with ❤️ for efficient airline operations**
