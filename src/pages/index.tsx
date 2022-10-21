import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";

const index = () => {
	return (
		<Fragment>
			<section>
				<div>
					<Link href="./wordle">wordle finder document.</Link>
				</div>
			</section>
		</Fragment>
	);
};

export default index;
