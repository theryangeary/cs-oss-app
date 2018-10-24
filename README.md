# Where Top Domains Live
## An Angular app demonstrating where on Earth the top ~500 domains from [Probably Whitelist of the Top 1 Million Sites Resolved by Cisco Umbrella](https://s3-us-west-1.amazonaws.com/umbrella-static/index.html)
I decided to build this app because I think that it's interesting to note the patterns in hosting location. Most of the top sites are hosted in the US, Europe, and China, with a few others scattered between. The Netherlands is particular popular as far as European countries go. Filtering for just domains that include 'google' shows that all google domains (in Cisco's top 500) are hosted at two locations in the West/Midwest, even google.fr, google.ru, google.de, etc.
## Installation
The app is run completely from a docker image, so you'll first need to install docker following the guide for your operating system [here](https://docs.docker.com/install/#reporting-security-issues).

Once that's done you can check that docker is installed correctly by running
```$ docker run hello-world```
You may need to use **sudo** when running docker commands throughout this guide, depending on your environment.

If docker runs hello-world then you're ready to go. Let's get started. Clone this repository:
```$ git clone https://github.com/theryangeary/cs-oss-app```

Then change into that directory:
```$ cd cs-oss-app```

Now you need to build your docker image, like so:
```$ docker build -t theryangeary/cs-oss-app:0.1.0 .**
**Don't forget the "." at the end!**
Grab some coffee, this will take a minute or two.

You can check that it succeeded by running
```$ docker images```
and it should output something like:
```
$ docker images
REPOSITORY                TAG                 IMAGE ID            CREATED             SIZE
theryangeary/cs-oss-app   0.1.0               d2b0eea449aa        About an hour ago   1.28GB
```
Once it completes, you are all ready to run this app. Just do:
```$ docker run -it -p 3000:3000 theryangeary/cs-oss-app:0.1.0```
And you should be able to access it by opening your browser and navigating to [localhost:3000](http://localhost:3000)
