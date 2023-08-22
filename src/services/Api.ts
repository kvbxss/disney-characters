export async function getDisneyCharacters() {
    try {
        const response = await fetch(
            "https://api.disneyapi.dev/characters",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.ok) {
            const result = await response.json();
            return result;
            console.log(result);
        }
        
    } catch (err) {
        console.log(err);
    }
    
    return [];
}