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
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Notifications} from "@mantine/notifications";

export function Layout({children}: {children: React.ReactNode}) {
  useEffect(() => {
    AOS.init();
  }, []);

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
          <Notifications />
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
