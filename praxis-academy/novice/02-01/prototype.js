let parent = {
    hair: "curly",
    eyes: "blue"
};

let children = Object.create(parent);
console.log("parent hair is " + parent.hair + " & parent eyes is " + parent.eyes);
console.log("childern hair is " + children.hair + " & children eyes is " + children.eyes + "\n");

console.log("set parent hair to straight \n");
parent.hair = "straight";

console.log("parent hair is " + parent.hair + " & parent eyes is " + parent.eyes);
console.log("childern hair is " + children.hair + " & children eyes is " + children.eyes + "\n");

console.log("set eyes children to green \n");
children.eyes = "green";

console.log("parent hair is " + parent.hair + " & parent eyes is " + parent.eyes);
console.log("childern hair is " + children.hair + " & children eyes is " + children.eyes);