import AuthGuard from '../src/Admin/Components/AuthGuard';
import Dashboard from './Admin/Pages/Dashboard';
import SignIn from './Admin/Pages/SignIn';
import Info from './components/Info';
import Home from './Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Specialization from './components/Specialization';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
const routes = [
    {
        path: "/",
        element: (
            <Home />

        ),
        children: [
            {
                index: true,
                element: <Info />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "education",
                element: <Education />,
            },
            {
                path: "experience",
                element: <Experience />,
            },
            {
                path: "specialization",
                element: <Specialization />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "skills",
                element: <Skills />,
            },
            {
                path: "contact-me",
                element: <ContactMe />,
            },
        ]
    },
    {
        path: "/admin/signin",
        element: <SignIn />,
    },
    {
        path: "/",
        element: (
            <AuthGuard>
                <Dashboard />
            </AuthGuard>
        ),
    },
];

export default routes;
