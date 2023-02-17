import { useState } from "react";

export const useFetching = (callback) => {
    const [error, setError] = useState(null);

    const fetching = async () => {
        try {
            await callback();
        }catch(e){
            setError(e)
        }
    }

    return [fetching, error];
}