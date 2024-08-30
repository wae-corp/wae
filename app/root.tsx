import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import {Footer, Header} from "~/components";
import {MantineProvider} from "@mantine/core";
import "./tailwind.css";

export function Layout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <MantineProvider>
                    <Header />
                    {children}
                    <Footer />
                </MantineProvider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
