import { tokenProvider } from '@/actions/stream.actions';
import Loader from '@/components/Loader';
import { useUser } from '@clerk/nextjs';
import {
	StreamVideo,
	StreamVideoClient,
} from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
// const userId = '1302699';
// const token = 'authentication-token';
// const user: User = { id: userId };

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
	const [videoClient, setVideoClient] = useState<StreamVideoClient>();
	const { user, isLoaded } = useUser();
	useEffect(() => {
		if (!user) return;
		if (!isLoaded) return;
		if (!apiKey) throw new Error(`API key not provided`);
		const client = new StreamVideoClient({
			apiKey,
			user: {
				id: user?.id,
				name: user?.username || user?.id,
				image: user?.imageUrl
			},
			tokenProvider: tokenProvider
		})
		setVideoClient(client);
	}, [user, isLoaded])
	if (!videoClient) return <Loader />
	return (
		<StreamVideo client={videoClient}>
			{children}
		</StreamVideo>
	);
};
export default StreamVideoProvider