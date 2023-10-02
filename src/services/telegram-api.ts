export class Storage {
    static hasTelegramAPI() {
        return !!window.Telegram?.WebApp?.CloudStorage && window.Telegram.WebApp.isVersionAtLeast('6.9');
    }
    static async setItem(key, value): Promise<unknown> {
        if (!Storage.hasTelegramAPI()) {
            localStorage.setItem(key, value)
            return;
        }

        return new Promise(resolve => {
            window.Telegram.WebApp.CloudStorage.setItem(key, value, (x) => {
                resolve(x);
            });
        })
    }

    static async getItem(key): Promise<string | undefined> {
        if (!Storage.hasTelegramAPI()) {
            return localStorage.getItem(key);
        }

        return new Promise(resolve => {
            window.Telegram.WebApp.CloudStorage.getItem(key, (v) => resolve(v))
        });
    }
}