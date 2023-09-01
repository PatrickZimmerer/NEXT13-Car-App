'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ShowMoreProps } from '@/types';
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';

function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
	const router = useRouter();
	const newLimit = (pageNumber + 1) * 10;
	const handleNavigation = () => {
		const newPathName = updateSearchParams('limit', `${newLimit}`);
		router.push(newPathName);
	};

	return (
		<div className="w-full flex-center gap-5 mt-10">
			{!isNext && (
				<CustomButton
					title="Show More"
					buttonType="button"
					containerStyles="bg-primary-blue rounded-full text-white"
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
}

export default ShowMore;
