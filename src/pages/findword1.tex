import Layout from "../components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { WordleQuery } from "../interfaces/index";

const main = () => {
	const [data, setData] = useState({
		contain: "",
		filter: "",
		perfect: "",
	} as WordleQuery);
	const [word, setWord] = useState<String[]>();
	const [perfectPos, setPerfectPos] = useState({
		perfect1: "",
		perfect2: "",
		perfect3: "",
		perfect4: "",
		perfect5: "",
	});

	const getData = async () => {
		const word = await axios.get(
			`./api/wordle?filter=${data.filter}&contain=${data.contain}&perfect=${data.perfect}`
		);
		setWord(word.data);
	};

	const checkLatter = (latter: string) => {
		if (latter.length > 1 || latter === " ") {
			return false;
		}
		return true;
	};

	const changeLatter = () => {
		let perfect = ["0", "0", "0", "0", "0"];

		if (perfectPos.perfect1 !== "") {
			perfect[0] = perfectPos.perfect1;
		}
		if (perfectPos.perfect2 !== "") {
			perfect[1] = perfectPos.perfect2;
		}
		if (perfectPos.perfect3 !== "") {
			perfect[2] = perfectPos.perfect3;
		}
		if (perfectPos.perfect4 !== "") {
			perfect[3] = perfectPos.perfect4;
		}
		if (perfectPos.perfect5 !== "") {
			perfect[4] = perfectPos.perfect5;
		}

		setData({ ...data, perfect: perfect.join("").replaceAll(",", "") });
	};

	const isBan = (value) => {
		return !/^-?[\d\s\W]+$/.test(value);
	};

	useEffect(() => {
		getData();
	}, [data]);
	useEffect(() => {
		changeLatter();
	}, [perfectPos]);

	if (!word) return <div>no data</div>;


	return (
		<Layout title="main" description="home page of something">
			<div>
				<label htmlFor="el">exist letter</label>
				<input
					value={data.contain}
					id="el"
					onChange={(word) => {
						if (isBan(word.target.value)) {
							setData({ ...data, contain: word.target.value });
						}
					}}
				/>
				<label htmlFor="nel">non exist letter</label>
				<input
					value={data.filter}
					id="nel"
					onChange={(word) => {
						if (isBan(word.target.value)) {
							setData({ ...data, filter: word.target.value });
						}
					}}
				/>
			</div>
			<div>
				<input
					value={perfectPos.perfect1}
					id="perfect1"
					onChange={(word) => {
						if (checkLatter(word.target.value) && isBan(word.target.value)) {
							setPerfectPos({ ...perfectPos, perfect1: word.target.value });
							changeLatter();
						}
					}}
				/>
				<input
					value={perfectPos.perfect2}
					id="perfect2"
					onChange={(word) => {
						if (checkLatter(word.target.value) && isBan(word.target.value)) {
							setPerfectPos({ ...perfectPos, perfect2: word.target.value });
							changeLatter();
						}
					}}
				/>
				<input
					value={perfectPos.perfect3}
					id="perfect3"
					onChange={(word) => {
						if (checkLatter(word.target.value) && isBan(word.target.value)) {
							setPerfectPos({ ...perfectPos, perfect3: word.target.value });
							changeLatter();
						}
					}}
				/>
				<input
					value={perfectPos.perfect4}
					id="perfect4"
					onChange={(word) => {
						if (checkLatter(word.target.value) && isBan(word.target.value)) {
							setPerfectPos({ ...perfectPos, perfect4: word.target.value });
							changeLatter();
						}
					}}
				/>
				<input
					value={perfectPos.perfect5}
					id="perfect5"
					onChange={(word) => {
						if (checkLatter(word.target.value) && isBan(word.target.value)) {
							setPerfectPos({ ...perfectPos, perfect5: word.target.value });
							changeLatter();
						}
					}}
				/>
			</div>
			<div>
				{word.slice(0,1000).map((words, index) => {
					return <button key={index}>{words}</button>;
				})}
			</div>
		</Layout>
	);
};

export default main;
