/// <reference types="vite/client" />
interface ImportMeta {
  env: {
    VITE_API_BASE_URL: string;
    VITE_GO_CAMPING_API_KEY: string;
    VITE_TOUR_API_KEY: string;
    VITE_WEATHER_API_KEY: string;
    VITE_NAVER_API_ID_KEY: string;
    VITE_NAVER_SECRET_KEY: string;
    VITE_NAVER_LOGIN_API_ID_KEY: string;
    VITE_KAKAO_API_KEY: string;
    VITE_GOOGLE_API_KEY: string;
    VITE_REDIRECT_URI: string;
  };
}

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  kakao: any;
}
