import {
	Dialog,
	DialogContent
} from "@/components/ui/dialog";
import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "./ui/button";
interface MeetingModelProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	className?: string;
	handleClick: () => void;
	buttonText: string;
	children?: ReactNode;
	image?: string;
}
const MeetingModel = ({ isOpen, onClose, className, image, title, handleClick, buttonText, children }: MeetingModelProps) => {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>

			<DialogContent className="flex flex-col w-full max-w-[500px] bg-dark-1 text-white px-6 py-9 border-none">
				<div className="flex flex-col gap-6">
					{image && (<div className="flex justify-center">

						<Image src={image} alt="model image" width={72} height={70} />
					</div>)}
					<h1>Start instant meeting</h1>
					{children}
					<Button className="bg-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0" onClick={handleClick}>
						{buttonText || 'start meeting'}
					</Button>
				</div>
			</DialogContent>
		</Dialog>

	)
}

export default MeetingModel