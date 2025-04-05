import { Separator } from "@/components/ui/separator"
import Logo from "../../../public/Logo.png"
import Image from "next/image"

export function Header() {
    return (
        <header className="flex justify-center flex-col w-full max-w-[1500px] mx-auto gap-x-12 py-4">
            <a href="/">
                <Image src={Logo} alt="Logo" width={90} height={50} className="ml-[5%]" />
            </a>
            <Separator className="bg-linear-to-r from-[#480072] to-[#FF3E91] w-[90%] h-1 rad m-2 mx-auto rounded-xl"/>
        </header>
    )
}