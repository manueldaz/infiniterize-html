var a = document.getElementById("connect");

    async function loadweb3() {
        if (window.ethereum) {
            window.web3 = new web3(window.ethereum);
            window.ethereum.enable();
        }
    }

    async function loadcontract() {
        var abi = [];
        var contractAddress = "0x05d29be85f91975fd786e3fd6587db7f78a44e67"
        return await new window.web3.eth.contract(abi,contractAddress);
    }