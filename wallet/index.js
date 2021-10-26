const ChainUtil = require('../chain-util')
const Transaction = require('./transaction')
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

    sign(dataHash) {
        return this.keyPair.sign(dataHash)
    }

    createTransaction(recipient, amount, transactionPool) {
        if(amount > this.balance) {
            console.log(`Amount: ${amount} exceeds current balance: ${this.balance}`)
            return
        }

        let transaction = transactionPool.existingTransaction(this.publicKey)

        if(transaction) {
            transaction.update(this, recipient, amount)
        }

        else {
            transaction = Transaction.newTransaction(this, recipient, amount)
            transactionPool.updateOrAddTransaction(transaction)
        }

        return transaction
    }

    static blockchainWallet() {
        const blockchainWallet = new this();
        blockchainWallet.address = 'blockchain-wallet'
        return blockchainWallet
    }
}

module.exports = Wallet