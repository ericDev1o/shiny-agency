import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/index";

export function useFetch(url) {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (!url) return;
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();

                setData(data);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        setLoading(true);
        fetchData();
    }, [url]);

    return { isLoading, data, error };
}

export function useTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return { theme, toggleTheme };
}
