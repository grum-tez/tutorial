sudo apt-get update -y \
&& sudo apt-get install -y software-properties-common gnupg \
&& sudo add-apt-repository -y 'deb http://ppa.launchpad.net/serokell/tezos/ubuntu bionic main' \
&& sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 37B8819B7D0D183812DCA9A8CE5A4D8933AE7CBB \
&& sudo apt-get update -y \
&& sudo apt-get install -y tezos-client \
&& yarn global add chokidar-cli \
&& yarn global add @completium/completium-cli \
&& yarn global add ts-node \
&& yarn install \
&& completium-cli init \
&& cd blockchain \
&& completium-cli mockup init \
&& sudo echo 'alias cc='\''completium-cli'\''' >> ~/.bashrc
