import {MetaFunction} from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        {
            title: "Company",
        },
    ];
};

export default function Company() {
    return (
        <>
            <h1>Company</h1>
        </>
    );
}
