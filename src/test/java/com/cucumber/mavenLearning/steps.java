package com.cucumber.mavenLearning;

import junit.framework.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class steps {
	@Given("^just test$")
	public void just_test() throws Throwable {
	    
	}

	@When("^test execute$")
	public void test_execute() throws Throwable {
	   Assert.assertTrue("fbdhhf",true);
	}

	@Then("^passes$")
	public void passes() throws Throwable {
	   
	}

}
