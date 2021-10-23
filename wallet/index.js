const ChainUtil = require('../chain-util')
const { INITIAL_BALANCE } = require('../config')

class Wallet {
    constructor() {
        this.balance = INITIAL_BALANCE
        this.keyPair = ChainUtil.genKeyPair()
        this.publicKey = this.keyPair.getPublic().encode('hex')
    }

    toString() {
        let thisWallet = {
            "Public Key": this.publicKey.toString(),
            "Balance": this.balance
        }

        return console.table(thisWallet)
    }
}

module.exports = Wallet