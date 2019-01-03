import { SayHelloQueryArgs, SayHelloResponse } from "src/types/graph";

const resolvers = {
    Query: {
        sayHello: (_, args: SayHelloQueryArgs): SayHelloResponse => {
            if(args.name === 'jiwon'){
                return {
                    error: false,
                    text: `Hello ${args.name}. I love you`
                }
            }
            return {
                error: false,
                text: `Hello ${args.name}`
            }
        }
    }
};

export default resolvers;