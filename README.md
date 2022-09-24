# cypress-testing
## A Cypress testing task for job interview
__To run the tests: *npm run test* or *npx cypress open*__
### Notes on this task
There are a few points about the task that I'd like to point out here:
- __Timing between actions__\
  Sometimes it seems that the DOM isn't updated fast enough to allow certain actions to take place. For this reason, I added a few wait commands between certain actions which seemed to solve the problem. I am not sure if this is the optimal way of handling these cases, but I will look into this more going forward.
- __Inconsistencies on each test run__\
  Sometimes the browser behaved differently between each test run, mostly with certain elements not visibly rendering. This frequently occurred for the 'help with size' button & popup. Often, the button did not render and thus the tests sometimes failed. This only happens in the cypress browser environment though, and not on the actual site when I try it myself. Not sure if this is to be expected and dealt with accordingly in the test. 
- __Issues with form popup__\
  Sometimes there were popups that appeared when filling in the email address which caused the tests to fail. This never happened for me when trying on the actual site myself, but commonly occurred in the testing environment. It was reCAPTCHA like popup that asks to click on images matching the description provided (i.e. all images containing a bus).

### Further Notes:
  I tried to use a few different ways of targeting elements on the page, mostly with 'contains' and 'get'. I think the get method with css selectors is the easiest way, however maybe using visual test on the screen with 'contains' is closer to how a user would target the elements themselves. 

  I think some issues may be caused by the cross origin issue, but I am not 100% sure of this.

  I enjoyed this task and learning to use the basics of Cypress. I think there is a lot I need to learn about Cypress, and will look forward to doing it in the future. Thanks for this opportunity. 
