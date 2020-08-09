---
title: Software Configuration Control
description: This is a skill on Software Configuration Control
author: Vijay Krishna Vallabhaneni
tags:
  - Software Configuration Management
layout: layouts/skill.njk
---
---
## Table Of Contents
[toc]
Software configuration control deals with the management of changes in various phases of software development. By using a **disciplined approach to change management**, new changes can be incorporated into the software product. This is crucial in software development because the requirements can change at any point of the development process. This skill falls in line with Agile approach to software development as requirements change often.
Changes are needed even after the software is delivered to the client, for example a client might need to incorporate a new payment system to their existing web application. Or a client might want to improve their response time of their existing site. Thereby also playing a part in maintenance activities too
Having a change management tool helps the software development process by
* Tracking who made the changes
* Tracking where the change happened
* Tracking what each change does
* Providing a way to identify what changes are needed
* Providing a way to review and authorise changes
* Providing a way to propose new changes
* Making collaboration within the team easier
* Providing a way to manage build pipeline
* Providing a way to manage version control

## Classification of Skill 
---
  
Software configuration control for most part is a **technical** skill, as it includes some aspect of project management. Although project management seems like it would be a soft skill, In reality it does require a lot of technical expertise to plan, delegate , engineer a software project.

## Prerequisites for Skill
---
  
* Exposure to change management tools like Ansible, Chef, Jenkins, Jira
* Knowledge of version control systems like Git

## Related Software Engineering Area(s)
---
  
### DevOps
bridges the gap between development and operations, which helps in building,testing,deployment of an application at a faster pace
### Software Quality Assurance
Application must be tested continuosly throughout the development process, Having traceability ensures that the agreed upon software quality assurances are met
### Project Management
Includes management activities such as planning, managing resources, time, developers to deliver a software product to the customers,clients or stakeholders

## Rationale for Skill
---
* Having traceability built into your software development pipeline, benefits not only in development but also in project management and quality assurance.
* Without a system for change management, there is no way of knowing what components of the system would be affected by a new change.
* Version Control System for the source code, helps in managing different versions of the software over the course of the development
* VCS would also help teams to work independently from each other, but at the same time allow them to collaborate together to develop one final merged common version.
* As a VCS would track changes of the entire project over time, the developers have the freedom to experiment with the source code and revert back to an earlier version if needed without any problems.
* By having a change control board, the changes can be approved or rejected, as not all changes can be pursued with the constraints like budget, time, expertise, effort.

## Roles for Skill
---
Software configuration control is a skill that is crucial in all stages of a software development cycle, so most developers play an important role in supporting the skill. Following are some of the roles that could be pursued by someone who takes in interest in the skill of software configuration management.
### Devops Engineer
A devops engineer is well versed in the entire software development pipeline from development to workflow, In most cases developers often assume the responsibility of a devops engineer to deploy code themselves, but it is generally better to separate the roles so that everyone can do well in their respective tasks without compromising on software quality.

