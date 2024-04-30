"use client"

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constents";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const MobileNav = () => {
	const pathname = usePathname();
	return (
		<section className="w-full max-w-[260px]">
			<Sheet>
				<SheetTrigger asChild>
					<Image src={'/icons/hamburger.svg'} width={32} height={32} alt="hamburger icons" className="sm:hidden cursor-pointer" />
				</SheetTrigger>
				<SheetContent side={"left"} className="bg-dark-1">
					<Link href={'/'} className="flex items-center gap-1">
						<Image src={'/icons/logo.svg'} width={32} height={32} alt="zoom logo"
							className="max-sm:size-10"
						/>
						<p className="text-[25px] font-extrabold text-white">TOOM</p>
					</Link>

					<div className="flex h-[calc(100vh-70px)] flex-col overflow-y-auto justify-between">
						<SheetClose asChild>
							<section className="flex flex-col h-full gap-5 pt-16 text-white">
								{
									sidebarLinks.map((link) => {
										const isActive = pathname === link.route || pathname.startsWith(link.route);
										return (
											<SheetClose asChild key={link.route}>
												<Link href={link.route} key={link.label} className={cn("flex gap-3 items-center rounded-lg p-4", {
													"bg-blue-500": isActive
												})}>
													<Image src={link.imageUrl} width={24} height={24} alt="image" />
													<p className="text-lg font-semibold">{link.label}</p>
												</Link>
											</SheetClose>
										)
									})
								}

							</section>
						</SheetClose>
					</div>
				</SheetContent>
			</Sheet>


		</section>
	)
}

export default MobileNav