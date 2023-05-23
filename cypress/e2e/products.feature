Feature: API validation

#Background: 
#  Given that I have a valid token

Scenario: Get all stores
  When I list all products
  Then all products must be listed
