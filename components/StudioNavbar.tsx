import Link from "next/link";
import { RiArrowGoBackLine } from "react-icons/ri";

const StudioNavbar = (props: any) => {
	return (
		<div>
			<div className="flex items-center justify-between p-5">
				<Link href="/" className="bg-black text-black flex items-center">
					<RiArrowGoBackLine className="h-5 w-5 text-blue-600" />
					Go to website
				</Link>
			</div>
			<>{props.renderDefault(props)}</>
		</div>
	);
};

export default StudioNavbar;
