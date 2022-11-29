const { Builder, By, until } = require("selenium-webdriver");
const edge = require("selenium-webdriver/edge");
const path = require("path");

const service = new edge.ServiceBuilder(
  path.join(__dirname, "libs", "msedgedriver.exe")
);

async function login(username, password) {
  const options = new edge.Options();
  options.addArguments("--headless", "--log-level=3");
  const driver = await new Builder()
    .forBrowser("MicrosoftEdge")
    .setEdgeService(service)
    .setEdgeOptions(options)
    .build();
  try {
    console.log("Trying to login...");
    await driver.get("http://10.0.1.165/");
    if ((await driver.getTitle()) === "上网登录窗") {
    }
    await driver.wait(
      until.titleIs("上网登录窗"),
      2000,
      "Login page not found or already logged in."
    );
    const usernameInput = await driver.findElement(
      By.css("input.edit_lobo_cell[type=text]")
    );
    const passwordInput = await driver.findElement(
      By.css("input.edit_lobo_cell[type=password]")
    );
    const submitButton = await driver.findElement(
      By.css("input.edit_lobo_cell[type=submit]")
    );
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);
    await submitButton.click();
    await driver.wait(until.titleIs("注销页"), 5000, "Login failed.");
    console.log("Login successful.");
  } catch (err) {
    console.log(err.message);
  } finally {
    await driver.quit();
  }
}

module.exports = {
  login,
};
