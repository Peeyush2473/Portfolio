import Link from "next/link";
import Logo from "@/components/logo"

export default function Header() {
    return (
        <header className="flex h-20 items-center bg-zinc-400 text-2xl">
            <Link href="/" className="pl-4"> <Logo hollow={false} color="#fff" size={50} /></Link>
            {/* <Link href="/"> <Logo /></Link> */}
        </header>
    );
}