// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract ColorCatcher {

    uint256 public score;
    address public owner;

    event ScoreUpdated(address indexed player, uint256 newScore);

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
        score = 0;
    }

    // Function to update the score
    function updateScore(uint256 newScore) public {
        score = newScore;
        emit ScoreUpdated(msg.sender, newScore);
    }

    // Function to get the current score
    function getScore() public view returns (uint256) {
        return score;
    }

    // Function to reset the score (only by owner)
    function resetScore() public onlyOwner {
        score = 0;
        emit ScoreUpdated(owner, 0);
    }
}
