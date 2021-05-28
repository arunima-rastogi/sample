package stepDefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


public class DealStepDefnition {
	WebDriver driver;

	@Given("^user is already on Login Page$")
	public void user_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://support.tricentis.com/community/webshop.do");
	}

	@When("^title of login page is Web Shop$")
	public void title_of_login_page_is_free_CRM() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Web Shop", title);
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) throws InterruptedException {
		driver.findElement(By.xpath("//a[@class='visible_link user_register']")).click();
		List<List<String>> data = credentials.raw();
		Thread.sleep(5000);
		driver.findElement(By.name("user_name")).sendKeys(data.get(0).get(0));
		driver.findElement(By.id("user_password")).sendKeys(data.get(0).get(1));
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		WebElement loginBtn = driver.findElement(By.xpath("//span[@id='login_button_inner']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginBtn);
	}

	@Then("^user is on home page$")
	public void user_is_on_hopme_page() {
		String title = driver.getTitle();
		System.out.println("Home Page title ::" + title);
		Assert.assertEquals("Web Shop", title);
	}

	@Then("^Close the browser$")
	public void close_the_browser() {
		driver.quit();
	}

}
