import { Storage } from './telegram-api';
import {GameStatisticWithLevel} from "@interfaces/index";

export async function persistGameStatisticsByLevel(gameStatisticWithLevel: GameStatisticWithLevel): Promise<void> {
    debugger;
    await Storage.setItem('results', JSON.stringify(gameStatisticWithLevel))
    debugger;
}

export async function getResultsStorage(): Promise<GameStatisticWithLevel> {
    debugger;
    const resultsAsString = await Storage.getItem('results') || '{}';
    debugger;
    return JSON.parse(resultsAsString);
}
