const Header = ({ title }) => {
	return (
		<header className='backdrop-blur-lg border-white  shadow-lg shadow-teal-600/70 border-b  '>
			<div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
				<h1 className='text-2xl font-bold text-gray-200'>{title}</h1>
			</div>
		</header>
	);
};
export default Header;