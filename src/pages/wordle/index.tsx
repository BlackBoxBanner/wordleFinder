import Link from "next/link";
import { Fragment } from "react";

const index = () => {
	return (
		<Fragment>
			<header>
				<h1>API wordle finder</h1>
			</header>
			<main>
				<section>
					wordle finder api is link in{" "}
					<Link href="./api/wordle">/api/wordle</Link>
				</section>
				<section>
					There are <b>options</b> to api:
					<ul>
						<li>
							<div>
								<b>filter</b>
							</div>
							<div>
								<code>$filter=</code> are use to filter out latters that is not
								in the word
							</div>
						</li>
						<li>
							<div>
								<b>contain</b>
							</div>
							<div>
								<code>$contain=</code> are use to collect all latters the are in
								the word but in wromg placement.
							</div>
						</li>
						<li>
							<div>
								<b>perfect</b>
							</div>
							<div>
								<code>$perfect=</code> are use to collect all latters that are
								in correct position with the word. The input format is{" "}
								<code>$perfect=000</code> where 0 is replace with space.
							</div>
							<div>
								<code>$perfect=000er</code> in this example, all the word will
								end with -er.
							</div>
						</li>
					</ul>
				</section>
			</main>
		</Fragment>
	);
};

export default index;
