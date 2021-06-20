const Application = require('spectron').Application;
const assert = require('assert');
const path = require('path');

const electronPath = require('electron');

const myApp = new Application({
    path: electronPath,
    args: [path.join(__dirname)],
});

const verifyButtonClickAppendsParagraph = async (app) => {
    await app.start();
    try {
        const count = await app.client.getWindowCount();
        assert.strictEqual(count, 1);
        // const isVisible = await app.browserWindow.isVisible();
        // assert.strictEqual(isVisible, true);
        const beforeClick = await app.client.$('#to-be-filled');
        assert.strictEqual(
            await beforeClick.getHTML(),
            '<div id="to-be-filled">Nothing inside of me yet</div>'
        );
        const btn = await app.client.$('#test-button');
        btn.click();
        const afterClick = await app.client.$('#to-be-filled');
        assert.strictEqual(
            await afterClick.getHTML(),
            '<div id="to-be-filled"><p>I am a dynamically created text</p></div>'
        );
        console.log('Launch succeeded');
    } catch (err) {
        console.log(err);
        console.log('Launch failed');
    }
    await app.stop();
};

verifyButtonClickAppendsParagraph(myApp);
