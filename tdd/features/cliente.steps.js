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
  await driver.sleep(3000);
});

Then("see the list of {string} items", async function (string) {
  assert(await driver.tagName(By.name("tr").length)).toBeEqual(10);
  await driver.quit();
});
