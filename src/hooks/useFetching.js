import { useState } from "react";

export const useFetching = (callback) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");


	const fetching = async (...arg) => {
		try {
			setIsLoading(true);
          await new Promise((res) => setTimeout(res , 200) )
          await callback(...arg)
		} catch (e) {
			setError(e.message);
		} finally {
			setIsLoading(false);
		}
	};

    return [fetching, isLoading, error]
};
