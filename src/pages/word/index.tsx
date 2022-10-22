import Link from "next/link";
import { Fragment } from "react";

const index = () => {
	return (
		<Fragment>
			<header>
				<h1>API word bank</h1>
        <div>
					word bank api is link in{" "}
					<Link href="./api/word?length=5">/api/word</Link>
				</div>
			</header>
			<main>
				
				<section>
					all the word in this api is from{" "}
					<Link href="https://github.com/lorenbrichter/Words/blob/master/Words/en.txt">
						Words-GitHub
					</Link>
				</section>
				<section>
					There are <b>options</b> to api:
					<ul>
						<li>
							<div>
								<b>length</b>
							</div>
							<div>
								<code>$length=</code> are use to filter only number of charecter
								in the word
							</div>
						</li>
					</ul>
				</section>
			</main>
		</Fragment>
	);
};

export default index;
