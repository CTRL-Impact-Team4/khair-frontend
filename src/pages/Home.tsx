const Home: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
			{/* Title */}
			<h1 className="text-6xl font-extrabold text-blue-900 mb-8">
				Khair
			</h1>

			{/* Mission Statement */}
			<p className="text-xl text-center text-blue-700 mb-12 max-w-2xl">
				To empower communities by providing access to essential resources through a centralized platform that connects those in need with charitable organizations, ensuring timely support.
			</p>

			{/* Containers */}
			<div className="flex space-x-8">
				{/* User Container */}
				<div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
					<h2 className="text-2xl font-semibold text-blue-800 mb-4">For Users</h2>
					<p className="text-blue-600">Click here if you are looking for resources or support.</p>
				</div>

				{/* Charitable Organizations Container */}
				<div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
					<h2 className="text-2xl font-semibold text-blue-800 mb-4">For Charitable Organizations</h2>
					<p className="text-blue-600">Click here to access the dashboard or create a new account.</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
