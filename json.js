var leader0 = {
    name: "Василий Иванович",
    age: 35
};

console.log(JSON.stringify(leader0,{},4));



var leader = {
    name: "Василий Иванович"
};

var soldier = {
    name: "Петька"
};

// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

console.log(JSON.stringify(team));