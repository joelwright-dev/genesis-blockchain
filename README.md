# Genesis Blockchain

The Genesis blockchain is the future host of my very own Genesis coin (GEN). This is more of a project than anything but given enough development could be deployed.

## Installation

Install [node.js](https://nodejs.org/en/)

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm i nodemon --save-dev
npm i jest --save-dev
npm i crypto-js --save
npm i express --save
```

## Usage

Run tests (use either)

```bash
npm run test
npm run dev-test
```

Run API (use either)

Optional variables are marked by square brackets. Remove the square brackets and replace desired port with the port you wish to run the P2P and/or HTTP server on.

```bash
npm start
npm run dev [P2P_PORT=desired port] [HTTP_PORT=desired port]
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
