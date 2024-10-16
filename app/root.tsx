import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
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
import {isRouteErrorResponse, useRouteError, Link} from "@remix-run/react";

export function Layout({children}: {children: React.ReactNode}) {
  useEffect(() => {
    AOS.init();
  }, []);

  const error = useRouteError();

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
      <body className="overflow-x-hidden">
        <MantineProvider defaultColorScheme="light">
          <Notifications
            position="top-right"
            zIndex={2077}
          />
          <Header />
          {error ? (
            <div className="flex min-h-screen flex-col items-center justify-center px-4">
              <div className="w-full max-w-4xl rounded-lg bg-white p-8">
                <h1 className="wae-h2 mb-4 text-center">
                  Oops! Something went wrong.
                </h1>
                <p className="text-center text-gray-700">
                  {isRouteErrorResponse(error)
                    ? "We couldn't find the page you're looking for."
                    : "Please try again later."}
                </p>
                <p className="mt-4 text-center text-gray-700">
                  <Link
                    to="/"
                    className="duration-100 hover:underline"
                  >
                    Go to Home
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            <main>{children}</main>
          )}
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

// export function ErrorBoundary() {
//   const error = useRouteError();
//   return (
//     <html lang="en">
//       <head>
//         <Meta />
//         <Links />
//         <meta charSet="utf-8" />
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1"
//         />
//         <title>Oops! Something went wrong</title>
//       </head>
//       <body className="bg-gray-100">
//         <div className="flex min-h-screen flex-col items-center justify-center px-4">
//           <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-md">
//             <h1 className="mb-4 text-center text-3xl font-semibold text-red-600">
//               Oops! Something went wrong.
//             </h1>
//             <p className="text-center text-gray-700">
//               {isRouteErrorResponse(error)
//                 ? "We couldn't find the page you're looking for."
//                 : "An unexpected error occurred. Please try again later."}
//             </p>
//             <div className="mt-6 flex justify-center">
//               <Link
//                 to="/"
//                 className="rounded bg-blue-600 px-6 py-2 text-white transition duration-150 hover:bg-blue-700"
//               >
//                 Go back to Home
//               </Link>
//             </div>
//           </div>
//         </div>
//         <ScrollRestoration />
//         <Scripts />
//       </body>
//     </html>
//   );
// }
