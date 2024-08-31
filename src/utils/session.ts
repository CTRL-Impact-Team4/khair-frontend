import { v7 as uuidv7 } from "uuid";

export const getSession = () => {
	let sessionData: string | null = localStorage.getItem("session");
	if (!sessionData) {
		sessionData = uuidv7();
		localStorage.setItem("session", sessionData);
	}
	return sessionData;
};
