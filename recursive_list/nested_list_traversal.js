import Test from '../test/test.mjs'
const data = [
	{
		section: "Intro",
		points: ["point1", "point2"],
		subsection: [
			{ section: "Issue1", points: ["point1", "point2"] },
			{ section: "Issue2", points: ["point1", "point2"] }
		],
	},
	{
		section: "Background",
		points: ["point1", "point2"],
		subsection: [
			{ section: "Part1", points: ["point1", "point2"] },
			{ section: "Part2", points: ["point1", "point2"] }
		],
	},
];

function Outline(list) {
	console.log(list.section);
	if (list.points) {
		list.points.forEach((point) => {
			console.log(`  ${point}`);
		});
	}
	if (list.subsection) {
		list.subsection.forEach((part) => {
			Outline(part);
		});
	}
}

Outline(...data);
