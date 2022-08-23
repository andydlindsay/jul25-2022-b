# W05D02 - Database Design

### To Do
- [x] Primary Keys/Foreign Keys
- [x] Naming Conventions
- [x] Data Types
- [x] Relationship Types
- [x] Design Concepts
- [x] Entity Relationship Diagrams
- [x] Convert 2 Spreadsheets to ERD
- [x] Student Suggestion ERD(s)!

### Primary Keys, Foreign Keys
* uniquely identify a particular record
* unique within the table, cannot be null
* can be any data type
* PK are always `id`
* FK are going to be table name singular plus _id (`user_id`, `post_id`)

### Naming Conventions
* table names are always plural
* snake_case for all table and field names

### Data Types
* every field needs a data type declared
* db will set aside room even if the value is null

### Relationship Types
* one-to-one - one record in the 1st table is related to only one record in the 2nd table
* one-to-many - one record in the 1st table is related to one or more records in the 2nd
* many-to-many - one or more records in the 1st table are related to one or more records in the 2nd

### Design Concepts
* required - think about the initial state of the record
* default NOW(), is_active true
* don't use calculated fields
* pulling repeated values out to lookup table
* try not to delete anything, isActive false

Saskatoon
S'toon
Toontown
Sasktoon

### Entity Relationship Diagrams
* describe the relationships between all of the tables
* white board, low fidelity, pen and paper







