import Image from 'next/image';
import { MagnifyingGlassCircleIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { GlobeAltIcon, Bars3Icon, UsersIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

const Header = () => {
	const [searchInput, setSearchInput] = useState('');
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [numOfGuests, setNumOfGuests] = useState(1);
	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: 'selection',
	};
	const router = useRouter();

	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	const resetInput = () => {
		setSearchInput('');
	};

	const search = () => {
		router.push({
			pathname: '/search',
			query: {
				location: searchInput,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
				numOfGuests,
			},
		});
	};

	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
			<div
				className="relative flex items-center h-10 cursor-pointer my-auto"
				onClick={() => router.push('/')}>
				<Image
					src="https://links.papareact.com/qd3"
					alt="logo"
					fill
					style={{ objectFit: 'contain', objectPosition: 'left' }}
				/>
			</div>

			<div className="flex  items-center md:border-2 rounded-full py-2 md:shadow-md">
				<input
					type="text"
					placeholder="Start your search"
					className="pl-5 transparent outline-none flex-grow text-gray-600 placeholder-gray-400 "
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<MagnifyingGlassCircleIcon className="h-10 hidden md:inline-flex text-red-500 rounded-full cursor-pointer flex-shrink-0 md:mx-2" />
			</div>

			<div className="flex gap-x-4 justify-end items-center">
				<p className="hidden md:inline cursor-pointer">Become a host</p>
				<GlobeAltIcon className="h-6" />
				<div className="flex gap-x-1 border-2 p-2 rounded-full">
					<Bars3Icon className="h-6" />
					<UserCircleIcon className="h-6" />
				</div>
			</div>
			{searchInput && (
				<div className="flex flex-col col-span-3 mx-auto mt-10">
					<DateRangePicker
						ranges={[selectionRange]}
						minDate={new Date()}
						rangeColors={['#FD5861']}
						onChange={handleSelect}
					/>
					<div className="flex items-center border-b mb-4">
						<h2 className="text-2xl pl-2 flex-grow font-semibold">Number of Guests</h2>
						<UsersIcon className="h-5" />
						<input
							type="number"
							className="w-12 pl-2 text-lg outline-none text-red-500"
							value={numOfGuests}
							onChange={(e) => setNumOfGuests(e.target.value)}
							min="1"
						/>
					</div>
					<div className="flex">
						<button className="flex-grow text-gray-500" onClick={resetInput}>
							Cancel
						</button>
						<button className="flex-grow text-red-400" onClick={search}>
							Search
						</button>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
