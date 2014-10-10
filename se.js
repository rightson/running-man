var webdriver = require('selenium-webdriver')

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build()

driver.get('https://tw.yahoo.com/')
driver.findElement(webdriver.By.id('p')).sendKeys('webdriver 12')
driver.findElement(webdriver.By.id('searchsubmit')).click()
driver.wait(function() {
    return driver.getTitle().then(function(title) {
        return title === 'webdriver - Google Search'
    })
}, 1000)

driver.quit()