- One of the most important tasks of a devops engineer is to co-ordinate with the development team and the IT deployment to manage software releases quickly and efficiently.
- They have to be well versed in cloud platforms like AWS, Azure, GCP and must be able to choose a service that best fits the needs of their stakeholders
- Continuous Integration/Continuous Deployment is also something a devops engineer must be skilled at, this helps in rolling out features quickly. For smoother deployments it is the responsibility of a devops engineer to automate the build pipeline, including testing
### System Administrator
A system administrator is some one who is responsible for the smooth upkeep of the system, that includes performing activities like troubleshooting, monitoring, backups, security measures. One of the most important skill that a system administrator should have is *problem solving*, because problems in most cases are unexpected and a system administrator should troubleshoot the problem by finding the root cause of the problem. This has to be done meticulously by browsing through logs and finding a way to fix the problem as soon as possible without keeping the server down for too long. There is a clear overlap between the skills of a system administrator with that of configuration control. Some of the [responsibilities of system administrator](https://victorops.com/blog/definitive-guide-for-being-a-system-administrator) includes:
* Monitoring and alerting
* User permissions and administration
* Software installation, updates and upkeep
* Redundancies, rollovers and recovery plans
* Security
* Incident detection, response and remediation
* Preparation and problem solving
### Software Developer
The skills gained from configuration control also translate well into software development. Most companies require that their software development teams handle the deployment too, So it is always good for a software developer to know about deployment, change management as it is always included in the job description whether it be a backend engineer, database engineer, front end engineer. Some of the [responsibilitues of software developer](https://www.roberthalf.com.au/employers/it-technology/software-developer-jobs)  include:
* Researching, designing, implementing and managing software programs
* Testing and evaluating new programs
* Maintaining and upgrading existing systems
* Writing and implementing efficient code
### Project Manager
> "Management is, above all, a practice where art, science, and craft meet." - Henry Mintzberg

The work of a project manager involves co-ordination of resources(people,time,budget) to deliver a project that satisfies the requirements of the client. Software project management is not a small task, as there are a lot of stakeholders involved and it is generally hard to follow a traditional development cycle like water fall. A project manager should anticipate change and should constantly be looking for ways to fit it into their existing development plan without halting progress.

In change control management, a project manager also plays a crucial role, as their input to the change control board is invaluable in choosing to approve or reject a feature. Sometimes, project managers can even be part of the change control board as they are already well equipped with knowledge of how to manage time efficiently to deliver a functional project. Without a project manager that enables collaboration between development team and stakeholders, it is hard to make any progress. 
## Work Related to Skill (Related Activities and Artifacts)
---
### Participate in Code Reviews
Code reviews help in improving the quality of source code, as developers can look at new ways to solve the same problem. It also helps in maintaining consistency in coding practices throughout the whole project so that it is easier to maintain. Code reviews can also help in knowledge transfer as developers can understand the code base if they participate in code reviews with developers.
### Collaborate with Change Control Board
Change control board contains a group of individuals, they could be developers, managers or any kind of stakeholders that approve or reject the changes to the software. Not all changes can be pursued in software development, even though it might be a good idea to make a particular change it has to be considered carefully, review its benefits, effort, cost, schedule. As resources have to be managed effectively to deliver a product. But this doesn't mean new ideas aren't encouraged, CCB would give a reasonable explaination why they can't implement that change at this time to the development team and when the situation can become favorable to pursue it.
### Identify Changes
Throughout software development, the need for change can come in two forms either an **enhancement** or a **defect**. To make any change to the software, it has to be formally proposed to the CCB and after their approval the development team would go ahead with the implementation of the change. 

Some changes have more priority than the others. With an organized approach to change management all the change activities can be documented extensively. If its a defect in the software, the defect is classified based on its severity making it traceable so that a decision can be made to fix or defer or abandon.
### Configure development workflow
Software development becomes complex as the code base grows in size over time, This rise in complexity if not handled properly could lead to inefficiencies with the productivity of the development team. Developers should have the flexibility to work on the software without blocking the work of the rest of the team.

 Having a Version control system allows developers to work freely on any part of the system and have a system to merge conflicts if any. But having a VCS alone wouldn't be sufficient, there is a rising need to deliver high quality software quickly and efficiently. This can be done by integrating testing and deployment to the workflow. For example whenever a new change is made to the central repository, the code base would be tested for defects and if there are no defects the new change can be deployed to production almost immediately. By having development,testing,deployment integrate with each other, developers can make deliver software features at a faster rate than ever before.


## Real-World Example/Scenario of Skill (Text, Graphic, Audio, Video)
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/PLNheBiWOGI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Continuous delivery at Netflix

Netflix is one among the most popular streaming services, they have dominated the streaming industry for a while now. It is mostly because they have been consistently outperforming their competition in the quality of service offered to their customers both in terms of content for the price. Reed Hastings, CEO of Netflix credits most of their success to the [culture](https://www.forbes.com/sites/brettonputter/2018/12/04/netflixs-company-culture-is-not-for-everybody-and-thats-exactly-how-it-should-be/#373779a11880) at the company. They mention something called a ["dream team"](https://jobs.netflix.com/culture) where all of the team members are highly collaborative, this approach according to them will create "a more flexible, fun, stimulating, creative, collaborative and successful organization". 

> "Spinnaker is an open source multi-cloud Continuous Delivery platform for releasing software changes with high velocity and confidence. " - [Netflix Tech Blog](https://netflixtechblog.com/global-continuous-delivery-with-spinnaker-2a6896c23ba7)

![Spinnaker](https://miro.medium.com/max/875/0*QWuMAV9aACZiLL0a.)

<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Woah, what’s this? A shiny new <a href="https://t.co/q4wnE46fGs">https://t.co/q4wnE46fGs</a> for desktop? Yup. IT’S HERE. <a href="https://t.co/8y4TMzqBGa">pic.twitter.com/8y4TMzqBGa</a></p>&mdash; Twitter (@Twitter) <a href="https://twitter.com/Twitter/status/1150812293124546561?ref_src=twsrc%5Etfw">July 15, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Planning and launching the new Twitter.com
this case study focuses on how [twitter managed to plan a controlled software release](https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/bts-of-launching-the-new-twitter.html) to its users, seamlessly

> Our goal was to create one codebase - one website - capable of delivering the best experience possible to each person. - Twitter

One of the problems faced by the twitter team was that it was difficult to bring all of twitter's features to the web due to their old architectural design decisions. So they decided to rebuild their site completely from scratch. This is not a small task, as all the features from the old site have to be migrated to the new site, which is not an easy task as they had at least hundreds of them.
> We knew we were undertaking a huge task: a rewrite of one of the largest sites on the web. - Twitter
![Distributed VCS](https://miro.medium.com/max/875/1*GgaGcwh5L246YcU5NVDA5A.png)

## Role of Academia or Industry in Cultivating the Skill
---

## Tools Supporting the Skill
---
* Git
* Jira

## Skill Self-Assessment
---
6 - Less experience in working on a project with huge number of collaborators

## References 
---
1. [Distributed VCS](https://medium.com/faun/centralized-vs-distributed-version-control-systems-a135091299f0)
2. [Git](https://git-scm.com/)
