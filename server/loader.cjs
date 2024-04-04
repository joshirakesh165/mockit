try {
    async function loadApp() {
        await import("./app.js");
    }
    loadApp();
} catch(err) {
    console.log('err',err)
}