import { Separator } from './ui/separator';

export function AuthDivider({ text = 'OR' }: { text?: string }) {
	return (
		<div className="relative">
			<div className="absolute inset-0 flex items-center">
				<Separator />
			</div>
			<div className="relative flex justify-center">
				<span className="bg-background px-2 text-xs text-muted-foreground">
					{text}
				</span>
			</div>
		</div>
	);
}
