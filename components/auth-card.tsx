import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface AuthCardProps {
	children: React.ReactNode;
	title?: string;
	description?: string;
}

export function AuthCard({ children, title = 'Welcome' }: AuthCardProps) {
	return (
		<div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
			<Card className="w-full max-w-md animate-in">
				<CardHeader>
					<CardTitle>{title}</CardTitle>
				</CardHeader>
				<CardContent>{children}</CardContent>
			</Card>
		</div>
	);
}
