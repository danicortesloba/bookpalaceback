export const makeBookService = ({
  bookRepository,
}: {
  bookRepository: any;
}) => {
  return {
    getAllBooks: async () => {
      return await bookRepository.getAll();
    },
  };
};
