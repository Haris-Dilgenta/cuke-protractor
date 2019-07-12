Feature: Application login

    As a facebook user
    I want to login to the Application
    So that I can access my account succesfully

    Scenario Outline: User Login to facebook app
        Given Iam on the facebook homepage
        When I login with a "<username>" and "<password>"
        Then I should "<userStatus>" access to my homepage
Examples:
| username | password | userStatus |
| valid username  | valid password | should have  |
| invalid  username | invalid password | should not have |
| invalid  username | valid password | should not have |
| invalid  username | invalid password | should not have |