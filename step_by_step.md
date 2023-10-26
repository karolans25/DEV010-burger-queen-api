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
        
    * Remove the non-debian packages to avoid errors
        `sudo apt list '?narrow(?installed, ?not(?origin(Debian)))'`
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


### Install [Docker Desktop](https://docs.docker.com/desktop/install/linux-install/)




#### Install AppIndicator and KStatusNotifierItem 

For a Gnome Desktop environment, you must also install AppIndicator and KStatusNotifierItem [Gnome extensions](https://extensions.gnome.org/extension/615/appindicator-support/)

