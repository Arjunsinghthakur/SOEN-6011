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
  - Statelessness – tatelessness means that every HTTP request happens in complete isolation. When the client makes an HTTP request, it includes all information necessary for the server to fulfill that request. The server never relies on information from previous requests. If that information was important, the client would have sent it again in this request.
  - Caching – If there is a need to cache a lot of requests then REST is the perfect solution. At times, clients could request for the same resource multiple times. This can increase the number of requests which are sent to the server. By implementing a cache, the most frequent queries results can be stored in an intermediate location. So whenever the client requests for a resource, it will first check the cache. If the resources exist then, it will not proceed to the server. So caching can help in minimizing the amount of trips which are made to the web server.

* Hands-on expierence with API testing tools such as Postman.

# Related Software Engineering Area(s)
# Rationale for Skill
# Roles for Skill
# Work Related to Skill (Related Activities and Artifacts)
# Real-World Example/Scenario of Skill (Text, Graphic, Audio, Video)
# Role of Academia or Industry in Cultivating the Skill
# Tools Supporting the Skill
# Skill Self-Assessment (My Skill Score (1 – 10) and Reasons for Self-Assigned Score)
# References 
