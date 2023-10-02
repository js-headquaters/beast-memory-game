import { Storage } from './telegram-api';

export async function getLatestResultForLevel(level: number): Promise<Array<string>> {
    const results = await getResultsStorage();
    return results[level] || [];
}

export async function setLastResultForLevel(level: number, result: string): Promise<void> {
    const currentResults = await getLatestResultForLevel(level);

    currentResults.unshift(result);

    const resultsStorage = await getResultsStorage();
    resultsStorage[level] = currentResults.slice(0, 3);
    await Storage.setItem('results', JSON.stringify(resultsStorage))
}

async function getResultsStorage(): Promise<{[level: number]: Array<string>}> {
    const resultsAsString = await Storage.getItem('results') || '{}';
    return JSON.parse(resultsAsString);
}
