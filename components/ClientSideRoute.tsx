"use client";
import Link from "next/link";

const ClientSideRoute = ({
	children,
	route,
}: // query,
{
	children: React.ReactNode;
	route: string;
	// query: string;
}) => {
	return (
		<div>
			<Link href={{ pathname: route }}>{children}</Link>
		</div>
	);
};

export default ClientSideRoute;
