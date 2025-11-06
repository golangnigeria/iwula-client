import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import { AuthProvider } from "@/lib/context/AuthProvider";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

 

export const metadata = {
    title: "Dr Iwula. - Your health companion",
    description: "Dr. Iwula. - Live a healthier life with personalized health tracking, expert advice, and wellness resources at your fingertips.",
};

export default function RootLayout({ children }) {
    return (
            <html lang="en">
                <body className={`${outfit.className} antialiased`}>
                    <AuthProvider>
                        <StoreProvider>
                            <Toaster position="top-right"/>
                            {children}
                        </StoreProvider>
                    </AuthProvider>
            </body>
        </html>
    );
}
