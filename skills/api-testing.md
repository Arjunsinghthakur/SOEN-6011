---
title: API Testing
description: This is a skill on API Testing
date: 2019-08-24
tags:
  - software-testing
layout: layouts/skill.njk
---
API testing is a type of software testing that involves testing application programming interfaces (APIs) directly to determine if they meet expectations for functionality, reliability, performance, and security.  It is a part of integration testing and performed without GUI. 
API testing commonly includes testing REST APIs or SOAP web services with JSON or XML message payloads being sent over HTTP, HTTPS.

### Classification of Skill
![Classification Testing](https://www.h2kinfosys.com/blog/wp-content/uploads/2018/02/Software-Testing-Classification-1024x607.png )

API testing itself involves the following practices:

* Unit testing - Testing the functionality of individual operations.
* Functional testing - Testing the functionality of broader scenarios, often using unit tests as building blocks for end-to-end tests. 
* Load testing - Validating functionality and performance under load, often by reusing functional test cases.
* Security testing - Includes penetration testing and fuzz testing as well as validating authentication, encryption, and access control.
* Web UI testing - Performed as part of end-to-end integration tests that also cover APIs, enables teams to validate GUI items in the context of the larger transaction.
* Security testing - This testing includes what type of authentication is required and whether sensitive data is encrypted over HTTP or both

### Prerequisites for Skill
Tester should have knowleddge of :
* Difference between API testing and Unit Testing.
* Types of Bugs that API testing detects.
  - Fails to handle error conditions gracefully
  - Unused flags
  - Missing or duplicate functionality
  - Reliability Issues. Difficulty in connecting and getting a response from API.
  - Security Issues
  - Multi-threading issues
  - Performance Issues. API response time is very high.
  - Improper errors/warning to a caller
  - Incorrect handling of valid argument values
  - Response Data is not structured correctly (JSON or XML)
* Difference between REST and SOAP web services.
  - SOAP stands for Simple Object Access Protocol whereas REST stands for Representational State Transfer.
  - SOAP is a protocol whereas REST is an architectural pattern.
  - SOAP uses service interfaces to expose its functionality to client applications while REST uses Uniform Service locators to access to the components on the hardware device.
  - SOAP needs more bandwidth for its usage whereas REST doesn’t need much bandwidth.
  - SOAP only works with XML formats whereas REST work with plain text, XML, HTML and JSON.
  - SOAP cannot make use of REST whereas REST can make use of SOAP.
* When to use REST and when to use SOAP.
  
  REST services should be used in the following instances:
  - Statelessness – Statelessness means that every HTTP request happens in complete isolation. When the client makes an HTTP request, it includes all information necessary for the server to fulfill that request. The server never relies on information from previous requests. If that information was important, the client would have sent it again in this request.
  - Caching – If there is a need to cache a lot of requests then REST is the perfect solution. At times, clients could request for the same resource multiple times. This can increase the number of requests which are sent to the server. By implementing a cache, the most frequent queries results can be stored in an intermediate location. So whenever the client requests for a resource, it will first check the cache. If the resources exist then, it will not proceed to the server. So caching can help in minimizing the amount of trips which are made to the web server.
  
  SOAP services should be used in the following instances:
  - Stateful Operations -  When the application has a requirement that state needs to be maintained from one request to another, use SOAP. We can take the example of any online purchasing site. These sites normally need the user first to add items which need to be purchased to a cart. All of the cart items are then transferred to the payment page in order to complete the purchase. This is an example of an application which needs the state feature. The state of the cart items needs to be transferred to the payment page for further processing.
  - Asynchronous processing and subsequent invocation – if there is a requirement that the client needs a guaranteed level of reliability and security then the new SOAP standard of SOAP 1.2 provides a lot of additional features, especially when it comes to security.

* Hands-on expierence with API testing tools such as Postman.

### Related Software Engineering Area(s)
* Unit Testing
APIs is testing a single endpoint, with a single request, looking for a single response or set of responses.
* Integration Testing 
Integration testing is the most often used form of API testing, as APIs are at the center of most integrations between internal or third-party services.
* End-to-End Testing
End-to-End testing can help us validate the flow of data and information between a few different API connections.  

### Rationale for Skill
* API testing allows the tester to find bugs earlier in the development process, often before the UI has been created. API testing allows the tester to make requests that might not be allowed through the UI, which is crucial for exposing potential security flaws in an application.
* Most of the companies are using Microservices nowadays and most microservices are using application programming interfaces (APIs), which are a set of commands for how a service can be used.

### Roles for Skill
* Good understanding & knowledge about SOAP,REST. 
* Clear understating about services & web services.
* Strong grip on API automation tool.

### Work Related to Skill (Related Activities and Artifacts)
* To run API request there is a need to first select the Method Type and paste URL of the API. Press Send button to send the request to API or press Add API Test button to save the request.
* Method Type could be GET, POST, PUT, PATCH, DELETE. 
  - A GET request fetches a record from a database
  - A POST request adds a new record to a database
  - A PUT request replaces a record with a new one
  - A PATCH request replaces part of a record with new information
  - A DELETE request removes a record from a database
* API require additional inputs to perform the request such as parameters, Headers, Body (JSON), and so on. 
* HTTP headers that provide information to the server about the request such as:
    - The Host: the domain and port number of the user making the request
    - Authorization: the credentials of the user making the request
    - The Content-Type: the format of the information provided in the body of the request
* A request body that provides further details for the request (this can sometimes be empty).
* In case your hosted API needs authentication, you can go to the Authorization tab and select the BasicAuth from the dropdown list (Default it is set as Noauth) and then input the Username and Password. You are now ready to send authenticated requests.
* In the automation process, it is important that you verify your output using an assertion. To add an assertion in the API Runner, go to the Assertions tab. You can add one or more assertions there.
  - Follow these steps to add assertions:
  - Choose the response type
  - Choose the assertion’s condition
  - Input the value to be checked
* Variables tab is useful to store the values that are received as a response from an API request sent. To save responses go to the Variables tab and follow these steps:
  - Add Variable
  - Give a name to the variable for better understanding of the team
  - Input the JSON Path of the value to be stored from the response body
  - To use the stored value in the variable as expected assertion you can use __name of the variable__ in any other API request. 
* Response codes are three-digit codes used to describe the result of the REST request. The response body will vary by what type of request was made. The most common response codes come in one of these three categories:
  - 200-level responses indicate that the request was received, understood, and processed
  - 400-level responses indicate that the request was received, but that there was an error from the client
  - 500-level responses indicate that there was some sort of server error

### Real-World Example/Scenario of Skill (Text, Graphic, Audio, Video)
[![Classification Testing](data:image/jpeg;base64,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)] (https://youtu.be/Q95G1sHgerk?list=RDby1GxG__UDY)
# Role of Academia or Industry in Cultivating the Skill
# Tools Supporting the Skill
# Skill Self-Assessment (My Skill Score (1 – 10) and Reasons for Self-Assigned Score)
# References 
