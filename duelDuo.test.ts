
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('https://assessment-qa-devops-loganw.herokuapp.com/')
})

afterAll(async () => {
    await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays the div with id=choices', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('Add button adds bot to player duo', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)
    const robot = await driver.findElement(By.xpath("//h3")).getText()
    await driver.findElement(By.xpath("/html/body/section[1]/div/div[1]/button")).click()
    await driver.sleep(3000)
    const addedbot = await driver.findElement(By.xpath("//div[@id='player-duo']/div/h3")).getText()
    console.log(addedbot);
    expect(addedbot).toBe(robot)
})

