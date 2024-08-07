import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./layout/Layout";
import ChildrenEducation from "./pages/ChildrenEducationPlan";
import Esusu from "./pages/Esusu";
import MoneyAppreciation from "./pages/MoneyAppreciationPlan";
import SmartKidEducation from "./pages/SmartKidEduPlan";
import AnnuityPlan from "./pages/AnnuityPlans"
import AllianceInvestmentPlus from "./pages/AllianceInvestmentPlusPlan";


// routing the pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        
      },
      {
        path: "/children-education",
        element: <ChildrenEducation />,
      },
      {
        path: "/esusu",
        element: <Esusu />,
      },
      {
        path: "/money-appreciation",
        element: <MoneyAppreciation />,
      },
      {
        path: "/mortgate-appreciation",
        element: <MoneyAppreciation />,
      },
      {
        path: "/smart-kid-education",
        element: <SmartKidEducation />,
      },
      {
        path: "annuity",
        element: <AnnuityPlan />,
      },
      {
        path: "alliance-investment-plus",
        element: <AllianceInvestmentPlus/>,
      },
    ],
  },
]);

export default router;