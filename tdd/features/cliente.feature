Feature: Clients
  Scenario: "List of clients"
    Given I'm have "10" clients in my database
    When I acess the home webpage
    Then see the list of "10" items
