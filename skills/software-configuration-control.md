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
> "Speed of innovation is our competitive advantage. If we aren't fast, our competitors will be" - Andy Glover, Delivery Engineer at Netflix

[Netflix](https://www.netflixinvestor.com/ir-overview/long-term-view/default.aspx) is one among the most popular streaming services, they have dominated the streaming industry for a while now. It is mostly because they have been consistently outperforming their competition in the quality of service offered to their customers both in terms of content and for their subscription model. Reed Hastings, CEO of Netflix credits most of their success to the [culture](https://www.forbes.com/sites/brettonputter/2018/12/04/netflixs-company-culture-is-not-for-everybody-and-thats-exactly-how-it-should-be/#373779a11880) at the company. They mention something called a ["dream team"](https://jobs.netflix.com/culture) where all of the team members are highly collaborative, this approach according to them will create "a more flexible, fun, stimulating, creative, collaborative and successful organization". 

[Spinnaker](https://spinnaker.io/) allowed the netflix team to move fast at a global scale, allowing developers to make "rapid changes" with confidence. So, teams can focus more on developing the "right" product and spend less on the deployment details. Extensibility was one of their primary goals for spinnaker.

> "Spinnaker is an open source multi-cloud Continuous Delivery platform for releasing software changes with high velocity and confidence. " - [Netflix Tech Blog](https://netflixtechblog.com/global-continuous-delivery-with-spinnaker-2a6896c23ba7)

Before spinnaker they were using [Asgard](https://netflixtechblog.com/moving-from-asgard-to-spinnaker-a000b2f7ed17) which allowed them to efficiently automate AWS deployments, but one of its main drawbacks was it wasn't extensible with other CI/CD tools like jenkins this made them look into developing something that is extremely extensible, enable repeatable automated deployments, operationally resillient, Thus spinnaker was born. Ultimately, it's main goal is to [improve developer productivity](https://thenewstack.io/netflix-built-spinnaker-high-velocity-continuous-delivery-platform/) through automation making their jobs easier when working on a complex software project.

![Spinnaker](https://miro.medium.com/max/875/0*QWuMAV9aACZiLL0a.)

To release features fast, *automation* and *insights* are key to their development workflow. Automation eliminates the need of human in the build process, this would save time considerably as a pipeline would take a lot of time if some of the steps have to be taken manually, this is also prone to errors as consistency and repeatability can't be guaranteed when humans are included in a software process. Insights on the other hand, helps the development team track and monitor their systems through various stages during development and testing. It helps in finding the root cause of a problem easily and is easier in the long term to fix a problem due to its tracability.

> "Our goal is to provide the ability for any engineer on the team to easily get new functionality running in production while keeping the larger team informed about what’s happening, and without adversely affecting system stability." - [Netflix Tech Blog](https://netflixtechblog.com/deploying-the-netflix-api-79b6176cc3f0)


<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Woah, what’s this? A shiny new <a href="https://t.co/q4wnE46fGs">https://t.co/q4wnE46fGs</a> for desktop? Yup. IT’S HERE. <a href="https://t.co/8y4TMzqBGa">pic.twitter.com/8y4TMzqBGa</a></p>&mdash; Twitter (@Twitter) <a href="https://twitter.com/Twitter/status/1150812293124546561?ref_src=twsrc%5Etfw">July 15, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Planning and launching the new Twitter.com
> "Make every detail perfect and limit the number of details to perfect." - Jack Dorsey, CEO of Twitter

this case study focuses on how [twitter managed to plan a controlled software release](https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/bts-of-launching-the-new-twitter.html) to its users, by [actively listening to their feedback](https://www.wired.com/story/twitter-website-redesign/) and delivering a design that is well received by everyone who was using it.

> "Our goal was to create one codebase - one website - capable of delivering the best experience possible to each person." - [Twitter](https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/buildingthenewtwitter.html)

One of the problems faced by the twitter team was that it was difficult to bring all of twitter's features to the web due to their old architectural design decisions. So they decided to rebuild their site completely from scratch. This is not a small task, as all the features from the old site have to be migrated to the new site, which takes a considerable amount of time as they had at least hundreds of them.

> "We knew we were undertaking a huge task: a rewrite of one of the largest sites on the web." - Twitter

To prioritize changes they categorized their features by using the following criteria
* Is this required for safety on Twitter?
* Is this required to edit personal information?
* Is this going to improve accessibility (A11Y) of twitter.com? 
* Is this a core part of the Twitter desktop experience?
* Is this a top feedback request?
* Is this going to impact to Twitter metrics?

This is a perfect example for software configuration control, as each change is evaluated to see if it fits the criteria for the new site. Setting up a criteria this early into redesign proved to be crucial in the long run.

> "We wanted to make sure we were getting feedback at every step of the way to help us iterate and improve on the experience" - Twitter

As twitter is a free to use service, publicly available to everyone, Getting "global" feedback from its user base on the design throughout the development was important to the company. Because if [companies force a new feauture or design](https://www.androidpolice.com/2020/02/17/reddit-forcing-users-to-log-in-mobile-website/) on the users they might respond negatively to it. By allowing users to *opt-in* to the new twitter.com experience this early in the development, the development team can get constant feedback from their user base so that they can make mistakes early and see what works and what doesn't work with most users.

Looking at how they planned their milestones for the new site,
1. Milestone 1: Defaulting the Twitter web team to the new experience.
2. Milestone 2: Defaulting all Twitter employees to the new experience. Additionally, we made the new site available to people on mobile.twitter.com on desktop devices. From this point forward we were developing publicly, getting feedback from early adopters.
3. Milestone 3: Giving people a chance to opt-in to the experience on twitter.com.
4. Milestone 4: Experimenting with defaulting people to the new experience and testing new navigation layouts influenced by feedback.
5. Milestone 5: Launching the new twitter.com to people who are logged in. 
6. Milestone 6: Launching the new twitter.com to people who are logged out.

It is clear that they are very careful with the release of their new site, and made sure that it passed through rigorous user testing at every stage before being rolled out globally.  The release did not happen at once, but in stages and feedback received through *metrics* at each stage helped define the new changes to be planned for the next stage. This form of deployment over time, gives the development more freedom to *experiment* with ideas and at the same time manage the expectations of the new design in a way that aligns with what the user would want. This approach to design, falls in line with the central theme behind twitter, which is ["freedom through expression"](https://www.wired.com/video/watch/wired25-twitter-ceo-jack-dorsey).


## Role of Academia or Industry in Cultivating the Skill
---
### Role of Academia
Software configuration control affects every stage of software development. While there is no direct course offered by universities on software configuration control, there are several courses on systems administration, software project management, software testing and devops. In addition to this, most course level projects require the students to make use of version control tools like git to manage changes in their group projects. Students also learn how to prioritize features in a group meetings by exploring their options candidly to meet the project deadlines. Courses should encourage students to make use of software configuration management automation in their project workflows, so that they can see the benefits of it for themselves.

Practical experience in group projects is always useful in [developing much needed soft-skills](https://www.cmu.edu/teaching/designteach/teach/instructionalstrategies/groupprojects/design.html). Because in real world, one person cannot do everything on their own, delivering great projects require constant communication and being open to feedback. While the skills learned from academia might not always be explicit, students tend to develop useful skills like problem solving, project management, change control, collaboration subconsciously and use the mistakes they have made in their old projects as an opportunity to learn from them and approach the problem in a different way in their next project. 

Universities should give the students chance to experiment and fail, this can be done by not limiting the requirements to specific tools or technologies and allowing the students choose their own technology stack. Because software tools and technologies change fast, it is not useful for students to learn a technology that is [outdated](https://whydoesitsuck.com/why-does-php-suck/) compared to the ones in demand in the industry. Universities should update the topics covered in their courses regularly so that they are still relevant when working in the industry.



### Role of Industry
Most applications that are developed in the industry are quite complex, without a change configuration system in place the entire project can quickly become an unmanageable blackbox which is tough to debug or extend. So, it is not uncommon for industries to widely adopt the use of software configuration control in their product development lifecycle, as its use is felt throughout the development from planning to deployment. Recently, more companies have started to see the benefits of open sourcing their internal tools or using open source tools, as this helps the industry as a whole in using solutions that are well tested and production ready. 


Automation is key when controlling changes at large scale, when there is less room for human error, the changes can be made quickly, which allows developers to make and catch mistakes early so that they can focus more on the actual product and not in its deployment. When managing a software that is being developed actively by teams spread across the world, it is crucial to have systems in place that support collaboration at scale through tools like git, JIRA for issue management, etc.


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
