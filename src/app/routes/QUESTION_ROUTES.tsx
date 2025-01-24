import { PATH } from "@constants/path";
import QuestionDetail from "@pages/QuestionDetail";
import QuestionMain from "@pages/QuestionMain";

const QUESTION_ROUTES = [
  {
    path: PATH.question,
    element: <QuestionMain />,
  },
  {
    path: PATH.questionPostPath,
    element: <QuestionDetail />,
  },
  {
    path: PATH.questionCreate,
    element: <>question create</>,
  },
  {
    path: PATH.questionModifyPath,
    element: <>question modify</>,
  },
];

export default QUESTION_ROUTES;
