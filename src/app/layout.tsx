import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export const metadata: Metadata = {
	title: 'Raj Rajbhar - Software Developer',
	description: 'Raj Rajbhar - Full Stack Developer specializing in MERN stack, React.js, Node.js, and modern web technologies. Expert in database development and web applications.',
	keywords: 'Raj Rajbhar, RajRajbhar, Software Developer, Full Stack Developer, MERN Stack, Web Developer, React Developer, Next.js Expert, Database Developer, Frontend Specialist, Backend Developer, JavaScript Expert, TypeScript Developer, Node.js Developer, MongoDB Expert, SQL Developer',
	authors: [{ name: 'Raj Rajbhar' }],
	creator: 'Raj Rajbhar',
	manifest: '/manifest.json',
	themeColor: '#000000',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://rajrajbhar.vercel.app/',
		title: 'Raj Rajbhar - Full Stack Developer',
		description: 'Full-stack developer specializing in MERN stack, React.js, Node.js, and modern web technologies.',
		siteName: 'Raj Rajbhar Portfolio',
	},
};
export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
  };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/favicon.svg" />
				<meta name="theme-color" content="#000000" />
				<link rel="manifest" href="/manifest.json" />
				<meta httpEquiv="Content-Security-Policy" content="default-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https: http:; font-src 'self' data: https:; connect-src 'self' data: blob: https:; worker-src 'self' blob: data:;" />
			</head>
			<body>
				<CustomCursor />
				<div className="min-h-screen flex flex-col">
					<Background3D />
					<Navbar />
					<main className="flex-grow">{children}</main>
					<SpeedInsights />
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	);
}