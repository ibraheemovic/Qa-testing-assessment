
import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);

  await driver.sleep(2000);
});

test(`Draw button displays bot choices`, async () => {
  const draw = await driver.findElement(By.id(`draw`));
  await draw.click();

  const botChoices = await driver.findElement(By.id(`choices`));
  const botDisplayed = await botChoices.isDisplayed();

  expect(botDisplayed).toBe(true);
  await driver.sleep(2000);
});

test(`Add To Duo adds to user duo`, async () => {
  const draw = await driver.findElement(By.id(`draw`));
  await draw.click();

  const addToDuo = await driver.findElement(By.xpath(`//div/div/button`));

  await addToDuo.click();

  const playerDuo = await driver.findElement(By.id(`player-duo`));
  const playerDuoDisplayed = await playerDuo.isDisplayed();

  expect(playerDuoDisplayed).toBe(true);
  await driver.sleep(2000);
});