// import { createBrowserRouter } from "react-router-dom";
// import MyImageComp from "../component/MyimageComp";
// import ListComp from "../component/ListComp";
// import MycorouselComp from "../component/MycorouselComp";

// const router = createBrowserRouter([
//     {path:"/",element:<MycorouselComp/>},
//     {path:"carousel",element:<MycorouselComp/>},
//     {path:"myimages",element:<MyImageComp/>},
//     {path:"list",element:<ListComp/>}
// ]);
// export default router; 








// import { createBrowserRouter } from "react-router-dom";
// import MyImaegsComp from "../component/MyImagesComp";
// import MyListComp from "../component/MyListComp";
// import MyCarosoulComp from "../component/MyCarosoulComp";
// import ReactHookComp from "../hooks/ReactHookComp";
// import UseEffectHookComp from "../hooks/UseEffectHookComp";
// import UseStateHookComp from "../hooks/UseStateHookComp";
// import PageNotFoundComp from "../layout/PageNotFoundComp";
// import DashboardComp from "../layout/DashboardComp";


// const router = createBrowserRouter([

//     {path:"dashboard", element:<DashboardComp/>,children:[
       
//          // parametrized routing
//     {path:"carousal", element:<MyCarosoulComp/>},

//     //  naming routing
//     {path:"images", element:<MyImaegsComp/>},


//     // child routing 
//     {
//         path:"hooks",
//         element:<ReactHookComp/>,
//         children:[
//             { path:"usestate", element:<UseStateHookComp/>},
//             {path:"useeffect", element:<UseEffectHookComp/>}
//         ],
//     },

//     {path:"list", element:<MyListComp/>},
//     ]},

   

//     //whild card routing
//     {path:"*" , errorElement:<PageNotFoundComp/>}

// ]);

// export default router;




// import { createBrowserRouter } from "react-router-dom";

// import DashboardComp from "../layout/DashboardComp";
// import PageNotFoundComp from "../layout/PageNotFoundComp";

// import MyImaegsComp from "../component/MyImagesComp";
// import MyListComp from "../component/MyListComp";
// import MyCarosoulComp from "../component/MyCarosoulComp";

// import ReactHookComp from "../hooks/ReactHookComp";
// import UseStateHookComp from "../hooks/UseStateHookComp";
// import UseEffectHookComp from "../hooks/UseEffectHookComp";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <DashboardComp />,
//         children: [
//             {
//                 path: "carousal",
//                 element: <MyCarosoulComp />
//             },
//             {
//                 path: "images",
//                 element: <MyImaegsComp />
//             },
//             {
//                 path: "hooks",
//                 element: <ReactHookComp />,
//                 children: [
//                     {
//                         path: "usestate",
//                         element: <UseStateHookComp />
//                     },
//                     {
//                         path: "useeffect",
//                         element: <UseEffectHookComp />
//                     }
//                 ]
//             },
//             {
//                 path: "list",
//                 element: <MyListComp />
//             }
//         ]
//     },
//     {
//         path: "*",
//         element: <PageNotFoundComp />
//     }
// ]);

// export default router;




import { createBrowserRouter } from "react-router-dom";

import MyimageComp from "../component/MyimageComp";
import MyListComp from "../component/ListComp";
import MycorouselComp from "../component/MycorouselComp";

import UseEffectHookComp from "../Hooks/UseEffectHookComp";
import UseStateHookComp from "../Hooks/UseStateHookComp";
import ReactHookComp from "../Hooks/ReactHookComp";

import PageNotFoundComp from "../Layout/PageNotFound";
import DashboardComp from "../Layout/DashboardComp";
import ListComp from "../component/ListComp";
import ProductDashComp from "../CURD/ProductDashComp";
import ProductAddComp from "../CURD/ProductAddComp";
import ProductUpdateComp from "../CURD/ProductUpdateComp";
// import DashboardComp from "../Layout/DashboardComp";
// import MyimageComp from "../component/MyimageComp";
// import MycorouselComp from "../component/MycorouselComp";

const router = createBrowserRouter([
    {
        path: "dashboard",
        element: <ProductDashComp/>,
        children: [
            {
                path: "",
                element: <MyimageComp/>
            },
            {
                path: "myimages",
                element: <MyimageComp/>
            },
            {
                path: "list",
                element: <MyListComp/>
            },
            {
                path: "carousel",
                element: <MycorouselComp/>
            },
            {
                path: "hooks",
                element: <ReactHookComp/>,
                children: [
                    {
                        path: "usestate",
                        element: <UseStateHookComp />
                    },
                    {
                        path: "useeffect",
                        element: <UseEffectHookComp />
                    }
                ],
            },
            {path:"productdash", element:<ProductDashComp></ProductDashComp>},
            {path:"productadd", element:<ProductAddComp></ProductAddComp>},
            {path:"productedit", element:<ProductUpdateComp></ProductUpdateComp>},

            {path:"list", element:<ListComp></ListComp>},
            
        ]
    },

    {
        path: "*",
        element: <PageNotFoundComp />
    }
]);

export default router;