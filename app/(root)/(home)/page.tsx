import MeetingTypeList from "@/components/MeetingTypeList";

const HomePage = () => {
	const now = new Date();
	const date = (new Intl.DateTimeFormat('en-US', {
		dateStyle: 'full'
	})).format(now);
	const time = now.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit"
	})
	return (

		<section className="flex size-full flex-col gap-10 text-white">
			<div className="h-[200px] w-full rounded-lg bg-slate-800">
				<h1 className="m-10">Upcomming meeting 01:00AM</h1>

				<div className="flex flex-col m-10 mt-10">
					<h1 className="">{time}</h1>
					<p className="  ">{date}</p>
				</div>
			</div>
			<MeetingTypeList />
		</section>

	)
}

export default HomePage