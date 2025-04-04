import { Button } from "@/components/ui/button"
import Keny from "../../../public/Keny.png"
import Logo from "../../../public/Logo.png"
import Discord from "../../../public/Discord.svg"
import Image from "next/image"

export default function Main() {
    return (
        <main className="flex justify-center flex-col md:flex-row ml-[8%]">
            <div className="flex flex-col my-auto mr-[10%] mx-4">
                <Image src={Logo} alt="Logo" width={340} height={100} className="mx-auto md:mx-0"/>
                <h1 className="text-white text-4xl lg:text-5xl my-4 text text-center md:text-left">Твое идеальное радио!</h1>
                <div className="flex flex-row gap-3 my-3 justify-center md:justify-start">
                    <Button variant="outline" className="text-lg bg-[#6935FF] hover:bg-[#6935FF]/85 border-none text-white hover:text-white px-4">
                        <Image src={Discord} alt="Discord" width={20} height={20} /> Добавить в Discord
                    </Button>
                    <Button
                        variant="outline"
                        className="text-lg bg-gradient-to-r from-[#000] to-[#1A0220] border-none text-white hover:text-white text-plus"
                        style={{ boxShadow: "0 0 18px -6px #C955FF" }}
                    >
                        plus
                    </Button>
                </div>
            </div>
            <Image src={Keny} alt="Keny" width={500} height={300} className="hidden md:block mr-[5%] keny-shadow"/>
        </main>
    )
}