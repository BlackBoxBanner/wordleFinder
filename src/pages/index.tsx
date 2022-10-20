import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";

const index = () => {
	const [key, setKey] = useState<string>();

	useEffect(() => {
		const keyDownHandler = (event) => {
			setKey(event.key);
			if (event.key === "Enter") {
				event.preventDefault();
			}
		};

		document.addEventListener("keydown", keyDownHandler);
		return () => document.removeEventListener("keydown", keyDownHandler);
	}, []);
	useEffect(() => {
	}, [key]);
	return (
		<Fragment>
			<section>
				<div>
					You have press {!key?"nothing ":key}
				</div>
				<div>
					<Link href="./wordle">wordle finder document.</Link>
				</div>
			</section>
		</Fragment>
	);
};

export default index;
