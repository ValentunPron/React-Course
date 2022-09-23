import React from "react";
import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h2'>Text</Htag>
			<Button appearance="primary" arrow="right">Button</Button>
			<Button appearance="ghost" arrow="right">Button</Button>
		</>
	);
}

