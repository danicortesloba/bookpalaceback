export const makeBookRepository = ({ dbClient }: { dbClient: any }) => {
  return {
    getAll: async () => {
      const result = await dbClient.queryObject("SELECT * FROM books");
      return result.rows;
    },
  };
};
