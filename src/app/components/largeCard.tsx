import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CardProps = {
    img: StaticImageData | string
    title: string
    description: string
    button?: boolean
    buttonImg?: StaticImageData | string
    buttonText?: string
    buttonLink?: string
    buttonColor?: string
}

export default function LargeCard({ img, title, description, button, buttonImg, buttonText, buttonLink, buttonColor  }: CardProps) {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
            <div className="flex flex-col text-center md:text-left gap-4">
                <h1 className="text-6xl text">{title}</h1>
                <h3 className="text-3xl w-full max-w-[500px] text">{description}</h3>
                {button && (
                    <>
                        {buttonLink && (
                            <Link href={buttonLink} target="_blank">
                                <Button 
                                    variant="outline" 
                                    className={`text-lg bg-[${buttonColor}] hover:bg-[${buttonColor}]/85 border-none text-white hover:text-white px-4`}
                                >
                                    {buttonImg && <Image src={buttonImg} alt="Discord" width={20} height={20} />} 
                                    {buttonText}
                                </Button>
                            </Link>
                        )}
                    </>
                )}
            </div>
            <Image src={img} alt="icon" width={240} height={240} className="" />
        </section>
    )
}