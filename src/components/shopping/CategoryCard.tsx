import { PATH } from "@constants/path";
import { useNavigate } from "react-router";

interface CategoryCardProps {
  src: string;
  catName: string;
}

export default function CategoryCard({ src, catName }: CategoryCardProps) {
  const navigate = useNavigate();

  const handleNavigateToSearch = (keyword: string) => {
    if (keyword.trim()) {
      navigate(`${PATH.shoppingSearch}?keyword=${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <>
      <button
        onClick={() => handleNavigateToSearch(catName)}
        className="flex flex-col items-center justify-center py-[40px] px-[60px] bg-white drop-shadow-custom rounded-xl hover:shadow-lg transition"
      >
        <div className="w-15 bg-gray-200 rounded-full">
          {/* 아이콘/이미지 */}
          <img src={src} alt="category" className="m-3" />
        </div>
        {/* 카테고리 이름 */}
        <span className="text-sub-title text-gray-scale-400 mt-3">{catName}</span>
      </button>
    </>
  );
}
