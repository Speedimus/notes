package org.ownjoo.uat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ApplicationTests
{
	@Test
	public void contextLoads()
	{
		assertTrue(true);
	}

	@Test
	public void shouldGetAPage()
	{
		WebDriver driver = new HtmlUnitDriver();
		driver.get("http://jenkins-0.cf.nonprod-mpn.ro11.allstate.com");

		WebElement loginTxt = driver.findElement(By.name("username"));
		//WebElement loginLink = loginTxt.findElement(By.tagName("input"));
		//loginLink.click();
		assertEquals( "input", loginTxt.getTagName());

		driver.quit();
	}
}
