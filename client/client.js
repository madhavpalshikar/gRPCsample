var greets = require('../server/protos/greet_pb');
var service = require('../server/protos/greet_grpc_pb');

var grpc = require("grpc");

function main(){
    console.log('Client ####');
    var client = new service.GreetServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    )

    //do your stuff
    console.log(client);

    var request = new greets.GreetRequest()
    var greeting = new greets.Greeting()
    greeting.setFirstName("Madhav")
    greeting.setLastName("Palshikar")

    request.setGreeting(greeting)

    client.greet(request, (error, response) => {
        if(!error){
            console.log("Greeting Response:", response.getResult());
        }
        else{
            console.error(error)
        }
    })
}

main()