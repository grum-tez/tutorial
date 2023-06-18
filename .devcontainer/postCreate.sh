sudo apt-get update -y \
&& sudo apt-get install -y software-properties-common gnupg \
&& sudo wget https://github.com/serokell/tezos-packaging/releases/download/v17.1-1/octez-client-arm64 \
&& sudo chmod +x octez-client-arm64 \
&& sudo mv octez-client-arm64 /usr/local/bin/octez-client \
&& sudo wget https://github.com/serokell/tezos-packaging/releases/download/v17.1-1/octez-node-arm64 \
&& sudo chmod +x octez-node-arm64 \
&& sudo mv octez-node-arm64 /usr/local/bin/octez-node