import Image from "next/image";
import Qualsu from "../../../public/Qualsu.png"
import Ketaru from "../../../public/Ketaru.png"

export function Footer(){
    return (
        <footer className="bg-purple-400/5 rounded-lg shadow m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <a href="https://qual.su" target="_blank"><Image src={Qualsu} height="60" alt="Qualsu logo"/></a>
                        <span className="text-white">|</span>
                        <a href="https://ketaru.com" target="_blank"><Image src={Ketaru} height="40" alt="Qualsu logo" className="rounded-md"/></a>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                        <li>
                            <a href="https://feedback.qual.su" target="_blank" className="hover:underline me-4 md:me-6">Feedback</a>
                        </li>
                        <li>
                            <a href="/privacy" target="_blank" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/terms" target="_blank" className="hover:underline me-4 md:me-6">Terms Of Service</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/4ed6dbJZvZ" target="_blank" className="hover:underline me-4 md:me-6">Discord</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center text-gray-400">© 2024-2025 <a href="https://qual.su" className="hover:underline">Voicy</a></span>
            </div>
        </footer>
    )
}