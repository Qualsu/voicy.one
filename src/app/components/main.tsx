import { Button } from "@/components/ui/button"
import Keny from "../../../public/Keny.png"
import Logo from "../../../public/Logo.png"
import Discord from "../../../public/Discord.svg"
import Image from "next/image"
import Link from "next/link"

export default function Main() {
    return (
        <main className="flex justify-center flex-col md:flex-row">
            <div className="flex flex-col my-auto mx-4 ml-12 lg:ml-0">
                <Image src={Logo} alt="Logo" width={340} height={100} className="mx-auto md:mx-0 animate-fade-up animate-duration-700"/>
                <h1 className="text-white text-4xl lg:text-5xl my-4 text text-center md:text-left animate-fade-right animate-duration-700 animate-delay-600">Твое идеальное радио!</h1>
                <div className="flex flex-row gap-3 my-3 justify-center md:justify-start">
                    <Link href="https://discord.com/oauth2/authorize?client_id=1105500733333315644&permissions=3409920&integration_type=0&scope=bot" target="_blank">
                        <Button 
                            variant="outline" 
                            className="text-lg bg-[#6935FF] hover:bg-[#6935FF]/85 border-none text-white hover:text-white px-4 animate-fade-right animate-duration-700 animate-delay-700"
                        >
                            <Image src={Discord} alt="Discord" width={20} height={20} /> 
                            Добавить в Discord
                        </Button>
                    </Link>
                    <Link href="https://boosty.to/voicy" target="_blank">
                        <Button
                            variant="outline"
                            className="text-lg bg-linear-to-r from-[#000] to-[#1A0220] border-none text-white hover:text-white text-plus animate-fade-right animate-duration-700 animate-delay-700"
                            style={{ boxShadow: "0 0 18px -6px #C955FF" }}
                        >
                            plus
                        </Button>
                    </Link>
                </div>
            </div>
            <Image src={Keny} alt="Keny" width={500} height={300} className="hidden md:block keny-shadow animate-fade-left animate-duration-700 animate-delay-[800ms]"/>
        </main>
    )
}