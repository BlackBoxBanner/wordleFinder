import Link from "next/link";
import React, { Fragment } from "react";

const index = () => {
	return (
		<Fragment>
			<section>
				<div>
					<Link href="./wordle">wordle finder document.</Link>
					<Link href="./word">word bank document.</Link>
				</div>
			</section>
		</Fragment>
	);
};

export default index;
