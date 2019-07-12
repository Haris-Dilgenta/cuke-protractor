const {Given, When, Then}=require("cucumber")


         Given(/^Iam on the facebook homepage$/, function () {
           console.log("on FB page")
         });

         When(/^I login with a "([^"]*)" and "([^"]*)"$/, function (username,password) {
           
           console.log("Login with  "+ username+" and "+password)
         });
        

         Then(/^I should "([^"]*)" access to my homepage$/, function (permission) {
               
           console.log(permission +" access to homepage")
         });
       