import Image from 'next/image';
interface HomeCardProps {
	title: string;
	img: string;
	className: string;
	handleClick: () => void;
	description: string
}

const HomeCard = ({ className, title, img, handleClick, description }: HomeCardProps) => {
	return (
		<div className={`${className} py-5 px-5 flex flex-col justify-between w-full min-h-[250px] cursor-pointer rounded-md xl:min-w-[260px]`} onClick={handleClick}>

			<div className="flex justify-center items-center glassmorphism size-12">
				<Image src={img} alt="add meeting" width={26} height={27} />
			</div>
			<div className="flex flex-col gap-2">
				<h1 className="text-2xl font-bold">{title}</h1>
				<p className="text-lg font-normal">{description}</p>

			</div>
		</div>
	)
}

export default HomeCard