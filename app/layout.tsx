import { Footer, Navbar } from '@/components';
import './globals.css';

export const metadata = {
	title: 'Car Hub',
	description: 'Discover the coolest cars in your area.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
