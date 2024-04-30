import StreamVideoProvider from "@/providers/StreamClientProvider"
import { ReactNode } from "react"


const RootPage = ({ children }: { children: ReactNode }) => {
	return (
		<main>
			<StreamVideoProvider>

				{children}
			</StreamVideoProvider>
		</main>
	)
}

export default RootPage