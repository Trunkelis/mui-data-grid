import { CSSProperties, useEffect, useState } from "react";

import { isString } from "."

interface TruncateTextProps {
    obj: any;
    length?: number;
    moreText?: string;
    lessText?: string;
}

const MoreLessStyle = {
    cursor: "pointer",
    color: "#1b4394",
} as CSSProperties;

export function TruncateText(props: TruncateTextProps) {
    const { length = 30, obj, lessText = "Less", moreText = "More" } = props;

    const [value, setValue] = useState("");
    const [truncated, setTruncated] = useState(true);

    useEffect(() => {
        isString(obj) && setValue(obj);
    }, [obj]);

    const changeTruncate = () => {
        setTruncated(x => !x);
    };

    // fallback if not a string
    if (!value) return obj as JSX.Element;
    // if we don't need to shorten
    if (length >= value.length) return obj as JSX.Element;

    return (
        <>
            {truncated ? (
                <>
                    {value.substring(0, truncated ? length : value.length)}
                    {"... "}
                    <span onClick={changeTruncate} style={MoreLessStyle}>
                        {moreText}
                    </span>
                </>
            ) : (
                <>
                    {value}{" "}
                    <span onClick={changeTruncate} style={MoreLessStyle}>
                        {lessText}
                    </span>
                </>
            )}
        </>
    );
}
