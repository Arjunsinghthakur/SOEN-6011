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
* Using Revision Control Data Analysis : Bugs often occur as the software evolves. By keeping software under version control, using configuration management tools (such as Git, Mercurial, and Subversion), the programmer can dig into a project's history to aid debugging work. Here are some examples: If a program crashes or misbehaves at a particular program line the programmer can analyze the source code to see the last change associated with that line (for example, with the git blame command). A review of the change can then reveal that, say, one's colleague who implemented it forgot to handle a specific case. Alternatively, by reading the version-control log of software changes, the programmer can find a recent change that may be related to the failure being witnessed and examine it in detail.
* Differential debugging : Differences between datasets can also reveal a fault when the programmer can lay hands on a working system and a failing one.34 The goal is to find where and why the operation of the two systems diverges. The data that can be used for this purpose can come from their generated log files, their execution environment, or traces of their operation. In all cases the programmer must ensure the two system configurations are as similar as possible, apart from exhibiting the failure.
* Editor tricks : A powerful text editor or IDE can be a great aid when analyzing log data. Syntax coloring can help the programmer identify the relevant parts. With rectangular selections and regular expressions one can eliminate boiler-plate or nonessential columns to focus on the essential elements or run a file-difference program on them. The programmer can also identify patterns associated with a bug using search expressions and matched-text highlighting.

    
## Debugging in Real Software Projects
---
  The computing pioneer Maurice Wilkes famously described his 1949 encounter with debugging like this: "As soon as we started programming, we found to our surprise that it wasn't as easy to get programs right as we had thought it would be.Debugging had to be discovered. I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs."Every programmer would unanimously agree to this.  
  
  Although critical in software development , debugging is one of the most detested activity among software developers. As obvious as it is , programmers prefer writing code that works than breaking their heads to find the 'lurking' cause of failure. To add the pain points , as software development teams keep on evolving , most often a developer will have to debug and fix bugs on code written by another developer who might not even be known to the person in charge . This makes debugging even more difficult. But as its said "To err is human" and hence errors are an inevitable part of software development. , which makes debugging an indispensable skill required by software developers.

  As astonishing as it sounds ,almost 60 percent of software development works goes into debugging and therefore a plethora of resources are out there helping developers understand and cultivate proper debugging practices. While some of them are guidelines from experienced developers , there are also a collection of debugging stories and even podcasts from developers across the world about the weirdest and hardest bugs they ever had to tackle and why is Debugging such an important skill.A a few of them have been listed below:
  
  * How Debugging make a better Developer - https://carlalexander.ca/how-debugging-make-better-developer/
  * Why do we Debug code - https://sjinnovation.com/why-do-we-debug-code/
  * How to debug things ? A guide to non developers - https://willcritchlow.com/how-to-debug-things-a-guide-for-non-developers-46599a2c4a41
  * Modern Debugging: The Art of Finding a Needle in a Haystack - https://cacm.acm.org/magazines/2018/11/232215-modern-debugging/fulltext
  
  
## Role of Academia or Industry in Cultivating the Skill
---
  Though software debugging is not usually a course taught as such in computer science/software engineering programmes in School , many of the related courses affect a student's debugging skills. For example , a course on Data Structures and Algorithms is expected to increase a student's understanding on core programming  concepts which is imperative to successfully understand and debug a software program . Similarly a course on critical thinking can help improve the reasoning ability of a person , helping him approach problems in a systematic and consistent way , which is essential for employing debugging techniques like Bug Clustering and Hypothesis Postulation mentioned above .
  
  Moving on to Industry ,there is considerable amount of difference in the volume of debugging activity performed as compared to an academic project . While academic projects have a limited scope and shorter breadth, Industrial projects are built on a wider scope , with plethora of technologies working together,also for a longer time duration , because of which there is massive amount of debugging involved . Continuous releases, changing requirements and frequent code changes also causes code breakage ,  which subsequently makes debugging a frequent activity  in industrial software engineering.Ergo , while academia helps in equipping a programmer to be able to debug , industrial experience is what hones this skill. Owing to its industrial importance , online learning platforms on the Internet  have also been offering courses on Debugging lately (Udacity ,Udemy and Courseera to name a few).


## Tools Supporting the Skill
---
* All Major IDEs for example Intellij , Eclipse etc .
* Logging frameworks which enable dump data debugging.
* Browser DevTools(For debugging front end web development).
* Static Code Analysis Tools.
* Memory Profiling Softwares like Visual VM(mainly for debugging of performance and thread related issues) .
  

## Skill Self-Assessment
---
  Assigned Score : 8 .
  My rationale for giving myself a score of 8 is based on my industrial experience as a Java Software Developer . I have successfully completed many bug fixing  assignments and also find  debugging and bug fixing to be very gratifying , while most of my colleagues prefer writing new working code for new feature development over it.Considering these factors, I find a score of 8 reasonable.
    

## References 
---
* [SWEBOK3](https://users.encs.concordia.ca/~kamthan/courses/soen-6011/project/SWEBOK3.pdf)
* [Debugging Techniques](http://www.cs.cornell.edu/courses/cs312/2006fa/lectures/lec26.html)


