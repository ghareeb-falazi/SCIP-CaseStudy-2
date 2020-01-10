FROM trufflesuite/ganache-cli as ganache
RUN mkdir /truffle
WORKDIR /truffle
RUN npm install -g truffle@5.0.9
COPY ./Seafood /smart-contracts/Seafood
WORKDIR /smart-contracts/Seafood