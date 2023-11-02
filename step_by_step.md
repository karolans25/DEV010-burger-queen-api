# Burguer Queen API

## Docker

#### Prerequisites

#####  Upgrade my OS version to Debian 12 - Bookworn

I need to update my OS because I'm using Debian 10 (buster) so I need to full upgrade to 11 (bullseye) and then to 12 (bookworn) [Taked from cibercity](https://www.cyberciti.biz/faq/update-upgrade-debian-11-to-debian-12-bookworm/).

1. Backup the system
        `lsb_release -a`
        `uname -mrs`
        `cat /etc/debian_version`

2. Update existing packages and reboot the Debian 10 system.
        
    * Remove the non-debian packages to avoid errors (Check the documentation in the source of this info in cibercity)
        `sudo apt list '?narrow(?installed, ?not(?origin(Debian)))'`

        `sudo apt-forktracer | sort`

        `sudo apt-mark showhold | more`
        OR
        `sudo dpkg --get-selections | grep 'hold$' | more`
    Then you must delete or remove the host status for all listed packages one by one with the help of the following command:
        `sudo apt-mark unhold package_name`
        OR
        `echo 'package_name install' | sudo dpkg --set-selections`
        
    * 
        `$ sudo apt update`
        `$ sudo shutdown -r now`

3. Edit the file `/etc/apt/sources.list` using a text editor and replace each instance of `buster` with `bullseye`. Next find the update line, replace keyword `buster-updates` with `bullseye-updates` (same steps for Debian 12 with `bookworm-updates`). Finally, search the security line, replace keyword `buster-security` for `bullseye-security` (same steps for Debian 12 with `bookworm-security`).

4. Update the packages index on Debian Linux, run:
        `sudo apt update`

5. Prepare for the operating system minimal system upgrade, run:
        `sudo apt upgrade --without-new-pkgs`

6. Finally, update Debian 10 to Debian 11 Bullseye by running:
        `sudo apt full-upgrade`

7. Reboot the Linux system so that you can boot into Debian 11 Bullseye

8. Verify that everything is working correctly.


### Install [Docker Desktop](https://docs.docker.com/get-docker/)

#### Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

#### Add the repository to Apt sources:
`echo \
"deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
"$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`
        
`sudo apt-get update`

![Result after run sudo docker run hello-world](image.png)

You have now successfully installed and started Docker Engine.!!!

##### Optionalley: If you want to run docker commands as non-root user

[docker: linux postinstall](https://docs.docker.com/engine/install/linux-postinstall/)

##### Check the installed version

`docker compose version`

`docker --version`

`docker version`

#### Install AppIndicator and KStatusNotifierItem 

For a Gnome Desktop environment, you must also install AppIndicator and KStatusNotifierItem [Gnome extensions](https://extensions.gnome.org/extension/615/appindicator-support/)


### Image of MongoDB

In this project we wil use a [mongoDB image](https://hub.docker.com/_/mongo)