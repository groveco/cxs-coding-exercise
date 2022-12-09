# cxs-coding-challenge

## Using this repo
This repo contains the source code for a very simple single page Vue app. To work on the coding challenge, please create a new, private repo named `cxs-coding-challenge` in Github. Convert that new repo into a copy of this repo using the following:

```
git clone git@github.com:groveco/cxs-coding-challenge.git
git remote add new-origin git@github.com:<your username>/cxs-coding-challenge.git
git push new-origin
git remote rm origin
git remote rename new-origin origin
```

We will ask you to create a new branch in your repo for development.

### Other commands

**Install package**
```
npm install
```

**Compile for development**
```
npm run serve
```
Note: The dev server *should* hot-reload but may not do so reliably.

**Compile and minify for production**
```
npm run build
```
You won't need this for the exercise, but if you like you can build out of curiosity.

**Lint and fix files**
```
npm run lint
```

**Customize configuration**

See [Configuration Reference](https://cli.vuejs.org/config/).
You will not need this for the exercise, but you are welcome to modify the configuration if you desire.

## The exercise
Note the file [`src/components/WaitlistButton.vue`](https://github.com/groveco/cxs-coding-challenge/blob/main/src/components/WaitlistButton.vue) which features a stub for a “waitlist” button. The purpose of this button is to allow the user to request a notification for when a product is back in stock.

For this exercise, we want you to update this button component and its parent component [`src/components/ProductView.vue`](https://github.com/groveco/cxs-coding-challenge/blob/main/src/components/ProductView.vue) such that they reflect two different states:

1. (State 1) If the customer is not already subscribed to the displayed product’s availability:
    1. Display  “Notify Me” as the button text
    2. Make the button clickable.
2. (State 2) If the customer is already subscribed to the displayed product:
    1. Display “We’ll Let You Know” as the button text
    2. Disable the button.
    3. Display an additional message below the button that elaborates on the “We’ll Let You Know” message: “You’ll be emailed when this item is back in stock.”

Note that we want to take advantage of Vue’s reactive capabilities. Meaning that, if the customer’s waitlist state changes during the page view, the product view and the button reactively update to reflect that change in state from “State 1” to “State 2”.

## Scope of work
For the purposes of this exercise, aim first to outline the logic with pseudo-code. Then flesh out what you can by the deadline. Don’t worry about adding unit tests or styling the component unless you have spare time. You can make the following assumptions:

-  The product being displayed is out of stock
- The customer is eligible for notifications (i.e. they’ve already provided us their email).

Run `npm run serve`  to see how your component is functioning with your changes.

## Implementation details
There are a few major tasks to handle in this exercise:

1. Identify the waitlist state by communicating with our backend. You can use the methods stubbed out at [`src/services/waitlist.js`](https://github.com/groveco/cxs-coding-challenge/blob/main/src/services/waitlist.js) to accomplish this.
    1. You will want to parse the values resolved from `(await mockFetch(….)).json()` as needed to determine the products that the customer has currently “waitlisted”. You can see the template data for the resolved values at [`/public/mock-*.json`](https://github.com/groveco/cxs-coding-challenge/blob/main/public/).
        
2. Keep track of the waitlist state with client side copies of the backend values.
    1. There are different options for tracking and managing application state in the client. At Grove, we rely on Vue composables to organize application state. Therefore for this example we want you to write a composable [`useWaitlist()`](https://github.com/groveco/cxs-coding-challenge/blob/main/src/composables/useWaitlist.js) that returns values and methods that the waitlist button will depend upon. Namely, the waitlist button component will rely on `useWaitlist()` return values to determine and update the waitlisted products. It is up to you to design the exact interface for the `useWaitlist()` composition.
        
3. Update the `WaitlistButton` component to use your `useWaitlist()` implementation and reflect the two states described above.

## Submission
We ask that you spend about one day on this take-home exercise before submitting to us by the end of your work day on Tuesday 12/13. When done, create a pull request by pushing up the branch with your work to Github. Provide the following in the description of the pull request:


- A paragraph or two about how you intend for your solution to work
- Any major considerations you had in mind when updating WaitlistButton and the useWaitlist() composable
- Any assumptions or caveats you’d like to share

Make sure that the repo’s visibility has been updated to include the Grove organization, the Github users `rlkenion` and `rona-chong`. Then send an email to rachel.kenion-hanrath@grove.co CC rchong@grove.co with the link to the pull request. Thank you for your submission!

