import Home from './Home'
import AuthGuard from '../src/Admin/Components/AuthGuard'
import Dashboard from './Admin/Pages/Dashboard'
const routes = [
    {
        path: "/home",
        element: <Home />,
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
