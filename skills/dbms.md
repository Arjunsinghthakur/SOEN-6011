---
title: Database Management System (DBMS)
description: This is a skill on Computational Foundation
author: Harsh Vaghani
tags:
  - Computational Foundation
layout: layouts/skill.njk
---

---

## Table Of Contents

[toc]
A Database Management System (DBMS) is a software designed to store, managed, define and to retrieve the data in a database.

## Name of the Skill

---

Database Management System (DBMS)

## Classification of Skill

---

Database management systems can be classified based on several criteria, such as the data model, user numbers and database distribution, all described below.

### Classification Based on Data Model

    - The most popular data model in use today is the relational data model. Well-known DBMSs like Oracle, MS SQL Server, DB2 and MySQL support this model. Other traditional models, such as hierarchical data models and network data models, are still used in industry mainly on mainframe platforms. However, they are not commonly used due to their complexity. These are all referred to as traditional models because they preceded the relational model.
    - In recent years, the newer object-oriented data models were introduced. This model is a database management system in which information is represented in the form of objects as used in object-oriented programming. Object-oriented databases are different from relational databases, which are table-oriented. Object-oriented database management systems (OODBMS) combine database capabilities with object-oriented programming language capabilities.

### Classification Based on User Numbers

    - A DBMS can be classification based on the number of users it supports. It can be a single-user database system, which supports one user at a time, or a multiuser database system, which supports multiple users concurrently.

### Classification Based on Database Distribution

    - There are four main distribution systems for database systems and these, in turn, can be used to classify the DBMS.

    Centralized systems

    - With a centralized database system, the DBMS and database are stored at a single site that is used by several other systems too.

    - In the early 1980s, many Canadian libraries used the GEAC 8000 to convert their manual card catalogues to machine-readable centralized catalogue systems. Each book catalogue had a barcode field similar to those on supermarket products.

    Distributed Database System

    - In a distributed database system, the actual database and the DBMS software are distributed from various sites that are connected by a computer network.

    Homogeneous distributed database systems

    - Homogeneous distributed database systems use the same DBMS software from multiple sites. Data exchange between these various sites can be handled easily. For example, library information systems by the same vendor, such as Geac Computer Corporation, use the same DBMS software which allows easy data exchange between the various Geac library sites.

    Heterogeneous distributed database systems

    - In a heterogeneous distributed database system, different sites might use different DBMS software, but there is additional common software to support data exchange between these sites. For example, the various library database systems use the same machine-readable cataloguing (MARC) format to support library record data exchange.

## Prerequisites for Skill

---

- Relational model
- Basic functions of database systems.
- SQL

## Related Software Engineering Area(s)

---

- Data Query Language (DQL)
- Data Controll Language (DCL)
- Data Manipulation Language (DML)
- Data Definition Language (DDL)

## Rationale for Skill

---

- Improve Data Sharing and Data Security
- Effective Data Integration
- Increase in Productivity of the End User
- Quick Decision Making

## Roles for Skill

---

- Database Development
- Data Interrogation
- Database Maintenance
- Application Development

## Work Related to Skill (Related Activities and Artifacts)

---

- Telecommunication :- It helps to keeps call records, monthly bills, maintaining balances, etc.
- Finance :- For storing information about stock, sales and purchases of financial instruments.
- Sales :- Use for storing customer, products and sales information.

## Real-World Example/Scenario of Skill (Text, Graphic, Audio, Video)

---

To say that the databases are everywhere would be an understatement. They virtually permeate our lives: Online stores, health care providers, clubs, libraries, video stores, beauty salons, travel agencies, phone companies, government agencies like FBI, INS, IRS, and NASA — they all use databases. These databases can be very different in their nature and usually have to be specifically designed to cater to some special customer needs. Here are some examples.

