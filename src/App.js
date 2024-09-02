import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./layout/Layout";
import ChildrenEducation from "./pages/ChildrenEducationPlan";
import Esusu from "./pages/Esusu";
import MoneyAppreciation from "./pages/MoneyAppreciationPlan";
import SmartKidEducation from "./pages/SmartKidEduPlan";
import AllianceInvestmentPlus from "./pages/AllianceInvestmentPlusPlan";
import InvestmentSpecialPlan from "./pages/InvestmentSpecialPlan";
import TempPage from "./pages/TemplatePage";


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
        path: "/investment-special",
        element: <InvestmentSpecialPlan />,
      },
      {
        path: "/alliance-investment-plus",
        element: <AllianceInvestmentPlus />,
      },
      {
        path: "/temp-page",
        element: <TempPage/>,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;