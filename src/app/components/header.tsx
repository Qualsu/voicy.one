import { Separator } from "@/components/ui/separator"
import Logo from "../../../public/Logo.png"
import Image from "next/image"

export default function Header() {
    return (
        <nav className="flex justify-center flex-col gap-x-12 py-4">
            <Image src={Logo} alt="Logo" width={90} height={50} className="ml-[5%]" />
            <Separator className="bg-gradient-to-r from-[#480072] to-[#FF3E91] w-[90%] h-1 rad m-2 mx-auto rounded-xl"/>
        </nav>
    )
}