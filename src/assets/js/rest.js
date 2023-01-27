export async function makePostRequest(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`some error with response, status ${response.status}`);
    }

    return await response.json();
}
