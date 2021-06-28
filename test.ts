import { Application } from 'spectron';

const path = require('path');
const electronPath: any = require('electron');

const app = new Application({
    path: electronPath,
    args: [path.join(__dirname)],
});

describe('App', () => {
    beforeEach(async () => {
        await app.start();
    });

    test('should launch app', async () => {
        const windowCnt = await app.client.getWindowCount();
        expect(windowCnt).toBe(1);
    });

    afterEach(async () => {
        if (app && app.isRunning()) {
            await app.stop();
        }
    });
});
