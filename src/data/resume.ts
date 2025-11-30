export const RESUME_DATA = {
	name: "Ahmad Wahyudi",
	description:
		"Software Engineer with 3 years of experience delivering reliable technology solutions in various fields such as entertainment, government, and corporate environments. Experienced in collaborating with cross-functional teams to define and implement innovative solutions.",
	title: "Software Engineer.",
	location: "Sumenep, Indonesia",
	email: "ahmadwahyudi2395@gmail.com",
	website: { url: "https://ahmadwahyudi.xyz", name: "ahmadwahyudi.xyz" },
	social: [
		{
			name: "LinkedIn",
			link: "https://www.linkedin.com/in/ahmadwahyudi",
		},
		{
			name: "Github",
			link: "https://github.com/vvahyudi",
		},
	],
	skills: [
		"Javascript",
		"Typescript",
		"React.js",
		"Next.js",
		"Express.js",
		"Node.js",
	],
	experiences: [
		{
			title: "Software Engineer",
			type: "Fulltime",
			company: "DRT Management",
			link: "https://drtmanagement.com/",
			date: "Jun 2024 – Oct 2025",
			descriptions: [
				"Developed and maintained web applications using Next.js and Node.js, enhancing talent experience and functionality.",
				"Assisted in system deployments, debugging, and IT operations support.",
				"Documented deployment/configuration processes to support service continuity.",
			],
		},
	],
	education: [
		{
			title: "Bachelor degree in Computer Science",
			university: "Trunojoyo Madura University",
			date: "2016 – 2022 (Uncompleted)",
		},
		{
			title: "Software Engineering",
			university: "SMK Negeri 1 Sumenep",
			date: "2012 – 2015",
		},
	],
	projects: [
		{
			name: "Yayasan Raden Rahmat",
			link: "https://yasrama.com/",
			description:
				"A website for Yayasan Raden Rahmat, an educational foundation in Sumenep, Madura.",
			tags: ["React", "Next.js", "Typescript"],
			year: "2024",
		},
		{
			name: "ahmadwahyudi.xyz",
			link: "https://ahmadwahyudi.xyz",
			description: "My personal and portfolio website.",
			tags: ["React", "Next.js", "Typescript"],
			year: "2023",
		},
		{
			name: "DRT Management",
			link: "https://drtmanagement.com/",
			description: "Company Profile of DRT Management.",
			tags: ["React", "Next.js", "Typescript", "Node.js"],
			year: "2023",
		},
		{
			name: "DRT Top Up",
			link: "",
			description: "A web application for DRT Management's top-up services .",
			year: "2025",
			tags: ["React", "Javascript"],
		},
	],
} as const
