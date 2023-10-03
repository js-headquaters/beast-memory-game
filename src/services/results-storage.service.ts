import { Storage } from './telegram-api';
import {GameStatisticWithLevel} from "@interfaces/index";

export async function persistGameStatisticsByLevel(gameStatisticWithLevel: GameStatisticWithLevel): Promise<void> {
    const isStored = await Storage.setItem('results', JSON.stringify(gameStatisticWithLevel))
    console.log('>> persistGameStatisticsByLevel', JSON.stringify(gameStatisticWithLevel));
}

export async function getResultsStorage(): Promise<GameStatisticWithLevel> {
    const resultsAsString = await Storage.getItem('results') || '{}';
    console.log('>> getResultsStorage: resultsAsString', resultsAsString);
    return JSON.parse(resultsAsString);
}
