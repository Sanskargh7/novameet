"use client"
import { sidebarLinks } from "@/constents";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Sidebar = () => {
	const pathname = usePathname();
	return (
		<section className="sticky top-0 left-0 pt-20 flex h-screen w-fit justify-between flex-col p-6 bg-slate-500 text-white max-sm:hidden lg:w-[265px]">
			<div className="flex flex-1 flex-col gap-5">
				{
					sidebarLinks.map((link) => {
						const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
						return (
							<Link href={link.route} key={link.label} className={cn("flex gap-3 items-center rounded-lg justify-start p-3", {
								"bg-blue-300": isActive
							})}>
								<Image src={link.imageUrl} width={24} height={24} alt="image" />
								<p className="text-lg font-semibold max-lg:hidden">{link.label}</p>
							</Link>
						)
					})
				}
			</div>
		</section >
	)
}

export default Sidebar