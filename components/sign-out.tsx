import { signOut } from '@/auth';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';

export default function SignOut() {
	return (
		<form
			action={async () => {
				'use server';
				await signOut();
			}}
		>
			<Button
				type="submit"
				variant="ghost"
				className="w-full flex items-center gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
			>
				<LogOut size={20} />
				<span>Sign out</span>
			</Button>
		</form>
	);
}
