import type { Metadata } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"
import { robotoMono } from "@/lib/fonts"

export const metadata: Metadata = {
	metadataBase: new URL("https://ahmadwahyudi.xyz"),
	title: {
		default: "Ahmad Wahyudi – Software Engineer, Frontend.",
		template: "%s – Ahmad Wahyudi",
	},
	description:
		"Ahmad Wahyudi's minimal resume page. Built with nextjs. Ctrl+P to print.",
	openGraph: {
		type: "website",
		url: "https://ahmadwahyudi.xyz",
		title: {
			default: "Ahmad Wahyudi – Software Engineer, Frontend.",
			template: "%s – Ahmad Wahyudi",
		},
		images: "/192x192.png",
		description:
			"Ahmad Wahyudi's minimal resume page. Built with nextjs. Ctrl+P to print.",
		siteName: "Ahmad Wahyudi's resume",
	},
	twitter: {
		card: "summary",
		title: {
			default: "Ahmad Wahyudi – Software Engineer, Frontend.",
			template: "%s – Ahmad Wahyudi",
		},
		images: "/192x192.png",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					robotoMono.className,
					"min-h-screen max-w-2xl mx-auto flex p-4 md:p-8 text-neutral-900",
				)}
			>
				{children}
			</body>
		</html>
	)
}
