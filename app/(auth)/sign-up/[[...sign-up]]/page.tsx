import { SignUp } from '@clerk/nextjs'

const signUpPage = () => {
	return (
		<main className='flex h-screen w-full justify-center items-center'>
			<SignUp />
		</main>
	)
}

export default signUpPage