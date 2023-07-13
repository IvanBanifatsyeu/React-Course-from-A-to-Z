import React from "react";

function MySelect({ options, defaultValue, value, onChangeHandler }) {
	return (
		<select value={value} onChange={(e) => onChangeHandler(e.target.value)}>
			<option disabled >
				{defaultValue}
			</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
}

export default MySelect;
