interface Reportable {
    summary() : string 
}

const oldCivic = {
    name : 'Civic',
    year : 2000,
    broken : false,
    summary() : string {
        return `Name : ${this.name}`
    }
}

const drink = {
    color : 'brown',
    carbonates : true,
    sugar : 40,
    summary() : string {
        return `Name : ${this.sugar}`
    }
}

const printSummary = (item : Reportable) : void =>  {
    // console.log(`Name : ${item.name}`);
    // console.log(`Year : ${item.year}`);
    // console.log(`Broken : ${item.broken}`);
    console.log(`Summary : ${item.summary()}`);
}

printSummary(oldCivic);
printSummary(drink);