import { useState, useEffect } from "react";
//check if the current screen is above/below the size sent by passing a query

const useMediaQuery = (query) => {
    const [ matches, setMatches ] = useState(false);

    useEffect(()=>{
        const media = window.matchMedia(query);
        if ( media.matches !== matches ) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
};

export default useMediaQuery;