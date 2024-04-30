import { SignedIn, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import MobileNav from "./MobileNav"

const Navbar = () => {
	return (
		<nav className="justify-between flex fixed z-50 w-full bg-slate-500 px-6 py-4 lg:px-10">
			<Link href={'/'} className="flex items-center gap-1">
				<Image src={'/icons/logo.svg'} width={32} height={32} alt="zoom logo"
					className="max-sm:size-10"
				/>
				<p className="text-[25px] font-extrabold text-white max-sm:hidden">TOOM</p>
			</Link>
			<div className="flex justify-between items-center gap-4">
				<SignedIn>
					<UserButton />
				</SignedIn>
				<MobileNav />
			</div>
		</nav>
	)
}

export default Navbar