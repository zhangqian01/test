package test3;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/test3",format = {"pretty", "html:target/report"})
public class BookSearchTest 
{
	
}