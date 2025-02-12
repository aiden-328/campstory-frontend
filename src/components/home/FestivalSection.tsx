import { PATH } from "@constants/path";
import { Link } from "react-router";

export default function FestivalSection() {
  return (
    <section className="mb-14">
      <h2 className="text-highlight font-impact">축제와 함께</h2>
      <p className="text-sub-title text-gray-scale-300 mb-7">
        다양한 지역 축제와 캠핑의 색다른 조화를 경험해보세요.
      </p>
      <div className="flex gap-4">
        <img src="/images/main/main-festival-left.png" alt="" />
        <div className="flex flex-col justify-between gap-4">
          <img src="/images/main/main-festival-mid.png" alt="" />
          <div className="flex gap-5">
            <h3 className="text-[46px] font-impact w-2/6 leading-[60px] text-gray-scale-400">
              쏟아지는 <br /> 별들을 찾아서
            </h3>
            <div className="flex-1 flex flex-col justify-between">
              <p className="text-body2 text-gray-scale-300">
                도심의 불빛에서 벗어나 밤하늘을 수놓는 별들의 향연을 만나보세요. 빛나는 별자리와
                유성우가 펼치는 자연의 쇼는 캠핑의 낭만을 배가시켜줍니다. 별 관찰에 최적화된 캠핑
                명소, 천체 관측 팁, 특별한 천문 현상 일정까지! 캠핑 중 즐기는 밤하늘 여행, 지금
                떠나보세요. Campstory와 함께라면 쏟아지는 별빛 아래에서 잊지 못할 추억을 만들 수
                있습니다.
              </p>
              <Link
                to={PATH.eventSearch}
                className="block w-full py-1 text-center rounded bg-gray-scale-100"
              >
                더 알아보기
              </Link>
            </div>
          </div>
        </div>
        <img src="/images/main/main-festival-right.png" alt="" />
      </div>
    </section>
  );
}
