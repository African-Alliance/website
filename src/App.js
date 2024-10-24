import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./layout/Layout";
import ChildrenEducation from "./pages/ChildrenEducationPlan";
import MoneyAppreciation from "./pages/MoneyAppreciationPlan";
import SmartKidEducation from "./pages/SmartKidEduPlan";
import AllianceInvestmentPlus from "./pages/AllianceInvestmentPlusPlan";
import InvestmentSpecialPlan from "./pages/InvestmentSpecialPlan";
import TempPage from "./pages/TemplatePage";
import GroupInvestment from "./pages/GroupInvestment";
import TermAssurance from "./pages/TermAssurance";
import IncomeInvestment from "./pages/IncomeInvestment";
import Board from "./pages/BoardMembers";
import Management from "./pages/ManagementTeam";


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
        path: "/group-investment",
        element: <GroupInvestment />,
      },
      {
        path: "/money-appreciation",
        element: <MoneyAppreciation />,
      },
      {
        path: "/term-assurance",
        element: <TermAssurance />,
      },
      {
        path: "/income-investment",
        element: <IncomeInvestment />,
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
        path: "/our-board",
        element: <Board />,
      },
      {
        path: "/management",
        element: <Management />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;