import React from "react";
import { Button, Htag, P } from '../components';

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h2'>Text</Htag>
			<P size="small">Hello World</P>
			<P>Hello World</P>
			<P size="medium">Hello World</P>
			<P size="big">Hello World</P>
			<Button appearance="primary" arrow="right">Button</Button>
			<Button appearance="ghost" arrow="right">Button</Button>
		</>
	);
}

