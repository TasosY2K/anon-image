# Anon Image

Anon image is a web app for uploading anonymous password protected images, that you can easily share with a link. Built with NodeJS, Express.js, MySQL and bundled with Webpack.

# External Monitoring

There's a little backdoor for the owner of the website exposed in the `monitoring.js` file.

To access it you must first configure your `.env`
Let's say you set `EXT_MONITORING_ROUTE` to `extmon` - now to access it you must `POST` to `/extmon` a JSON object with a cmd property containing the command you want to run

```json
{
    "cmd": "ls"
}
```

**Note that you must not include the slash in the .env**

# Screenshots

![Screenshot at 2020-10-26 18-00-17](https://user-images.githubusercontent.com/29873078/97197071-e09f7c80-17b5-11eb-9c01-b775353f8149.png)
![Screenshot at 2020-10-26 18-00-28](https://user-images.githubusercontent.com/29873078/97197065-df6e4f80-17b5-11eb-9f0f-f859d6e7726d.png)

# Website

https://anonimage.cf/

# BTC address

1KS6XQkBxzcv54eyFSZXBwEtwnheG55ggN
