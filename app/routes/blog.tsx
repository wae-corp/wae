import {MetaFunction} from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        {
            title: "Blog",
        },
    ];
};

export default function Blog() {
    return (
        <>
            <h1>Blog</h1>
        </>
    );
}
