Feature: Google Search

    As a user, I want to search an item using in the Google website

Scenario: Searching an item from Google's homepage search box
    Given I am at "http://www.google.com"
    When I searched for "Facebook"
    Then Top search result is Facebook's website
