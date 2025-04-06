import Image from "next/image";
import Voicy from "../../public/Voicy.png";
import oldVoicy from "../../public/oldVoicy.png";

const NotFound = () => {
  return (
        <section className="flex justify-center md:flex-row flex-col items-center mt-6">
            <title>404 Not found</title>
            <Image src={Voicy} width={200} alt="Voicy" className="m-3 mb-12 mr-3 hidden md:flex items-center -rotate-6"/>
            <div className="text-center mx-2 mb-8 ml-0 md:ml-12">
                <h1 className="text-7xl md:text-8xl my-5 md:my-2 text">
                    404
                </h1>

                <h3 className="text-2xl break-word max-w-[500px] text px-4 md:px-0">
                    Страница не найдена
                </h3>

                <div  className="text">
                    <a href="/">
                        На главную
                    </a>
                </div>
            </div>
            <Image src={oldVoicy} width={200} alt="Voicy" className="m-3 mt-16 ml-12 md:mr-2 hidden md:flex items-center rotate-12"/>
        </section>
  );
};

export default NotFound;