import { useMemo } from "react";
import backgroundImage from "static/img/backgroundImage.jpeg"

interface IHeaderContent {
    title: string;
    body: string;
    backgroundImage: string;
}

export const useHeaderContents = (): IHeaderContent => {
    return useMemo(() => {
        return {
            title: "Max Miller",
            body: "This is a test site.",
            backgroundImage: backgroundImage
        }}, 
    [])
}