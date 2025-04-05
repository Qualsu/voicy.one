import Image, { StaticImageData } from "next/image";

type CardProps = {
    img: StaticImageData | string
    title: string
    description: string
}

export default function SmallCard({ img, title, description }: CardProps) {
    return (
        <section className="flex flex-col items-center justify-center text-center">
            <Image src={img} alt="icon" width={200} height={200} className="" />
            <h1 className="text-5xl text">{title}</h1>
            <h3 className="text-2xl w-96 text">{description}</h3>
        </section>
    )
}