# Micro-FrontEnds

MicroFrontends contain the UI / Frontend code necessary to display information of the microservice.

**How is this different from traditional frontends?**
Traditional frontends can be referred to as a monolothic app. The frontend contains all the UI code necessary to display information from different services), In one example of microfrontends, Each microservice is responsible for its own UI. (ie. An Admin Tool would no longer contain the UI for that microservice, but is responsible for importing the UI from an external source when called upon to do so).

**Is this different from iframe tag?**
An iframe tag allows an html page to be loaded inside another html page, essentially the user is seeing two html pages nested.
Microfrontends do not need their own html page, in this case it just serves up javascript to the page requesting the micrfrontend code, as long as the microfrontend knows what to target when rendering the UI, and the framework (ie react) will transpile the necessary html to the DOM element targeted.

In this example microfrontends will be utilized / displayed to the user in two different contexts:

- admin-monolith tool (Monolithic App - App shell with microfrontend served up as a child component)
- admin-micro-services (MicroFrontEnd Manager - Using the framework single SPA - consumes other microfrontends to display a unified UI)

The frontend code is stored within the respective microservice repo, in the directory **/frontend**.

In this microfrontend template example, this template has configs so that it can be consumed either as a child of a container App, or be loaded alongside (sibling) other microfrontends showing a unified App template, in the use case where a microservice will need a UI.
