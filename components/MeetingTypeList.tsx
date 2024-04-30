"use client"

import { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import MeetingModel from "./MeetingModel";
import { useUser } from "@clerk/nextjs";
import { StreamVideoClient, useStreamVideoClient } from "@stream-io/video-react-sdk";

const MeetingTypeList = () => {
	const [MeetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isInstantMeeting' | 'isJoiningMeeting' | undefined>();
	const { user } = useUser();
	const client = useStreamVideoClient()
	const createMeeting = async () => {
		if (!user || !client) return;
		try {
			const id = crypto.randomUUID()
			const call = client.call('default', id)
		} catch (error) {

		}

	}
	useEffect(() => {
		console.log(MeetingState)
	}, [MeetingState])
	return (
		<section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
			<HomeCard img="/icons/add-meeting.svg" title="New Meeting" description="Start instant meeting"
				className="bg-rose-400"
				handleClick={() => setMeetingState('isInstantMeeting')}
			/>
			<HomeCard img="/icons/schedule.svg" title="Schedule Meeting" description="Plan your meetings"
				handleClick={() => setMeetingState('isScheduleMeeting')}
				className="bg-purple-400"
			/>
			<HomeCard img="/icons/recordings.svg" title="View Recordings" description="Views your recordings"
				handleClick={() => setMeetingState('isScheduleMeeting')}
				className="bg-pink-600"
			/>
			<HomeCard img="/icons/join-meeting.svg" title="Join Meeting" description="Join via invitation link"
				handleClick={() => setMeetingState('isScheduleMeeting')}
				className="bg-orange-800"
			/>
			<MeetingModel
				isOpen={MeetingState === 'isInstantMeeting'}
				onClose={() => setMeetingState(undefined)}
				title="Start instant meeting"
				buttonText="schedule meeting"
				handleClick={createMeeting}

			/>
		</section>
	)
}

export default MeetingTypeList