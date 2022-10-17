import { NextApiRequest, NextApiResponse } from "next";
import wordleWord from "../../../data/wordle-word";
import { WordleQuery } from "../../../interfaces";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
	//NOTE - API GET method perform fumction
	const apiGET = () => {
		res.status(200).json(filerQuery(_req.query));
	};

	//NOTE - Get the query from API query and filter word that include letter in query and filter word that has perfect match placement
	const filerQuery = (query: WordleQuery) => {
		let result = wordleWord;

		//NOTE - filer word that include letter
		if (query.contain) {
			let buffer: string[];
			const contain = query.contain.split("");
			for (const letterPos in contain) {
				result = result.filter((word) => word.includes(contain[letterPos]));
			}

			// result = buffer;
		}

		//NOTE - filer out word that include letter
		if (query.filter) {
			// let buffer: string[];
			const filter = query.filter.split("");
			for (const letterPos in filter) {
				result = result.filter((word) => !word.includes(filter[letterPos]));
			}
			// result = buffer;
		}

		//NOTE - filter word that has match placement
		if (query.perfect) {
			const perfect = query.perfect.split("");
			let buffer = result

			for (const letterPos in perfect) {
				if (perfect[letterPos] !== "0") {
					buffer = buffer.filter(
						(word) => word[letterPos] === perfect[letterPos] 
						);
				}
			}
			result = buffer;
		}

		// //NOTE - remove dupe value
		// let uniqueChars = [];
		// result.forEach((element) => {
		// 	if (!uniqueChars.includes(element)) {
		// 		uniqueChars.push(element);
		// 	}
		// });
		// result = uniqueChars;
		return result;
	};

	try {
		switch (_req.method) {
			case "GET":
				apiGET();
				break;
		}
	} catch (err: any) {
		res.status(500).json({ statusCode: 500, message: err.message });
	}
};

export default handler;
