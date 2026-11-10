import Link from "next/link";
import GithubLogo from "@/public/githubLogo.svg?react";
import LinkedinLogo from "@/public/linkedinLogo.svg?react";
import InstaLogo from "@/public/instaLogo.svg?react";
import Logo from "./logo";

export default function Footer() {
    return (
        <footer className="w-full h-32 shrink-0 border-t border-[#ABB2BF] flex justify-center items-center">
            <div className="w-[calc(100vw-264px)] h-24 flex flex-col">
                <div className="w-full h-2/3 flex justify-between">
                    <div className="h-full text-sm">
                        <div className="flex gap-3 items-center">
                            <Logo hollow={false} color="#fff" size={30} />
                            <h1 className="font-extrabold">Peeyush</h1>
                            <Link href="mailto:chauhanpeeyush2473@gmail.com" className="pl-4">
                                <h1 className="text-[#ABB2BF] text-xs hover:text-white transition-colors cursor-pointer">
                                    chauhanpeeyush2473@gmail.com
                                </h1>
                            </Link>
                        </div>

                        <div className="mt-3 text-xs">AIML and front-end developer</div>
                    </div>
                    <div className="h-full">
                        <div className="font-extrabold flex justify-center">
                            Socials
                        </div>
                        <div className="flex justify-between gap-2">
                            <Link href="https://www.github.com/Peeyush2473" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF] hover:text-white transition-color duration-300 ">
                                <GithubLogo className="w-6.5 h-6.5" />
                            </Link>
                            <Link href="www.linkedin.com/in/peeyush-chauhan" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF] hover:text-white transition-color duration-300 pt-[0.6px] pl-[6px] scale-90">
                                <LinkedinLogo className="w-8 h-8" />
                            </Link>
                            <Link href="https://www.instagram.com/__peeyush.chauhan__" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF] hover:text-white transition-color duration-300 pt-[0.7px] scale-76">
                                <InstaLogo className="w-8 h-8" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full flex-1 bg-black">
                </div>
            </div>

        </footer>
    );
}