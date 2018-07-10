<html>
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>贝兼兼职，最懂你的兼职平台</title>
        <link rel="shortcut icon" href="images/favicon.ico" />
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body {
                margin:0 auto;
            }
        </style>
    </head>
    <body>
        <div id="app">
        <router-view></router-view>
        </div>
    </body>
    <script src="{{ mix('/js/app.js') }}"></script>
    <!-- <link rel="stylesheet" href="css/main.css"> -->
</html>
