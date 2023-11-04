-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/9i18sI
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE Users (
    "userId" int   NOT NULL,
    "firstName" varchar(255)   NOT NULL,
    "lastName" varchar(255)   NOT NULL,
    "username" varchar(64)   NOT NULL,
    "email" varchar(255)   NOT NULL,
    "password" varchar(255)   NOT NULL,
    CONSTRAINT "pk_User" PRIMARY KEY ("userId"),
    CONSTRAINT "uc_User_username" UNIQUE ("username"),
    CONSTRAINT "uc_User_email" UNIQUE ("email")
);

CREATE TABLE Listings (
    "listingId" int   NOT NULL,
    "title" varchar(255)   NOT NULL,
    "company" varchar(255)   NOT NULL,
    "level" varchar(255)   NULL,
    "hours" varchar(255)   NOT NULL,
    "minSalary" int   NOT NULL,
    "maxSalary" int   NOT NULL,
    "location" varchar(255)   NOT NULL,
    "status" varchar(50)   NOT NULL,
    "url" varchar   NOT NULL,
    "userId" int   NOT NULL,
    CONSTRAINT "pk_Listing" PRIMARY KEY ("listingId")
);

ALTER TABLE "Listing" ADD CONSTRAINT "fk_Listing_userId" FOREIGN KEY("userId")
REFERENCES "User" ("userId");

INSERT INTO Users VALUES
(1, 'Tester', 'Testing', 'tester123', 'tester123@someemail.com', 'password987');

INSERT INTO Listings VALUES
(1, 'Software Engineer', 'Tech Company', 'Junior', 'Full-Time', 100000, 150000, 'Remote', 'Applying', 'https://www.indeed.com/jobs?q=software+engineer&l=Whittier%2C+CA&from=searchOnHP&vjk=cca4409af46199a7&advn=7285430277411918', 1);