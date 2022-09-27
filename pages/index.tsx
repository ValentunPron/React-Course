import React, { useState } from "react";
import { Button, Htag, P, Rating, Tag } from '../components';
import { Layout } from "../layout/Layout";

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<Layout>
			<Htag tag='h2'>Testing Program</Htag>
			<Button appearance="primary" arrow="right">Button</Button>
			<Button appearance="ghost" arrow="right">Button</Button>
			<P size="small">Hello World</P>
			<P>Hello World</P>
			<P size="medium">Hello World</P>
			<P size="big">Hello World</P>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag color='primary'>Primary</Tag>
			<Rating rating={rating} isEditable={true} setRating={setRating} />
		</Layout>
	);
}

