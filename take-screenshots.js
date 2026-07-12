import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const sites = [
    { name: 'decocasa', url: 'https://www.decocasa.cl' },
    { name: 'doral', url: 'https://www.doral.cl' },
    { name: 'marketprime', url: 'https://www.marketprime.cl' }
  ];

  for (const site of sites) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    try {
        console.log(`Taking screenshot for ${site.name}...`);
        await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 60000 });
        await page.screenshot({ path: `./public/assets/img/${site.name}.jpg`, type: 'jpeg', quality: 80 });
        console.log(`Done: ${site.name}`);
    } catch (e) {
        console.error(`Error for ${site.name}:`, e);
    }
  }

  await browser.close();
})();
