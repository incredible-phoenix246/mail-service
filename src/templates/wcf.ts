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
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 20px;
            text-align: center;
        }

        .email-container {
            background-color: white;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333;
        }

        p {
            font-size: 18px;
            color: #666;
        }

        .otp-code {
            font-size: 24px;
            font-weight: bold;
            color: #000;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <h1>Welcome, {{name}}!</h1>
        <p>Thank you for signing up! To verify your account, please use the following OTP code:</p>
        <p class="otp-code">{{otp}}</p>
        <p>If you did not sign up, please ignore this email.</p>
    </div>
</body>

</html>
`