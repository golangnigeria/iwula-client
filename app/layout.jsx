import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import { AuthProvider } from "@/lib/context/AuthProvider";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

 

export const metadata = {
    title: "KiniCart. - Farm smarter",
    description: "KiniCart. - Farm smarter",
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
