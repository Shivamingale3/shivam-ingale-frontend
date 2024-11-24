import AuthGuard from '../src/Admin/Components/AuthGuard';
import Dashboard from './Admin/Pages/Dashboard';
import SignIn from './Admin/Pages/SignIn';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Info from './components/Info';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './Home';
import NotFound from './pages/NotFound';
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
    {
        path: "*",
        element: <NotFound />,
    },
];

export default routes;
