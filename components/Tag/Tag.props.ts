import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 's' | 'm';
	children: ReactNode;
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
}