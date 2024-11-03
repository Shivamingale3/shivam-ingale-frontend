import Home from './Home';
import AuthGuard from '../src/Admin/Components/AuthGuard';
import Dashboard from './Admin/Pages/Dashboard';
import SignIn from './Admin/Pages/SignIn'
const routes = [
    {
        path: "/home",
        element: <Home />,
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
    }
    //     children: [
    //       {
    //         path: "super-admin/reseller",
    //         element: <Reseller />,
    //       },
    //     ],
    //   },
    //   {
    //     path: "/reseller/login",
    //     element: <SignIn />,
    //   },
    //   {
    //     path: "/",
    //     element: (
    //       <AuthGuard>
    //         <Layout />
    //       </AuthGuard>
    //     ),
    //     children: [
    //       {
    //         path: "/reseller/reseller-owner/:id",
    //         element: <Organization />,
    //       },
    //     ],
    //   },
];

export default routes;
