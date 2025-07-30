# 🎓 Canvas LMS Clone

A responsive front-end UI clone inspired by Canvas Learning Management System (LMS), built with React.js and modern web technologies. This project demonstrates a fully functional dashboard and course management interface with responsive design across desktop, tablet, and mobile devices.

## 🌐 Live Demo

**[View Live Application](https://canvasdashboard.vercel.app/)**




## ✨ Features

### 🏠 Dashboard (Home Page)
- **Responsive Sidebar Navigation**
  - Desktop: Expanded sidebar with text labels
  - Tablet: Icon-only sidebar
  - Mobile: Hamburger menu toggle
- **Welcome Header** with student name and current date
- **Course Grid** displaying 6 course cards with:
  - Course title and instructor
  - Progress bars
  - "Go to Course" buttons
  - Responsive layout (Desktop: 3 cols, Tablet: 2, Mobile: 1)
- **To-Do List** with 3-5 tasks featuring due dates and checkboxes
- **Recent Feedback** section
- **Quick Action Buttons** for starting new courses and viewing grades

### 📚 Course Detail Page (`/courses/:id`)
- **Breadcrumb Navigation**: Dashboard > Course > Module
- **Tabbed Interface** with three main sections:
  - **Overview**: Course modules, files, and resources
  - **Assignments**: Assignment list with due dates, points, and submission details
  - **Grades**: Grade tracking and performance metrics
- **Static Data Integration** with comprehensive course information

## 🛠 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Routing**: React Router DOM 7.7.1
- **Styling**: Tailwind CSS 4.1.11
- **UI Components**: Material-UI 7.2.0
- **Icons**: React Icons 5.5.0
- **Build Tool**: Vite 7.0.4
- **Development**: ESLint for code quality

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd study-befikar-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop** (1024px+): Full sidebar, 3-column course grid
- **Tablet** (768px - 1023px): Icon sidebar, 2-column course grid
- **Mobile** (< 768px): Hamburger menu, 1-column course grid

## 🗂 Project Structure

```
study-befikar-assignment/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and static files
│   │   └── img/
│   │       └── canvas.png
│   ├── componentes/       # Reusable components
│   │   ├── CourseCard.jsx
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Navigation/
│   │   └── Todo/
│   ├── data/             # Mock data
│   │   └── courses.json
│   ├── pages/            # Page components
│   │   ├── CourseDetails/
│   │   ├── Home/
│   │   ├── Calender.jsx/
│   │   ├── Inbox.jsx/
│   │   └── Help/
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # Project documentation
```

## 📊 Data Structure

The application uses mock data stored in `src/data/courses.json` with the following structure:

```json
{
  "id": 1,
  "title": "Course Title",
  "code": "COURSE123",
  "instructor": "Instructor Name",
  "progress": 75,
  "modules": [...],
  "assignments": [...]
}
```

## 🎯 Key Features Implemented

✅ **Responsive Navigation** - Adaptive sidebar for all screen sizes  
✅ **Course Dashboard** - Grid layout with course cards and progress tracking  
✅ **Course Details** - Comprehensive course information with tabbed interface  
✅ **To-Do List** - Interactive task management with checkboxes  
✅ **Mock Data Integration** - Realistic course and assignment data  
✅ **Modern UI/UX** - Clean, professional design inspired by Canvas LMS  
✅ **Mobile-First Design** - Optimized for all device types  

## 🔧 Customization

### Adding New Courses
Edit `src/data/courses.json` to add new courses with the required structure.

### Styling Modifications
The project uses Tailwind CSS for styling. Modify classes in components or update `src/index.css` for global styles.

### Component Development
New components can be added to the `src/componentes/` directory and imported as needed.

## 🚀 Deployment

The project is configured for deployment on Vercel with the included `vercel.json` configuration file.

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel --prod
```

## 📝 License

This project is created for assignment for an internship by Study Befikar.

## 👨‍💻 Author

**Tushar** 

---

*This project is a responsive Canvas LMS clone built with React.js, demonstrating modern web development practices and responsive design principles.*
