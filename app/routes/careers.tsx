import {MetaFunction} from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        {
            title: "Careers",
        },
    ];
};

export default function Careers() {
    return (
        <>
            <h1>Careers</h1>
        </>
    );
}
