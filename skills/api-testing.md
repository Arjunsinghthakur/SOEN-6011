---
title: API Testing
description: This is a skill on API Testing
author: Arjun Singh Thakur
tags:
  - software-testing
layout: layouts/skill.njk
---
API testing is a type of software testing that involves testing application programming interfaces (APIs) directly to determine if they meet expectations for functionality, reliability, performance, and security.  It is a part of integration testing and performed without GUI. 
API testing commonly includes testing REST APIs or SOAP web services with JSON or XML message payloads being sent over HTTP, HTTPS.

### Classification of Skill
![Classification Testing](https://www.h2kinfosys.com/blog/wp-content/uploads/2018/02/Software-Testing-Classification-1024x607.png)

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
[![Get Request](http://img.youtube.com/vi/KOxbO0EI4MA/0.jpg)](https://www.youtube.com/watch?v=KOxbO0EI4MA "Audi R8")
# Role of Academia or Industry in Cultivating the Skill
# Tools Supporting the Skill
# Skill Self-Assessment (My Skill Score (1 – 10) and Reasons for Self-Assigned Score)
# References 
