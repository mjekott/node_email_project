# integrating to 3rd party systems

## Requirements

1. NodeJs
2. Email service provider e.g Mailtrap.io, Gmail,Sendgrid,Courier,Amazon SES,Mailgun
3. Postman

4. Set up and Install the dependencies

- `npm init -y`
- `npm install nodemon express dotenv body-parser`
- `npm install nodemon --save-dev`(optional dev dependency)
- Update the start commands in `package.json` (optional)

2. Create a server
3. Create a psot request for sending mail
4. Setup nodemailer
5. Create Email template
6. Test the email sending on Postman. verify result on mailtrap.io
7. Contact us form on the frontend.vanilla js to send reequest and recieve resposne
