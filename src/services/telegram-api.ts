export class Storage {
    static hasTelegramAPI() {
        return !!window.Telegram?.WebApp?.CloudStorage && window.Telegram.WebApp.isVersionAtLeast('6.9');
    }
    static async setItem(key, value): Promise<boolean> {
        if (!Storage.hasTelegramAPI()) {
            localStorage.setItem(key, value)
            return;
        }

        return new Promise((resolve, reject) => {
            window.Telegram.WebApp.CloudStorage.setItem(key, value, (err, isStored) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(isStored);
            });
        })
    }

    static async getItem(key): Promise<string | undefined> {
        if (!Storage.hasTelegramAPI()) {
            return localStorage.getItem(key);
        }

        return new Promise((resolve, reject) => {
            window.Telegram.WebApp.CloudStorage.getItem(key, (err, value) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(value)
            })
        });
    }
}
