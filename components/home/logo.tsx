import Link from "next/link";

const Logo = () => {

	return (
		<Link href="/">
			<div className="logo max-w-[160px] px-6 py-2 font-orbitron text-[#7FB5FF] text-xs uppercase border-2 border-dashed" style={{ borderColor: 'rgba(127, 181, 255, 0.2)' }}>
				Ghost Prisms
			</div>
		</Link>
	)
}
export default Logo;
