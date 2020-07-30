---
title: Debugging
description: This skill is about identigying faults and debugging software code.
author: Sucheta Vijayakumar Sudhakumari
tags:
  - Software Construction
layout: layouts/skill.njk
---
## Table Of Contents
[toc]

## Name of Skill
---
Debugging

## Classification of Skill
---
Technical Skill

## Prerequisites for Skill
---
A person should posses some qualities to be a good debugger,which are spread across technical skills , cognitive ablities and character traits.
 
### Technical Skills :
* Project Knowledge.
* Programming Language Knowledge.
* Frameowork Knowledge.
* Tool/IDE Knowledge.
  
### Coginitive Skills :
* Problem Solving Ability.
* Mental Modelling Ability to connect dots and envision the big picture.
* Creative Thinking.
### Character Traits :
* Patience and Persistance.
* Ability to concetrate and keep up a longer Attention Span.

## Related Software Engineering Area(s)
---
* Software Testing.
* Software Maintenance.
* Software Integration.
* Software Development.

## Rationale for Skill
---
  Debugging as a skillset is of profound relevance not just in software engineering , but rather in engineer as general . If it is not for debugging , we would be flooded with faulty products and partially functioning applications. In the context of software engineering, given below are the main rationale behind debugging as a SE activity :
  - Identify the cause for faulty software behaviour.
  - Fix semantic,syntactical or design bugs in a program.
  - Though not the direct intention , debugging also increases one's familarity and hence knowledge about the code. 

  
## Roles for Skill
---
  
* Software Developer .
* Programmer Analyst .
* Software Maintainer .
* Application Support Engineer.

  
## Related Software Engineering Area(s)
---
* Software Testing.
* Software Maintenance.
* Software Integration.

## Rationale for Skill
---
* Identify the cause for faulty software behaviour.
* Fix semantic,syntactical or design bugs in a program.
* Though not the direct intention , debugging also increases one's familarity and hence knowledge about the code. 

## Work Related to Skill (Related Activities and Artifacts)
---
  Debugging is an evergreen and ubiqutous activity in Software Development. As obvious as it sounds,it has been widely researched ,resulting in the production of a bunch of tools and techniques to help with the process. Given below is a brief through some of them. 
  
 ### Types of Debugging 
* Static Debugging - Static debugging is performed before the program run by examining source code. Mainly done by analyzing a set of code against a set (or multiple sets) of coding rules.Though the intent is analogous to manual code review , SCA is accomplished these days by tools integrated into the pipeline .eg: GitLab code quality checks.
* Dynamic Debugging- Dynamic debugging involves run time tracing , employing techniques like Single Stepping, Breakpoints, Watch Points etc.The idea is to potentially pause the execution at certain points so that the contents of variables in memory can be inspected. This helps to understand what is happening when an application is running, and compare that against one's own notion about what should be happening.
    - Single Stepping : Execute one instruction at a time to make sure each instruction is executed correctly. This method is tedious but useful in verifying each step of a program.
    - BreakPoints : Tell the program to stop executing when it reaches a specific instruction.This technique lets one quickly execute selected code sequences to get a high-level     overview of the execution behavior.
    - Watch Points : Tell the program to stop when a register or memory location changes or when it equals to a specific value. This technique is useful when one doesn’t know where or when a value is changed and when this value change likely causes the error.
* Postmartum Debugging - This type of debugging involves analyzing the dump data and logs of a program . While the main motive behind this approach is to locate crash points and investigate its reason , this technique is also employed to identify the runtime behaviour of a program in the production environment.Most often , the variances in runtime environment induce 'heisenbug'(A computer programming jargon for unstable bugs) in the program, which could not be simulated in development environment. 
    
### Debugging Techniques
  As much as debugging is a technical activity it is also a cognitive exercise , where the programmer will have to employ different techniques to isolate the error from the rest of the program , depending on its nature . Below are the ones which I find to be most interesting.
* BackTracking : Start from the point where to problem occurred and go back through the code to see how that might have happened. 
* Bug Clustering : If a large number of errors are being reported, group them into classes of related bugs (or similar bugs), and examine only one bug from each class. The intuition is that bugs from each class have the same cause (or a similar cause). Therefore, fixing a bug with automatically fix all the other bugs from the same class (or will make it obvious how to fix them).
* Hypothesis Postulation : This technique involves inspecting the test case results , forming a hypothesis that is consistent with the observed data followed by designing and run a simple test to refute the hypothesis. If the hypothesis has been refuted, derive another hypothesis and continue the process. In some sense, this is also a simplification process: it reduces the number of possible hypotheses at each step. 
* Instrument program to log information : Logging involves printing information regarding the program workflow onto the screen so that the programmer do not have to stop and move line by line , but could still see the control flow and its parameters in the source code.Although the printed information is effective in some cases, it can also become difficult to inspect when the volume of logged information becomes huge. In those cases, automated scripts may be needed to sift through the data and report the relevant parts in a more compact format.

    
## Real-World Example/Scenario of Skill (Text, Graphic, Audio, Video)
---
  Although critical in software development , debugging is one of the most detested activity among software developers. As obvious as it is , programmers prefer writing code that works than breaking their heads to find the 'lurking' cause of failure. To add the pain points , as software development teams keep on evolving , most often a developer will have to debug and fix bugs on code written by another developer who might not even be known to the person in charge . This makes debugging even more diffuclt. But as its said "To err is human" and hence errors are an inevitable part of software development. , which makes debugging an indispensilbe skill required by software developers.
  ![Debugging Stages](../../_site/img/DebuggingStages.jpg)
  Aa astonishing as it sounds ,almost 60 percent of software development works goes into debugging and therefore a plethora of resources are out there helping developers understand and cultivate proper debugging practises. While some of them are guidelines from experienced developers , there are also a collection of debugging stories and even podcasts from developers across the world about the wierdest and hardest bugs they ever had to tackle.A a few of them have been listed below:
  
  
## Role of Academia or Industry in Cultivating the Skill
---


## Tools Supporting the Skill
---
* All Major IDEs for eg Intellij , Eclipse etc .
* Logging frameworks which enable dump data debugging.
* Browser DevTools
* Static Code Analysis Tools
  

## Skill Self-Assessment
---
  8
  

## References 
---
* [SWEBOK3](https://users.encs.concordia.ca/~kamthan/courses/soen-6011/project/SWEBOK3.pdf)
* [Debugging Techniques](http://www.cs.cornell.edu/courses/cs312/2006fa/lectures/lec26.html)


