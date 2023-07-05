import Link from 'next/link';
import Image from 'next/image';
import { CustomButton } from './';

function Navbar() {
	return (
		<header className="w-full absolute z-10">
			<nav className="max-w-[90rem] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
				<Link href="/" className="flex justify-center items-center">
					<Image
						src="/logo.svg"
						alt="Car Hub Logo"
						width={118}
						height={18}
						className="object-contain"
					/>
				</Link>
				<CustomButton
					title="Sign In"
					buttonType="button"
					containerStyles="text-primary-blue bg-white rounded-full min-w-[8rem] transition-all hover:brightness-110 hover:shadow-lg"
				/>
			</nav>
		</header>
	);
}

export default Navbar;
