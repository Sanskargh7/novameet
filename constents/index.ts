
interface sidebarLink {
	label: string,
	route: string,
	imageUrl: string
}
export const sidebarLinks: sidebarLink[] = [
	{
		label: 'Home',
		route: '/',
		imageUrl: '/icons/Home.svg'
	},
	{
		label: 'Upcoming',
		route: '/upcoming',
		imageUrl: '/icons/upcoming.svg'
	},
	{
		label: 'Previous',
		route: '/previous',
		imageUrl: '/icons/previous.svg'
	},
	{
		label: 'Recordings',
		route: '/recordings',
		imageUrl: '/icons/recordings.svg'
	},
	{
		label: 'Personal Room',
		route: '/personal-room',
		imageUrl: '/icons/add-personal.svg'
	}
]