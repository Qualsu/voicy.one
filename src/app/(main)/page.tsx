import SmallCard from "../components/smallCard";
import LargeCard from "../components/largeCard";
import Main from "../components/main";

import LoveIcon from "../../../public/Love.png";
import SuccessIcon from "../../../public/Success.png";
import VoicyIcon from "../../../public/Voicy.png";
import QuesitionIcon from "../../../public/Question.png";
import Discord from "../../../public/Discord.svg";

export default function Home() {
  return (
      <>
        <Main />

        <div className="flex flex-row justify-center items-center flex-wrap gap-10 my-8">
          <span className="animate-fade-up animate-duration-1000 animate-delay-1000 animate-ease-in-out"><SmallCard img={LoveIcon} title="Удобно и комфортно" description="Простой, приятный для глаза дизайн"/></span>
          <span className="animate-fade-up animate-duration-1000 animate-delay-1100 animate-ease-in-out"><SmallCard img={SuccessIcon} title="Без перебоев" description="Работает 24/7 без перебоев"/></span>
          <span className="animate-fade-up animate-duration-1000 animate-delay-1200 animate-ease-in-out"><SmallCard img={VoicyIcon} title="Хороший выбор" description="Хоть и небольшой, но хороший выбор радио"/></span>
        </div>

        <div className="my-12 animate-fade-right animate-once animate-ease-in-out animate-duration-700 animate-delay-1500 intersect-full">
          <LargeCard
            img={QuesitionIcon}
            title="Есть вопросы?"
            description="Нашли баг или хотите предложить идею? Тогда заходите на Voicy Community!"
            button={true}
            buttonImg={Discord}
            buttonLink="https://discord.gg/4ed6dbJZvZ"
            buttonText="Перейти"
            buttonColor="#6935FF"
          />
        </div>
      </>
  );
}