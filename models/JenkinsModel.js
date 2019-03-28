const jenkins = require('jenkins');


class JenkinsJobBuildParameter() {
	var name;
	var value;
	var choices = {};
	var defaultValue;

	function getName() {
		return name;

	}
	function setName(name) {
		this.name = name;
	}

	function getValue() {
		return value;
	}
	function setValue(value) {
		this.value = value;
	}
	function getChoices() {
		return choices;
	}
	function setChoice(choices) {
		this.choices = choices;
	}
	function getDefaultValue() {
		return defaultValue;
	}
	function setDefaultValue(defaultValue) {
		this.defaultValue = defaultValue
	}

	function toString() {
		return "JenkinsJobBuildParameters{" + 
				"name = " + name + '\'' +
				", value = " + value + '\'' +
				", choices = " + choices +
				", defaultValue = " + defaultValue + '\'' +
				"}";
	}
}