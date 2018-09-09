# Try GraphQL with Apollo Client

GraphQL is taking the web development world by storm, and for good reason - it's an awesome way to handle data in your applications and sites, and offers the first real modern alternative to REST. It is also pretty intimidating - queries, mutations, resolvers, servers...where is a developer to start?

Apollo is a divsion of the Meteor Development Group that offers a suite of tools that let developers of all stripes hit the ground running with GraphQL today. In this guide we'll take a look at how you can utilize Apollo Client to start using GraphQL in your existing applications today, without the need for any fancy GraphQL servers or APIs. Specifically, we'll leverage the apollo-link-rest package to connect front-end code to an existing REST endpoint, so you can get aquainted with GraphQL queries and mutations without needing any buy-in or rewrites from your backend.

### What is GraphQL?

A brief introduction: GraphQL is a data query specification developed by Facebook that offers a new paradigm for writing APIs that serve and receive data to and from applications. It features a strong type system and allows for specific schemas that allow for easy, predictable behavior. GraphQL's killer feature is its ability to request highly-specific data - your client side can ask for exactly the data it needs, no more, no less. No more grabbing an enormous "user" object when you just need to show a username!

GraphQL syntax is straightforward and should look pretty familiar - it's kind of like JSON:

{
recipe {
name
category
description
}
}

### What is Apollo Client?

So, GraphQL is awesome, but how do you actually use it?
