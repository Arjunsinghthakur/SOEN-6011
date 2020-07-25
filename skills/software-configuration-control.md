---
title: Software Configuration Control
description: This is a skill on Software Configuration Control
tags:
  - software-configuration-management
layout: layouts/skill.njk
---
---
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
* Having traceability built into your software development pipeline, benefits not only in development but also in project management and quality assurance.
* Without a system for change management, there is no way of knowing what components of the system would be affected by a new change.
* Version Control System for the source code, helps in managing different versions of the software over the course of the development
* VCS would also help teams to work independently from each other, but at the same time allow them to collaborate together to develop one final merged common version.
* As a VCS would track changes of the entire project over time, the developers have the freedom to experiment with the source code and revert back to an earlier version if needed without any problems.
* By having a change control board, the changes can be approved or rejected, as not all changes can be pursued with the constraints like budget, time, expertise, effort.


## Roles for Skill
---
### Participate in Code Reviews
Code reviews help in improving the quality of source code, as developers can look at new ways to solve the same problem. It also helps in maintaining consistency in coding practices throughout the whole project so that it is easier to maintain. Code reviews can also help in knowledge transfer as developers can understand the code base if they participate in code reviews with developers.

### Collaborate with Change Control Board
Change control board contains a group of individuals, they could be developers, managers or any kind of stakeholders that approve or reject the changes to the software. Not all changes can be pursued in software development, even though it might be a good idea to make a particular change it has to be considered carefully, review its benefits, effort, cost, schedule. As resources have to be managed effectively to deliver a product. But this doesn't mean new ideas aren't encouraged, CCB would give a reasonable explaination why they can't implement that change at this time to the development team and when the situation can become favorable to pursue it.
### Identify Changes
Throughout software development, the need for change can come in two forms either an **enhancement** or a **defect**. To make any change to the software, it has to be formally proposed to the CCB and after their approval the development team would go ahead with the implementation of the change. Some changes have more priority than the others. With an organized approach to change management all the change activities can be documented extensively. If its a defect in the software, the defect is classified based on its severity making it traceable so that a decision can be made to fix or defer or abandon.
### Configure development workflow
Software development becomes complex as the code base grows in size over time, This rise in complexity if not handled properly could lead to inefficiencies with the productivity of the development team. Developers should have the flexibility to work on the software without blocking the work of the rest of the team.

 Having a Version control system allows developers to work freely on any part of the system and have a system to merge conflicts if any. But having a VCS alone wouldn't be sufficient, there is a rising need to deliver high quality software quickly and efficiently. This can be done by integrating testing and deployment to the workflow. For example whenever a new change is made to the central repository, the code base would be tested for defects and if there are no defects the new change can be deployed to production almost immediately. By having development,testing,deployment integrate with each other, developers can make deliver software features at a faster rate than ever before.


## Work Related to Skill (Related Activities and Artifacts)
* Merge Branches
* Review Pull Requests
* Assign tasks to teams

## Real-World Example/Scenario of Skill (Text, Graphic, Audio, Video)
* Build large and complex applications using a distributed version control system like git
![Distributed VCS](https://miro.medium.com/max/875/1*GgaGcwh5L246YcU5NVDA5A.png)

## Role of Academia or Industry in Cultivating the Skill

## Tools Supporting the Skill
* Git
* Jira

## Skill Self-Assessment (My Skill Score (1 – 10) and Reasons for Self-Assigned Score)
6 - Less experience in working on a project with huge number of collaborators

## References 
1. [Distributed VCS](https://medium.com/faun/centralized-vs-distributed-version-control-systems-a135091299f0)
2. [Git](https://git-scm.com/)