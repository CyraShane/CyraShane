const NFTs = []

function mintNFT (_name, _age, _location, _gender) {
    const NFT = {
        "name": _name,
        "age": _age,
        "location": _location,
        "gender": _gender
    }
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

function listNFTs () {
    for(let i = 0; i < NFTs.length; i++){
        console.log("\nID: \t\t" + (i+1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("Age: \t\t" + NFTs[i].age);
        console.log("Location: \t" + NFTs[i].location);
        console.log("Gender: \t" + NFTs[i].gender);
    }
}

function getTotalSupply() {
    console.log("\n" + NFTs.length);
}

mintNFT("Anna", "20", "Manila", "Female");
mintNFT("Belle", "18", "Palawan", "Prefer not to say");
mintNFT("Cathy", "19", "Batangas", "Female");
mintNFT("Dorothy", "21", "Ilocos", "Male");

listNFTs();
getTotalSupply();