import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import { GetMyProfileResponse } from "src/types/graph";

const resolvers: Resolvers = {
  Query: {
    GetMyProfile: privateResolver( 
      async (_, __, { req }): Promise<GetMyProfileResponse> => {
        const { user } = req;
        return {
          ok: true,
          error: null,
          user
        };
      }
    )
  }
};

export default resolvers;