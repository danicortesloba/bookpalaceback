export const makeBookController = ({ bookService }: { bookService: any }) => {
  return {
    getAllBooks: async (ctx: any) => {
      const books = await bookService.getAllBooks();
      ctx.response.body = books;
    },
  };
};
