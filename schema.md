# Database Schema
## `users`
|column name|data type|details|
|-|-|-|
|`id`|integer|not null, primary key|
|`username`|string|not null|
|`email`|string|not null|
|`password_digest`|string|not null|
|`session_token`|string|not null|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|
* index on `username, unique: true`
* index on `email, unique: true`
* index on `session token, unique: true`

## `businesses`
|column name|data type|details|
|-|-|-|
|`id`|integer|not null, primary key|
|`category_id`|integer|not null, foreign key|
|`name`|string|not null|
|`owner_id`|integer|not null, foreign key|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|
* index on `owner_id`
* index on `category_id`

## `reviews`
|column name|data type|details|
|-|-|-|
|`id`|integer|not null, primary key|
|`author_id`|integer|not null, foreign key|
|`body`|text|not null|
|`business_id`|integer|not null, foreign key|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|
* index on `author_id`
* index on `business_id`

## `categories`
|column name|data type|details|
|-|-|-|
|`id`|integer|not null, primary key|
|`title`|string|not null|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

