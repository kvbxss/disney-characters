export async function getDisneyCharacters() {
    try {
        const response = await fetch(
            "https://api.disneyapi.dev/character?films&pageSize=100",
        );
        if (response.ok) {
            const result = await response.json();
            const characters = result.data || [];
            console.log(characters);
            return characters;
        }
        
    } catch (err) {
        console.log(err);
    }
    
    return [];
}