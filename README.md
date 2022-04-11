# Deepgram-Hackathon

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kbz01853pfdjez432tu7.png)

Actually I am new to deepgram. So had to educate my self on how deepgram works and make sure that I have understood all the concepts.😎🚩

Before get started with sending the request to deepgram we need to capture our voice and in order to do that we need to make use of the media capture and streams api.🎧

This is a simple web application that we can create using voice. 

You guys also can run this web app on your machine too.❤️

First you have to clone this project in your pc and then replace deepgram api key with your newly created one which is in the `script.js` file.👽

Then navigate to the project folder. Install all the dependancies by running `npm install`🌱

After the dependancies have installed, you can run the project with `npm run dev` to obtain your local IP address.🌱🐥

As the Media Capture and Streams API requres a secure HTTPS connection to interact with your microphone, you will need to install  SSL certificates for the project.

Generate the certificates by running: `mkcert YOUR_IP_HERE localhost`

We can provide more than one IP address.

Once those have been generated, want to make sure they are placed in the root of the project.

Navigate to the `/bundler/webpack.dev.js` file, and replace `YOUR_SSL_CERT_KEY` and `YOUR_SSL_CERT` with a path to the certificate and key file generated in the previous step.

Make sure all files have been saved and run `npm run dev `again. 

Allow the browser to use your microphone.

Say something! Your text should be visible on the screen! 

Now it's your time to experiment! 🚀
