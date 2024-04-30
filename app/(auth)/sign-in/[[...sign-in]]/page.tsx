import { SignIn } from "@clerk/nextjs"

const signInPage = () => {
	return (
		<main className="flex h-screen w-full justify-center items-center">
			<SignIn />
		</main>
	)
}

export default signInPage