import { signIn } from '@/auth';
import { Button } from './ui/button';
import { Github } from 'lucide-react';

export default function GithubSignIn() {
	return (
		<form
			action={async () => {
				'use server';
				await signIn('github');
			}}
		>
			<Button
				type="submit"
				variant="outline"
				className="w-full flex items-center gap-2"
			>
				<Github size={20} />
				<span>Sign in with GitHub</span>
			</Button>
		</form>
	);
}
