import { useEffect } from "react";

const useKey = () => {
	let key;

	useEffect(() => {
		const keyDownHandler = (event) => {
			key = event.key;
			if (event.key === "Enter") {
				event.preventDefault();
			}
		};

		document.addEventListener("keydown", keyDownHandler);
		return () => document.removeEventListener("keydown", keyDownHandler);
	}, []);

	return key;
};

export default useKey;
