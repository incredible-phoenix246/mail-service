export const welcomeMessage = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Email</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f0f2f5;
            margin: 0;
            padding: 0;
        }

        .email-container {
            background-color: white;
            max-width: 600px;
            margin: 40px auto;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
            border-top: 6px solid #4CAF50;
        }

        h1 {
            font-size: 28px;
            color: #333;
            margin-bottom: 20px;
        }

        p {
            font-size: 16px;
            color: #555;
            line-height: 1.6;
        }

        .otp-code {
            font-size: 28px;
            font-weight: bold;
            color: #4CAF50;
            background-color: #f9f9f9;
            padding: 10px 20px;
            border-radius: 8px;
            display: inline-block;
            margin: 20px 0;
            letter-spacing: 3px;
        }

        .footer {
            margin-top: 30px;
            font-size: 14px;
            color: #888;
        }

        .footer a {
            color: #4CAF50;
            text-decoration: none;
        }

        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <h1>Fortune greetings, {{name}}!</h1>
        <p>Thank you for signing up on the Winners Campus Fellowship Global Reporting Portal.</p>
        <p>Please use the following OTP code to verify your email:</p>
        <p class="otp-code">{{otp}}</p>
        <p>If you did not sign up, kindly disregard this email.</p>
        <p class="footer">For any issues or assistance, feel free to reach out to us at 
        <a href="mailto:global.wcf@gmail.com">global.wcf@gmail.com</a>.</p>
    </div>
</body>

</html>
`
