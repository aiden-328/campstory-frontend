import HomeLayout from "@components/layouts/HomeLayout";
import { createBrowserRouter } from "react-router";
import HOME_ROUTES from "./routes/HOME_ROUTES";
import RootLayout from "@components/layouts/RootLayout";
import CAMPING_ROUTES from "./routes/CAMPING_ROUTES";
import EVENT_ROUTES from "./routes/EVENT_ROUTES";
import SHOPPING_ROUTES from "./routes/SHOPPING_ROUTES";
import RESTAURANT_ROUTES from "./routes/RESTAURANT_ROUTES";
import COMMUNITY_ROUTES from "./routes/COMMUNITY_ROUTES";
import QUESTION_ROUTES from "./routes/QUESTION_ROUTES";
import AUTH_ROUTES from "./routes/AUTH_ROUTES";
import AuthMyPageLayout from "@components/layouts/AuthMyPageLayout";
import AUTH_MYPAGE_ROUTES from "./routes/AUTH_MYPAGE_ROUTES";
import { checkAuthLoader, tokenLoader } from "@utils/authToken";
import { logoutAction } from "@pages/Logout";
import { PATH } from "@constants/path";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: tokenLoader,
    shouldRevalidate: () => true, // 항상 재검증
    errorElement: <p style={{ textAlign: "center" }}>404</p>,
    children: [
      {
        path: "",
        element: <HomeLayout />,
        children: [
          {
            path: "/",
            children: [
              ...HOME_ROUTES,
              ...CAMPING_ROUTES,
              ...EVENT_ROUTES,
              ...SHOPPING_ROUTES,
              ...RESTAURANT_ROUTES,
              ...COMMUNITY_ROUTES,
              ...QUESTION_ROUTES,
            ],
          },
        ],
      },
      {
        path: "/",
        children: [
          {
            path: "/",
            children: AUTH_ROUTES,
          },
        ],
      },
      {
        path: "/",
        element: <AuthMyPageLayout />,
        loader: checkAuthLoader,
        children: [
          {
            path: "/",
            children: AUTH_MYPAGE_ROUTES,
          },
        ],
      },
      {
        path: PATH.logout,
        action: logoutAction,
      },
    ],
  },
]);

export default router;
