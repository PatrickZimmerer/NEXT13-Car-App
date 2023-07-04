'use client';

import { SearchManufacturer } from './';

function SearchBar() {
	function handleSearch() {}
	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufacturer />
			</div>
		</form>
	);
}

export default SearchBar;
