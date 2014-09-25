beaver
======
A flexible log viewer, built mainly for Demandware.


Setup & Installation
--------------------

#### Download and Install VirtualBox
https://www.virtualbox.org/wiki/Downloads

#### Download and Install Vagrant
The provided Vagrantfile is made for Vagrant >= 1.6.3
http://www.vagrantup.com/downloads.html

#### Clone this repo's files
```
cd C:\WhereverYouWantIt
git clone git://github.com/besublime/beaver.git meteor
```

#### Start the VM and run the setup script
```
cd C:\WhereverYouPutIt
vagrant up (this will take some time...)
vagrant ssh
```

Then from the Vagrant SSH prompt:
```
cd /vagrant
. ./beaversetup.sh
meteor run
```

The app should now be running and viewable from your Windows host box at http://localhost:3000/

`ctrl + c` should exit the meteor app and `exit` will drop you back at the Windows prompt.

Important Notes
---------------
- git operations *MUST be performed within the VM*
- before making any commits, be sure to set your git credentials:
```
git config --global user.name "Your Name"
git config --global user.email you@example.com
```


---
That's it!

More to come, at 11...