# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The foreign key in this example would be located in the Sightings model.  The foreign key is animal_id, because it is an attribute that refers to to the specific animal in our model Animal that it belongs to.  When dealing with foreign keys, we know that these are attributes that references a candidate key

  Researched answer: A perfect example for this explanation is if you have a table for a Team would likely have member_name in it.  That member_name would likely have many People in it.  People need names, and those People in the People model are team members.  So the key is member_name because it is likely referring  to the person_name key in the model.



2. Which RESTful routes must always be passed params? Why?

  Your answer: RESTful routes that must always be passed params are GET and DELETE.  In order for either HTTP verb to fully function, we must pass params into it in order to specifically target the method we wish to target in order to complete the action we wish to complete.

  Researched answer: Specifically, params refers to the parameters being passed to the controller via a GET or POST request.



3. Name three rails generator commands. What is created by each?

  Your answer: 'rails generate model arbitrary_name' creates us a model within Rails that we can use to hold our data.  'rails generate controller whatever_name' creates us a controller that holds our HTTP verbs, actions, methods etc. 'rails generate migration detailed_specific_name' creates a migration file that we can use to change data elements and columns, key names, etc. within our models.

  Researched answer: Migration files allow us to influence and access models without having to worry too much on breaking our data structure or throwing off the flow.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /users         with this GET method we are trying to render a list of users, or rather, users accounts and their information

method="GET"    /users/1    this GET method, or HTTP verb, targets a specific user by it's ID, here we are calling to render the first user account within our list of users.

method="GET"    /users/new    this GET is calling the 'new' method in our controller that carries all the logic needed to succesfully create a new account.

method="GET"    /users/edit/1    this GET action will allow us to access user with ID 1, and uses the 'edit' method within our controller that holds all the logic needed to edit User with ID 1

method="POST"   /users/       POST is a HTTP verb that renders users into our views to be able to see a list of all users

method="PUT"    /users/1      PUT will be like our "submit" request to make sure all changes done to user 1 stay.

method="DELETE" /users/1      DELETE is an HTTP verb that deletes specific data and it's columns so that user 1's account and all it's information is erased.



5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started.

  In my terminal I will enter do the following:

  terminal - rails new app_name -d postgreSQL -T (use rails in terminal to create new app in its own directory, take out the database that's used default with Rails, and use postgreSQL instead, and take our its testing specs so we can install rspec instead)

  terminal - cd into directory, rails db:create to create the database for our new app

  terminal - rails server to confirm we can succesfully render everything right off the bat to confirm system is work properly. (some good practice to have a baseline to refer back to in case our app stops working)

  terminal - rails generate model Name key:datatype (create our model that we'd like to use to render to our views)

  terminal - rails generate controller main - to generate a controller to hold our methods

  we can then create a file in our views folder and call it index.html.erb which is a hybrid between html and ruby, which allows us to use both which are needed to render to our views.

  in controller - we can create a method to render an element to our html file in views.  this can be written out as -> def display render html: "this is our string we want to display" end

  in routes file- we can then create a route to display our elements from the controller up to the index.html.erb file we create to connect the back end to the front end of our app.

  in routes we can use the HTTP verbs to create a path within between our files in the back end so it can succesfully render to the front end.

  routes can be written as -> Rails.application.routes.draw do get '/display' => 'main#display' end

  this will call on the "display" method that we created in our "main" controller and it should render from our model whatever we want to be displayed on our views.
