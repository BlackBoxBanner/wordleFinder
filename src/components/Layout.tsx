import React, { ReactNode, Fragment } from "react";
import Head from "next/head";

type Props = {
	children: ReactNode;
	title?: string;
	description?: string;
};

const Layout = ({
	children,
	title = "This is the default title",
	description = "This is the description of this website.",
}: Props) => {
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={description} />
			</Head>
			{children}
		</Fragment>
	);
};

export default Layout;
