// SPDX-License-Identifier: MIT
pragma solidity >= 0.7.0;

import "erc721a/contracts/ERC721A.sol";

contract WildCompanion is ERC721A {
    address public owner = msg.sender;

    uint256 public maxSupply = 10000;//Only this many can ever exist
    uint256 public maxMints = 1000;//An address can only ever mint this many nfts

    // Base uri for the nfts metadataurl
    string baseURI = "https://gateway.pinata.cloud/ipfs/QmTfBY7iFCa46VYPUeP66QxBfQLEDbrCfGEmHDL3To62PC/";

    // Prompt description
    string public prompt = "WildCompanion";
    
    constructor() ERC721A("Anurag", "ANU"){}

    // Modifier that only allows the owner to execute a function
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action!");
        _;
    }

    // Function to mint NFT which only owner can perform
    function Batchmint(address _recipient, uint _mintAmount) external payable onlyOwner {
        require(_mintAmount + _numberMinted((_recipient)) <= maxMints,"Exceeded the limit for this user");
        require(totalSupply() + _mintAmount <= maxSupply, "Maximum supply exceeded! No more NFTS can be minted");
        _mint(_recipient, _mintAmount);
    }
    
    // Override the baseURI function to return the base URI for the NFTs metadata
    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    } 
 }