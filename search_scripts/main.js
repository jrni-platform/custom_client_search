
const nominated_actors = [
    {name: "Rami Malek", first_name: "Rami", last_name: "Malek", email: "Rami@Malek.com"},
    {name: "Christian Bale", first_name: "Christian", last_name: "Bale", email: "Christian@Bale.com"},
    {name: "Bradley Cooper", first_name: "Bradley", last_name: "Cooper", email: "Bradley@Cooper.com"},
    {name: "Willem Dafoe", first_name: "Willem", last_name: "Dafoe", email: "Willem@Dafoe.com"},
    {name: "Viggo Mortensen", first_name: "Viggo", last_name: "Mortensen", email: "Viggo@Mortensen.com"},
    {name: "Olivia Colman", first_name: "Olivia", last_name: "Colman", email: "Olivia@Colman.com"},
    {name: "Yalitza Aparicio", first_name: "Yalitza", last_name: "Aparicio", email: "Yalitza@Aparicio.com"},
    {name: "Glenn Close", first_name: "Glenn", last_name: "Close", email: "Glenn@Close.com"},
    {name: "Lady Gaga", first_name: "Lady", last_name: "Gaga", email: "Lady@Gaga.com"},
    {name: "Melissa McCarthy", first_name: "Melissa", last_name: "McCarthy", email: "Melissa@McCarthy.com"}
];


exports.client_search = (data, callback) => {
    // TODO implement
    console.log("Search for a client", data)

    const search = new RegExp(data.searchTerm, "i") 

    const matched = [];
    nominated_actors.forEach( (actor) => {
        if (actor.name.match(search))
            matched.push(actor);
     });

    callback(null, {results: matched});

};


