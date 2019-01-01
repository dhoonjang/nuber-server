import { Greeting } from "src/types/graph";

const resolvers = {
    Query: {
        sayHello: (): Greeting => {
            return {
                error: false,
                text: 'I love Jiwon'
            }
        }
    }
};

export default resolvers;