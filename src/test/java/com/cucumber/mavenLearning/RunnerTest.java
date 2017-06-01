package com.cucumber.mavenLearning;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resource/",
		format = {"pretty","html:target/html/"}
//		glue = "com.cucumber.mavenLearning.steps"
		)
public class RunnerTest {
	

}