### Order management system database

    - A typical database for a company that sells building materials might be arranged as follows: The company must have at least one customer. Each customer in the database is assigned one or more addresses, one or more contact phones, and a default salesperson who is the liaison between the customer and the company. The company sells a variety of products. Each product has a price, a description, and some other characteristics. Orders can be placed for one or more product at a time. Each product logically forms an order line. When an order is complete it can be shipped and then invoiced. Invoice number and shipment number are populated automatically in the database and can not be changed by users. Each order has a status assigned to it: COMPLETE, SHIPPED, INVOICED, and so on. The database also contains specific shipment information (bill of lading number, number of boxes shipped, dates, and so on). Usually one shipment contains one order, but the database is designed in such a way that one order can be distributed between more than one shipment, as well as one shipment can contain more than one order. Some constraints also exist in the database. For example, some fields cannot be empty, and some other fields can contain only certain types of information.

### Health care provide database

    - A health provider company has multiple offices in many different states. Many doctors work for the company, and each doctor takes care of multiple patients. Some doctors just work in one office, and others work in different offices on different days. The database keeps information about each doctor, such as name, address, contact phones, area of specialization, and so on. Each patient can be assigned to one or more doctors. Specific patient information is also kept in the database (name, address, phones, health record number, date of birth, history of appointments, prescriptions, blood tests, diagnoses, etc.). Customers can schedule and cancel appointments and order prescription drugs either over the phone or using the company Web site. Some restrictions apply — for example, to see a specialist, the patient needs an approval from his/her primary physician; to order a prescription the patient should have at least one valid refill left, and so on.

### Scientific Database

    - A database for genome research and related research areas in molecular and cellular biology can be a good example of a scientific database. It contains gene catalogs for completely sequenced genomes and some partial genomes, genome maps and organism information, and data about sequence similarities among all known genes in all organisms in the database. It also contains information on molecular interaction networks in the cell and chemical compounds and reactions.
    This database has just one user group — all researchers have the same access to all the information. This is an example of a data warehouse.

### Nonprofit organization database

    - A database of an antique automobile club can be pretty simple. Also, such an organization would not typically have too many members, so the database is not going to be very large. You need to store members' personal information such as address, phone number, area of interest, and so on. The database might also contain the information about the autos (brand, year, color, condition, etc.). Autos are tied to their owners (members of the club). Each member can have one or more vehicles, and a vehicle can be owned by just one member.
    The database would only have a few users — possibly, the chairman of the club, an assistant, and a secretary.
    The last two examples are not business-critical databases and don't have to be implemented on expensive enterprise software. The data still have to be kept safely and should not be lost, but in case of, let's say, hardware failure it probably can wait a day or two before the database is restored from a backup. So, the use of a free database, like mySQL, PostgreSQL, or even nonrelational Posgres is appropriate. Another good choice might be MS Access, which is a part of Microsoft Office Tools; if you bought MS Office just because you want to use Word and Excel, you should be aware that you've got a free relational database as well.

## Role of Academia or Industry in Cultivating the Skill

---

- Data Management system is needed for data access within the company.
- It is needed to maintain strong relationships between data.
- It helps brand managers to search data in better manner.

## Tools Supporting the Skill

---

1. SolarWinds Database Performance Analyzer
2. Oracle RDBMS
3. IBM DB2
4. Altibase
5. Microsoft SQL Server
6. SAP Sybase ASE
7. Teradata
8. ADABAS
9. MySQL
10. FileMaker
11. Microsoft Access
12. Informix
13. SQLite
14. PostgresSQL
15. AmazonRDS
16. MongoDB
17. Redis
18. CouchDB
19. Neo4j
20. OrientDB
21. Couchbase
22. Toad
23. phpMyAdmin
24. SQL Developer
25. Seqel PRO
26. Robomongo
27. DbVisualizer
28. Hadoop HDFS
29. Cloudera
30. MariaDB
31. Informix Dynamic Server
32. 4D (4th Dimension)

## Skill Self-Assessment

---

6. Less experince with the working projects.

## References

---

1. https://www.ringlead.com
2. http://www.edubca.com
3. http://etutorials.org
