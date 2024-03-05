import Image from "next/image";
import logoIcon from "../assets/img/dev-icon.png";
import Link from "next/link";

function Logo(props: any) {
	const { renderDefault, title } = props;
	return (
		<div>
			<Link href="/">
				<Image
					className="rounded-full object-cover"
					src={logoIcon}
					alt="logo-icon"
					height={40}
					width={40}
				/>
			</Link>
		</div>
	);
}

export default Logo;
