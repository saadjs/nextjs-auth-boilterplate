import { auth } from '@/auth';
import { AuthCard } from '@/components/auth-card';
import { AuthDivider } from '@/components/auth-divider';
import GithubSignIn from '@/components/github-sign-in';
import GoogleSignIn from '@/components/google-sign-in';
import SignOut from '@/components/sign-out';

export default async function Home() {
	const session = await auth();

	if (session) {
		return (
			<AuthCard title="Signed in">
				<div className="space-y-4">
					<div className="rounded-lg bg-muted p-4">
						<pre className="whitespace-pre-wrap">
							<code className="text-sm text-muted-foreground break-all">
								{JSON.stringify(session, null, 2)}
							</code>
						</pre>
					</div>
					<SignOut />
				</div>
			</AuthCard>
		);
	}

	return (
		<AuthCard>
			<div className="space-y-4">
				<GithubSignIn />
				<AuthDivider />
				<GoogleSignIn />
			</div>
		</AuthCard>
	);
}
