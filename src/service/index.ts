import { bookRepository } from "../repository/index.ts";
import { makeBookService } from "./bookService.ts";

export const bookService = makeBookService({ bookRepository });
