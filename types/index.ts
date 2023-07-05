import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
	title: string;
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	buttonType?: 'button' | 'submit';
}
export interface CustomFilterProps {
	title: string;
}
export interface SearchManufacturerProps {
	manufacturer: string;
	setManufacturer: (manufacturer: string) => void;
}
