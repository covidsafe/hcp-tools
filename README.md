# CovidSafe tools for healthcare professionals

Whether you are a public health official, healthcare personnel or human resource manager, you can use CovidSafe to broadcast public service announcements of interest to users with the app within a bounded geographic region.

Here is a quick [video](https://www.youtube.com/watch?v=mweXe470Mrs) (0:40) demo showing what this script enables.

[Here](https://docs.google.com/forms/d/10kpUVfcqvBc5ZjWBTJQI8EQUHSc9mchx5vvCYw5PL6w/edit?usp=sharing
) is the read-only Google Form template used for the demo:

Below are steps to recreate the demo:
1. Make a copy of the Google Forms template
2. Navigate to the spreadsheet backing the Google Form (where all the responses are submitted to)
3. Click *Tools > Script Editor*
4. Copy in the [example script] (https://github.com/covidsafe/hcp-tools/blob/master/Code.gs)
5. Modify the script as necessary:
- You can add your own API endpoint that the messages are sent to.
- You can add an email address to receive immediate confirmations when someone has made a submission with the Google Form
6. In the script editor click *Edit > Current project triggers*
7. Add a trigger
- Select the 'work' function to execute
- Event source: from spreadsheet
- Event type: On form submit
8. Done
