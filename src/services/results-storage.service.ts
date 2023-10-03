import { Storage } from './telegram-api';
import {GameStatisticWithLevel} from "@interfaces/index";

export async function persistGameStatisticsByLevel(gameStatisticWithLevel: GameStatisticWithLevel): Promise<void> {
    debugger;
    const isStored = await Storage.setItem('results', JSON.stringify(gameStatisticWithLevel))
    debugger;
    console.log('>> persistGameStatisticsByLevel: isStored', isStored);
}

export async function getResultsStorage(): Promise<GameStatisticWithLevel> {
    debugger;
    const resultsAsString = await Storage.getItem('results') || '{}';
    console.log('>> getResultsStorage: resultsAsString', resultsAsString);
    debugger;
    return JSON.parse(resultsAsString);
}
