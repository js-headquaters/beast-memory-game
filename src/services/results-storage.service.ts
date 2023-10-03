import { Storage } from './telegram-api';
import {GameStatisticWithLevel} from "@interfaces/index";

export async function persistGameStatisticsByLevel(gameStatisticWithLevel: GameStatisticWithLevel): Promise<void> {
    await Storage.setItem('results', JSON.stringify(gameStatisticWithLevel))
}

export async function getResultsStorage(): Promise<GameStatisticWithLevel> {
    const resultsAsString = await Storage.getItem('results') || '{}';
    return JSON.parse(resultsAsString);
}
