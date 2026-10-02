// Catálogo Central da Biblioteca Didática ENEM - Destino 1000
import { LIVRO_MATEMATICA_FUNCOES } from './matematica-funcoes';
import { LIVRO_MATEMATICA_FUNDAMENTOS } from './matematica-fundamentos';
import { LIVRO_NATUREZA_ELETRODINAMICA } from './natureza-eletrodinamica';
import { LIVRO_NATUREZA_ECOLOGIA } from './natureza-ecologia';
import { LIVRO_HUMANAS_BRASIL_CONTEMPORANEO } from './humanas-brasil-contemporaneo';
import { BOOK_LINGUAGENS_GENEROS_ARGUMENTACAO } from './linguagens-generos-argumentacao';
import { BOOK_REDACAO_MANUAL_NOTA_1000 } from './redacao-manual-nota-1000';

export const ALL_ENEM_BOOKS = [
  LIVRO_MATEMATICA_FUNCOES,
  LIVRO_MATEMATICA_FUNDAMENTOS,
  LIVRO_NATUREZA_ELETRODINAMICA,
  LIVRO_NATUREZA_ECOLOGIA,
  LIVRO_HUMANAS_BRASIL_CONTEMPORANEO,
  BOOK_LINGUAGENS_GENEROS_ARGUMENTACAO,
  BOOK_REDACAO_MANUAL_NOTA_1000
];

export const BOOKS_BY_AREA = {
  matematica: [LIVRO_MATEMATICA_FUNCOES, LIVRO_MATEMATICA_FUNDAMENTOS],
  natureza: [LIVRO_NATUREZA_ELETRODINAMICA, LIVRO_NATUREZA_ECOLOGIA],
  humanas: [LIVRO_HUMANAS_BRASIL_CONTEMPORANEO],
  linguagens: [BOOK_LINGUAGENS_GENEROS_ARGUMENTACAO],
  redacao: [BOOK_REDACAO_MANUAL_NOTA_1000]
};

export const getBookById = (id) => ALL_ENEM_BOOKS.find((b) => b.id === id) || null;

export const getChapter = (bookId, chapterId) => {
  const book = getBookById(bookId);
  if (!book) return null;
  const chapter = book.chapters.find((c) => c.id === chapterId || c.chapterNumber === chapterId);
  return chapter ? { book, chapter } : null;
};
