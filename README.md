# CovidSafe tools for public health officials

Whether you are a public health official, healthcare personnel or human resource manager, you can use CovidSafe to broadcast public service announcements of interest to users with the app within a bounded geographic region.

Here is a quick [video](https://www.youtube.com/watch?v=sdu5YkUmRB8) (0:47) demo showing what this script enables.

The instructions below describe how to set up the demo so that you can submit a message through the form, which then gets uploaded to a server, and which also results in an email confirmation.

[Here](https://docs.google.com/forms/d/10kpUVfcqvBc5ZjWBTJQI8EQUHSc9mchx5vvCYw5PL6w/edit?usp=sharing) is the read-only Google Form template used for the demo:

Below are steps to recreate the demo:
1. Make a copy of the above Google Forms sheet by going [here](https://docs.google.com/forms/d/10kpUVfcqvBc5ZjWBTJQI8EQUHSc9mchx5vvCYw5PL6w/copy)
2. Navigate to the spreadsheet backing the Google Form (where all the responses are submitted to)
3. Click *Tools > Script Editor*
4. Copy in the [example script](https://github.com/covidsafe/hcp-tools/blob/master/Code.gs)
5. Modify the script as necessary:
- You can add your own API endpoint that the messages are sent to.<br/>
`var url = 'https://csapi.azurefd.net/api/Messages/AreaReport';`
- You can add an email address to receive immediate confirmations when someone has made a submission with the Google Form<br/>
`MailApp.sendEmail("covidsafe.uw@gmail.com",...`
- You can specify a map of districts, where each district corresponds to a latitude, longitude and radius in meters<br/>
`coords={
  "Atlantic":[0,0,0],
  "Ballard":[0,0,0],...`
You may want to change these values to your current physical coordinates to see the notification on the CovidSafe smartphone app.
6. In the script editor click *Edit > Current project triggers*
7. Add a trigger
- Select the 'work' function to execute
- Event source: from spreadsheet
- Event type: On form submit
8. Try submitting information through the form. Check your email for confirmation and check your project triggers to see they have been executed on form submission.
9. Clone the CovidSafe Android [repository](https://github.com/covidsafe/App-Android), make sure to set DEBUG to true and pull down on the home page to refresh. You sould now see your broadcast messages. You will only see notifications from the server that you have not already seen on your smartphone.
