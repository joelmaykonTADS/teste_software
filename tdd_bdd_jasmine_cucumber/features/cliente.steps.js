const assert = require("assert");
const { Given, When, Then } = require("cucumber");

const path = require("path");
const { ServiceBuilder } = require("selenium-webdriver/chrome");
const { Builder, By, Key, until } = require("selenium-webdriver");
const pathDriver =
  "/home/warrior/Documentos/teste_software/tdd_bdd_jasmine_cucumber/driver/chromedriver";
const serviceBuilder = new ServiceBuilder(pathDriver);

const driver = new Builder()
  .forBrowser("chrome")
  .setChromeService(serviceBuilder)
  .build();

Given("I'm have {string} clients in my database", function (string) {
  console.log("Inserir os dados na base de dados!");
});

When("I acess the home webpage", async function () {
  await driver.get("http://localhost:3000");
  await driver.sleep(1000);
});

Then("see the list of {string} items", async function (string) {
  let qtd = await driver.findElements(By.css("tbody tr"));
  assert.equal(qtd.length, parseInt(string));
  await driver.findElement(By.className("entrada")).sendKeys('Hello Word!!!');
  await driver.quit();
});
