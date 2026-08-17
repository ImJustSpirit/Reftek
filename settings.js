// HELLO! This is the file you are supposed to edit to play with the refsheet.

// TITLES
// If you don't want the headers to appear, just leave each one as "". The fourth header controls the toggle switch's title
const headers = [
	"Works",
	"Outfits",
	"Data",
	"Version"
]

// CHARACTERS
// Add as many characters as you want, separated by curly brackets. All characters must have at least the following parameters: title, angles
const characters = [
	// TITLE
	// To use a text title, put "t" as the first value and your desired title as the second.
	// To use an image title, put "i" as the first value and the path to the image as the second.
	// If you don't want to use a title, put the first value as "n".
	// const title = ["i", "images/logo.svg"]

	// ANGLES
	// Display name first, file path second.

	// ANGLE TOGGLES
	// If there is only one element here it won't appear. To add the corresponding variants, upload images with "_[name of the toggle]" appended to their filename.

	// OUTFITS
	// Display name first, file path second.

	// INFORMATION
	// Type of info first, description second.
	// For headings, Put the heading text as the first value and then put "h" as the second.
	// For unordered lists, Put the heading text as the first value and then put "l" as the second. Then for a third value, make an array that contains each list item as a separate string.
	// For notes without labels, put your note as the first value and then put "n" as the second.

	// COLORS 
	// HEX code first, use case second, and optionally, the outfit third.
	// For headings, Put the heading text as the first value and then put "h" as the second.
	{
		title: ["t", "Spirit"],
		angles: [
			["Forest Walking (BlueSunfish)", "images/bfForestChar.png"],
			["Relaxing in the Tavern (BlueSunfish)", "images/bfTavernChar.png"]
		],
		angleToggles: [
			"Character",
			"Full",
			"Final",
			"Sketch",
		],
		outfits: [
		],
		info: [
			["Character Details", "h"],
			["Name", "Spirit"],
			["Age", "20"],
			["Birthday", "02/02"],
			["Height", "184cm"],
			["Gender", "Male (he/him)"],
			["Artists", "h"],
			["BlueSunfish", "https://bluesunfish.carrd.co"]
		],
		colors: [
		],
	},
	{
		title: ["t", "Zeuzera"],
		angles: [
			["Zeuzera Falling (BlueSunfish)", "images/bfZeuzeraFallA.png"],
			["Zeuzera Falling Unused (BlueSunfish)", "images/bfZeuzeraFallB.png"]
		],
		angleToggles: [
			"Full",
			"Sketch"
		],
		outfits: [
			["Part 1 - Full Outfit (BlueSunfish)", "images/bfZeuzeraConceptP1FullOutfit.png"],
			["Part 1 - No Scarf (BlueSunfish)", "images/bfZeuzeraConceptP1NoScarf.png"],
			["Part 1 - No Cloak (BlueSunfish)", "images/bfZeuzeraConceptP1NoCloak.png"],
			["Part 1 - Cloak Design (BlueSunfish)", "images/bfZeuzeraCloakDesign.png"]
		],
		info: [
			["Character Details", "h"],
			["Name", "Zeuzera"],
			["Age", "19"],
			["Birthday", "??/??"],
			["Race", "Mottlefolk"],
			["Height", "50cm"],
			["Gender", "Male (he/him)"],
			["Artists", "h"],
			["BlueSunfish", "https://bluesunfish.carrd.co"]
		],
		colors: [
			["", "<===== Body =====>"],
			["FFF1E9", "Skin"],
			["8CBCFF", "Eyes"],
			["5B4544", "Hair"],
			["D2CACA", "Hair Whites"],
			["", "<===== Clothes =====>"],
			["555F7A", "Scarf"],
			["FFFFFF", "Shirt"],
			["4A3A3A", "Shorts"],
			["262939", "Leggings"],
			["4A3A3A", "Boots"],
			["D2CACA", "Boot Fur"],
			["", "<===== Cloak =====>"],
			["9D8177", "Cloak"],
			["5B4544", "Cloak Dark"],
			["D2CACA", "Cloak Light"],
			["555F7A", "Cloak Blue"],
			["383232", "Cloak Black"],
		],
	},
	{
		title: ["t", "Lyra"],
		angles: [
			["Before the Story (KazuoNT)", "images/kzLyra.png"]
		],
		angleToggles: [
			"Full",
			"Background"
		],
		outfits: [
		],
		info: [
			["Character Details", "h"],
			["Name", "Lyra Arnwood"],
			["Age", "16"],
			["Birthday", "29/08"],
			["Height", "165cm"],
			["Gender", "Female (she/her)"],
			["Artists", "h"],
			["KazuoNT", "https://vgen.co/KazuoNT"]
		],
		colors: [
			["ADEBB3", "Eyes"],
			["954535", "Hair"],
			["DCA864", "Hair Tips"],
		],
	},
	{
		title: ["t", "Shpeele"],
		angles: [
			["Shpeele Munch (AthyDrawz)", "images/atShpeele.png"],
			["Shpeele Pose (Noqueno)", "images/nqShpeele.png"]
		],
		angleToggles: [
			"Full",
			"Background"
		],
		outfits: [
		],
		info: [
			["Character Details", "h"],
			["Name", "Shpeele Bluedot"],
			["Age", "16"],
			["Birthday", "??/??"],
			["Race", "Hitsujimimi"],
			["Height", "148cm"],
			["Gender", "Female (she/her)"],
			["Artists", "h"],
			["AthyDrawz", "https://x.com/AthyDrawz"],
			["Noqueno", "https://x.com/siquesis"]
		],
		colors: [
			["", "<===== Body =====>"],
			["FEE7EB", "Skin"],
			["9ADDEE", "Eyes"],
			["F6F1E8", "Hair"],
			["B69C6B", "Hair Tips"],
			["906952", "Horns"],
			["906952", "Hooves"],
			["", "<===== Clothes =====>"],
			["CCF3BA", "Shirt"],
			["F5B95E", "Shirt Collar"],
			["48270F", "Jacket"],
			["F4F8FD", "Jacket Fur"],
			["3535F2", "Marking"],
			["D8B97D", "Shorts"],
		],
	},
]

// ANIMATIONS
// This will be replaced with preset animations later but for now you can just modify this code.
const keyframesLeft = [
	{transform: 'translateX(10px)'},
	{transform: 'translateX(0px)'}
];
const keyframesRight = [
	{transform: 'translateX(-10px)'},
	{transform: 'translateX(0px)'}
];
const options = {
	duration: 400,
	easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
	fill: 'forwards'
};

// ADVANCED
const preloadAssets = true