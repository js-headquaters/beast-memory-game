import {GameLevel} from "@interfaces/index";
import {Storage} from "@services/telegram-api";
import {effect, signal} from "@preact/signals";


export class GameLevelService {
    readonly maxDifficulty: GameLevel = 6;

    readonly gameLevel = signal<GameLevel>(1);

    loadLevel = async () => {
        const level = Number(await Storage.getItem('level'));
        if (level) {
            this.gameLevel.value = level as GameLevel;
        }

        effect(async () => {
            await Storage.setItem('level', String(this.gameLevel.value))
        })
    }

    increaseLevel = () => {
        const value = (this.gameLevel.value + 1) as GameLevel;
        if (value <= this.maxDifficulty) {
            this.gameLevel.value = value;
        }
    };

    degreesLevel = () => {
        const value = (this.gameLevel.value - 1) as GameLevel;
        if (value > 0) {
            this.gameLevel.value = value;
            Storage.setItem('level', String(value))
        }
    };
}
