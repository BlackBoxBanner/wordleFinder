import { NextApiRequest, NextApiResponse } from "next";
import englishWord from "../../../data/english-word.json";

interface ApiQuery {
	length?: number;
}

const english_word = (_req: NextApiRequest, res: NextApiResponse) => {
	//NOTE - API GET method perform fumction
	const apiGET = () => {
		res.status(200).json(filerQuery(_req.query));
	};

	//NOTE - Get the query from API query and filter word that include letter in query and filter word that has perfect match placement
	const filerQuery = (query: ApiQuery) => {
		let result = englishWord;

		if (query.length) {
			result = result.filter((word) => {
				return word.length == query.length;
			});
		}
		return result;
	};

	try {
		switch (_req.method) {
			case "GET":
				if (_req.query.length) {
					apiGET();
				} else {
					res.status(500).json({ query: "provide length query" });
				}
				break;
		}
	} catch (err: any) {
		res.status(500).json({ statusCode: 500, message: err.message });
	}
};

export default english_word;
