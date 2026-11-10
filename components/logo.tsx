import React from "react";

type LogoProps = {
    hollow?: boolean;
    color?: string;
    size?: number;
};

export default function Logo({
    hollow = true,
    color = "#C778DD",
    size = 53,
}: LogoProps) {
    const id = React.useId().replace(/:/g, "");

    const paths = [
        "M13 14H0V27V40V53H13H26V40H13V27H26V14H13Z",
        "M39 1H26V14H39V27H26V40H39H52V27V14V1H39Z",
    ];

    if (!hollow) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {paths.map((path, i) => (
                    <path key={i} d={path} fill={color} />
                ))}
            </svg>
        );
    }

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 53 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask id={`${id}-mask0`} fill="white">
                <path
                    d="M0 14H13H26V27H13V40H26V53H13H0V40V27V14Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </mask>

            <path
                d={paths[0]}
                stroke={color}
                strokeWidth="2"
                mask={`url(#${id}-mask0)`}
            />

            <mask
                id={`${id}-mask1`}
                maskUnits="userSpaceOnUse"
                x="25"
                y="0"
                width="28"
                height="41"
                fill="black"
            >
                <rect fill="white" x="25" width="28" height="41" />
                <path
                    d="M26 1H39H52V14V27V40H39H26V27H39V14H26V1Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </mask>

            <path
                d={paths[1]}
                stroke={color}
                strokeWidth="2"
                mask={`url(#${id}-mask1)`}
            />
        </svg>
    );
}